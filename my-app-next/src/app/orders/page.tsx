import { Metadata } from "next";

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
export const  metadata:Metadata ={
title:'order page',
description:'pagina de pedidos',

}
const OrderPage = async ()  =>{

    const response = await fetch('https://dummyjson.com/products');
    const data: ProdutsResponse = await response.json();


    const produtos = data.products.map((product) => (
        <div key={product.id}>
                <img src={product.thumbnail} alt="" />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price.toString()}</p>
        </div> )
         )
    return (
    <div className="max-w-7xl m-auto">
        <h1>Order Page</h1>
        <div className="grid grid-cols-3 gap-4">
            {produtos}
        </div>


    </div>)
}

export default OrderPage;