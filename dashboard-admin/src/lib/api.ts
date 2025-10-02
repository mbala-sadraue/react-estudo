import { PaginatedResponse, Product } from "@/types";
import { log } from "console";

const API_URL = 'https://dummyjson.com/'
export async function getProducts(limit  = 30, skip = 0): Promise<PaginatedResponse<Product>> { 
    const response  =  await fetch(`${API_URL}products?limit=${limit}&skip=${skip}`);
    const data = await response.json();
    return data;
}

export async function getDashboardStats() {
    const products = await getProducts(0, 0);
    return {
        totalProducts: products.total,
       
    };
}