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

export async function searchProducts(query: string): Promise<PaginatedResponse<Product>> {
  const res = await fetch(`${API_URL}products/search?q=${query}`);
  if (!res.ok) throw new Error('Failed to search products');
  return res.json();
}


export async function getCategories(){
    const response = await fetch(`${API_URL}products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
}