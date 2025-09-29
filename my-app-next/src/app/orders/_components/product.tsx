"use client"
import type  {ProductType}  from "../../types/product";

import React from "react";
import { useEffect } from "react";

export function Product({ id }: { id: number }) {
    const [product, setProduct] = React.useState<ProductType | null>(null);
    useEffect(() => {

        const getProductById = async (id: number) => {
            
            const request = await fetch(`https://dummyjson.com/products/${id}`);

            const product: ProductType = await request.json();
            setProduct(product);
        };
        getProductById(id);
    }, []);
    console.log("Order ID:", product);
    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price.toString()}</p>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
            ) : (
                <p>Não tem</p>
            )}

        </div>
    );
}
