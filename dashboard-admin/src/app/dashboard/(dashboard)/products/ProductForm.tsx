'use client';

import { createProduct, editProduct } from "@/lib/api";
import { Category, Product } from "@/types";
import { Save, Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface ProductFormProps {

    product?: Product;
    categories: Category[];
}
export default function ProductForm({ product, categories }: ProductFormProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: product?.title || '',
        description: product?.description || '',
        price: product?.price || 0,
        discountPercentage: product?.discountPercentage || 0,
        stock: product?.stock || 0,
        brand: product?.brand || '',
        category: product?.category || '',
        thumbnail: product?.thumbnail || 'https://via.placeholder.com/400',

    })
    const route = useRouter()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            setLoading(true);
            if (product) {
                 const response = await editProduct(product.id!, formData); 
                console.log('Product updated:', response);

            } else {
                const response = await createProduct(formData);
                console.log('Product created:', response);
            }
            setLoading(false);
        } catch (error) {
            console.log('Error creating product:', error);
            setLoading(false);
        }


    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' || name === 'discountPercentage' || name === 'stock' ? Number(value) : value,
        }))
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form - 2 columns */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Info Card */}
                    <div className="bg-white rounded-lg shadow p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Product Title *
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                placeholder="Enter product title"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description *
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                                placeholder="Enter product description"
                            />
                        </div>
                        {/* Brand & Category */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Brand *
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    placeholder="Enter brand name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category *
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                >
                                    <option value="">Select category</option>
                                    {categories.map((cat: Category) => (
                                        <option key={cat.name} value={cat.name}>
                                            {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Pricing Card */}
                        <div className="bg-white rounded-lg shadow p-6 space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900">Pricing & Stock</h2>

                            <div className="grid grid-cols-3 gap-4">
                                {/* Price */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Price ($) *
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        step="0.01"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        placeholder="0.00"
                                    />
                                </div>

                                {/* Discount */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Discount (%)
                                    </label>
                                    <input
                                        type="number"
                                        name="discountPercentage"
                                        value={formData.discountPercentage}
                                        onChange={handleChange}
                                        min="0"
                                        max="100"
                                        step="0.01"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        placeholder="0"
                                    />
                                </div>

                                {/* Stock */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Stock *
                                    </label>
                                    <input
                                        type="number"
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Price Preview */}
                        {formData.price > 0 && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm text-gray-600 mb-2">Price Preview:</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-bold text-gray-900">
                                        ${formData.price}
                                    </span>
                                    {formData.discountPercentage > 0 && (
                                        <>
                                            <span className="text-lg text-gray-400 line-through">
                                                ${(formData.price / (1 - formData.discountPercentage / 100)).toFixed(2)}
                                            </span>
                                            <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                                                -{formData.discountPercentage}% OFF
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}


                        {/* Sidebar - 1 column */}
                        <div className="space-y-6">
                            {/* Image Upload */}
                            <div className="bg-white rounded-lg shadow p-6 space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900">Product Image</h2>

                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                        <img
                                            src={formData.thumbnail}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Image URL
                                        </label>
                                        <input
                                            type="url"
                                            name="thumbnail"
                                            value={formData.thumbnail}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                                            placeholder="https://example.com/image.jpg"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full mt-3 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        <Upload className="w-4 h-4" />
                                        <span className="text-sm">Upload Image</span>
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500">
                                    Recommended: 800x800px, Max 5MB
                                </p>
                            </div>

                        </div>
                        {/* Actions */}
                        <div className="bg-white rounded-lg shadow p-6 space-y-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                            >
                                <Save className="w-5 h-5" />
                                {loading ? 'Saving...' : product ? 'Update Product' : 'Create Product'}
                            </button>

                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                            >
                                <X className="w-5 h-5" />
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
}

