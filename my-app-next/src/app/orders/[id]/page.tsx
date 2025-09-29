import { log } from "console";
import { Product } from "../page";



export default async function OrderPage({params}: {params:Promise<any> }) {
const {id} = await params;
const request = await fetch(`https://dummyjson.com/products/${id}`);

const product: Product = await request.json();
log("Order ID:", product);
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toString()}</p>
      <img src={product.thumbnail} alt={product.title} />
      
    </div>
  );
}
