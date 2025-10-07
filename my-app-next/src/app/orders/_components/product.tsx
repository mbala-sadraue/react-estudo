// "use client"
import type  {ProductType}  from "../../types/product";

import React from "react";
import { useEffect } from "react";

export async function Product({ id }: { id: number }) {

    const request = await fetch(`https://dummyjson.com/products/${id}`);
await new Promise((resolve) => setTimeout(resolve, 4000));
    const product: ProductType = await request.json();
    console.log("Order ID:", product);

    
        return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price.toString()}</p>
            <img src={product.thumbnail} alt={product.title} />

        </div>
        );

    // const [product, setProduct] = React.useState<ProductType | null>(null);
    // useEffect(() => {

    //     const getProductById = async (id: number) => {
    //         await new Promise((resolve) => setTimeout(resolve, 4000));
            
    //         const request = await fetch(`https://dummyjson.com/products/${id}`);

    //         const product: ProductType = await request.json();
    //         setProduct(product);
    //     };
    //     getProductById(id);
    // }, []);
    // console.log("Order ID:", product);
    // return (
    //     <div>
    //         {product ? (
    //             <div>
    //                 <h1>{product.title}</h1>
    //                 <p>{product.description}</p>
    //                 <p>Price: ${product.price.toString()}</p>
    //                 <img src={product.thumbnail} alt={product.title} />
    //             </div>
    //         ) : (
    //             <p>Não tem</p>
    //         )}

    //     </div>
    // );
}
