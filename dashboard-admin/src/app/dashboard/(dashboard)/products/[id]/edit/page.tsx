import { getCategories, getProductById } from "@/lib/api";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductForm from "../../ProductForm";

export default async function ProductEditPage({ params }: { params: { id: string } }) {


     const param = await Promise.resolve(params);
     const  product = await getProductById(parseInt(param.id));
     const categories = await getCategories();
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href={`/dashboard/products/${param.id}`}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
          <p className="text-gray-500 mt-1">Update product information</p>
        </div>
      </div>

      {/* Form */}
      <ProductForm product={product} categories={categories} />
    </div>
  );
}
