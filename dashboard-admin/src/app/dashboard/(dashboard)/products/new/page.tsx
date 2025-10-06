import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductForm from "../ProductForm";

export default function NewProductPage(){
    return (
         <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/products"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Add New Product 2</h1>
      </div>

      {/* Form */}
      <ProductForm />
      <p></p>
    </div>
    )
}