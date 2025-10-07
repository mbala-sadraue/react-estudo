export interface ProductType {
    id: number;
    title: string;
    description: string;
    price: Number;
    thumbnail:string; 
    
}
export interface ProductsResponse {
    products: ProductType[];
 }