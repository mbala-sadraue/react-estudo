'use client';

import { Category, Product } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface ProductFormProps {

    product?: Product;
    catetories?: Category;
}
export default function ProductForm({ product }: ProductFormProps) {

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
    return <div>ProductForm</div>;
}