
'use client'
import { Metadata } from "next";
import  Link  from "next/link";
import React, { use, useEffect } from "react";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: Number;
    thumbnail:string; 
    
}
interface ProdutsResponse {
    products: Product[];
 }
// export const  metadata:Metadata ={
// title:'order page',
// description:'pagina de pedidos',

// }
const OrdersPage = () => {
'use client'
    const [products, setProducts] = React.useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data: ProdutsResponse = await response.json();
            setProducts(data.products);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Orders Page</h1>
            <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4">
                    <Link href={`/orders/${product.id}`}>
                        <h2 className="font-bold">{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toString()}</p>
                        <img src={product.thumbnail} alt={product.title} />
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )

}
// const OrderPage = async ()  =>{

//     const response = await fetch('https://dummyjson.com/products');
//     const data: ProdutsResponse = await response.json();


//     const produtos = data.products.map((product) => (
//         <div key={product.id}>
     
//             <h2 className="font-bold">{product.title}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price.toString()}</p>
//             <img src={product.thumbnail} alt={product.title} />
     
//         </div> )
//          )
//     return (
//     <div className="max-w-7xl m-auto">
//         <h1>Order Page</h1>
//         <div className="grid grid-cols-3 gap-4">
//             {produtos}
//         </div>


//     </div>)
// }

export default OrdersPage;