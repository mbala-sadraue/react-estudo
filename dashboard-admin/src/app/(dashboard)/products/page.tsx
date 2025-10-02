import { getProducts } from "@/lib/api";
import { Plus } from "lucide-react";
import Link from "next/link";

interface PageProps {
    searchParams: {
        page?: string;
        search?: string;
        category?: string;
    };
}
export default async function Page({ searchParams }: PageProps) {

    const page = Number(searchParams.page) || 1;
  const limit = 12;
  const skip = (page - 1) * limit;

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
        </div>
    )
}