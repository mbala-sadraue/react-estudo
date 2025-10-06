import { getProducts } from "@/lib/api";
import { Plus } from "lucide-react";
import Link from "next/link";
import ProductsClient from "./ProductsClient";
import { log } from "console";

interface PageProps {
    searchParams: {
        page?: string;
        search?: string;
        category?: string;
    };
}
export default async function Page({ searchParams }: PageProps) {
const categories: string[] = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"];
// const queryParams = searchParams   
// const page = Number( searchParams?.page) || 1;
const searchParam = searchParams?.search || '';
const page = parseInt(searchParams?.page || '1') || 1;
const categoryParam = searchParams?.category || '';

log( searchParam);
    const limit = 12;
    // const skip = (page - 1) * limit;
    const skip = 1;

    // Fetch data
    const [productsData] = await Promise.all([
        getProducts(limit, skip),
        // getCategories()
    ]);

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
                totalPages={1}
                searchQuery={searchParams.search || ''}
                selectedCategory={searchParams.category || ''}
            />
        </div>
    )
}