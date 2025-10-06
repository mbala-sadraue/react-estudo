import { getProducts, searchProducts } from "@/lib/api";
import { Plus } from "lucide-react";
import Link from "next/link";
import ProductsClient from "./ProductsClient";
import { log } from "console";
import { PaginatedResponse, Product } from "@/types";

interface PageProps {
    searchParams: {
        page?: string;
        search?: string;
        category?: string;
    };
}
export default async function Page({ searchParams }: PageProps) {
const resolvedSearchParams = await Promise.resolve(searchParams);
    const categories: string[] = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"];
    let productsData: PaginatedResponse<Product>;
// const queryParams = searchParams   
// const page = Number( searchParams?.page) || 1;
const searchParam = resolvedSearchParams?.search || '';
const page = parseInt(resolvedSearchParams?.page || '1') || 1;
const categoryParam = resolvedSearchParams?.category || '';

    const limit = 12;
    const skip = (page - 1) * limit;
console.log(searchParam.trim() === '');

if(searchParam && searchParam.trim() !== ''){
   productsData = await searchProducts(searchParam);
}else{
    // Fetch data
     [productsData] = await Promise.all([
        getProducts(limit, skip),
        // getCategories()
    ]);

}

    log('Products Data:', productsData.total);

    // Calculate total pages
    const totalPages = Math.ceil(productsData.total / limit);
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Products</h1>
                    <p className="text-gray-500 mt-1">
                        Manage your product inventory ({40} products)
                    </p>
                </div>
                <Link
                    href="/dashboard/products/new"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add Product
                </Link>
            </div>
            {/* Client Component with Filters */}
            <ProductsClient
                initialProducts={productsData.products}
                categories={categories}
                currentPage={page}
                totalPages={totalPages}
                searchQuery={searchParam || ''}
                selectedCategory={categoryParam || ''}
            />
        </div>
    )
}