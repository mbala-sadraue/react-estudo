import { FaComputer, FaTv } from "react-icons/fa6"
import { IoIosFitness, IoMdPhonePortrait } from "react-icons/io"
import { IoCameraOutline, IoGameControllerOutline } from "react-icons/io5"
import { PiBicycleLight } from "react-icons/pi"
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5 } from "react-icons/ri"

import { ProductCardBig } from "../../components/product/ProductCardBig"
import { ProductCardSmall } from "../../components/product/ProductCardSmall"
import { CategoryLink } from "../../components/CategoryLink"
import ProductDealDay from "../../components/product/ProductDealDay"
import { useEffect, useState } from "react"


export interface Product {
    id: number;
    name: string;
    price: number;
}
const Home = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const listProducts:Product[] = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        { id: 4, name: 'Product 4', price: 400 },
        { id: 5, name: 'Product 5', price: 500 },
        { id: 6, name: 'Product 6', price: 600 },
        { id: 7, name: 'Product 7', price: 700 },
        { id: 8, name: 'Product 8', price: 800 },
        { id: 9, name: 'Product 9', price: 900 },
        { id: 10, name: 'Product 10', price: 1000 },

    ]
    const listProductsSmall = products.map((product, index) => index != 9 && <ProductCardSmall key={index} product={product} />);
    const listaProdutos =  products.map((product) =>    <ProductCardBig  key={product.id} product={product}/>);

    useEffect(
        () => {

            updateProductList(listProducts);

        }, [])


    const updateProductList = (newProducts: Product[]) => {
        setProducts(newProducts);
    }



    return (
        <main className="lg:p-0 px-5" >
            <section className="max-w-screen-2xl mx-auto py-3 sm:px-4 lg:pt-10  md:px-0">
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white pb-5">
                        <ul>
                            <CategoryLink icon={IoMdPhonePortrait} label="Mobile" />
                            <CategoryLink icon={FaComputer} label="Computers" />
                            <CategoryLink icon={IoCameraOutline} label="Video & Cameras" />
                            <CategoryLink icon={FaTv} label="Televisions" />
                            <CategoryLink icon={PiBicycleLight} label="Bicycles" />
                            <CategoryLink icon={IoIosFitness} label="Fitness" />
                            <CategoryLink icon={IoGameControllerOutline} label="Gaming" />
                            <CategoryLink icon={IoMdPhonePortrait} label="Mobile" />
                            <CategoryLink icon={FaComputer} label="Computers" />
                        </ul>
                    </div>
                    <div className="bg-blue-950 md:col-span-2"></div>
                    <div className="bg-white p-3 px-10">
                        <div>
                            <h2 className="font-semibold text-lg mb-3">Deal of the Day</h2>
                            <div className="">
                                <ProductDealDay icon={RiNumber1} label="Product 1" />
                                <ProductDealDay icon={RiNumber2} label="Product 2" />
                                <ProductDealDay icon={RiNumber3} label="Product 3" />
                                <ProductDealDay icon={RiNumber4} label="Product 4" />
                                <ProductDealDay icon={RiNumber5} label="Product 5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-screen-2xl mx-auto sm:py-3 sm:px-4  lg:px-0">
                <div className="flex">
                    <div className="flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory gap-4 w-full   rounded-lg  lg:overflow-x-hidden">
                        <div className="bg-white text-lg font-bold min-w-[270px] h-50 md:flex-1 snap-start rounded-sm">Item 1</div>
                        <div className="bg-white p-4 text-lg font-bold min-w-[270px] md:flex-1 snap-start rounded-sm">Item 2</div>
                        <div className="bg-white p-4 text-lg font-bold min-w-[270px] md:flex-1 snap-start rounded-sm">Item 3</div>
                        <div className="bg-white  p-4 text-lg font-bold min-w-[270px] md:flex-1 snap-start rounded-sm">Item 4</div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="max-w-screen-2xl mx-auto sm:py-3 sm:px-4  lg:px-0">
                <div className="flex py-3 justify-between items-center mb-3">
                    <h3 className="text-md font-bold">New Arrivals</h3>
                    <a href="http://" className="">See All</a>
                </div>
                <div className="flex">
                    <div className="flex flex-row-2 overflow-x-auto scrollbar-hidden snap-x snap-mandatory gap-4 w-full   rounded-lg  lg:overflow-x-hidden">
                        {listaProdutos}
                    </div>
                </div>
                <section className="h-40 my-10 px-3 bg-white rounded-md"></section>
            </section>
            <section className="max-w-screen-2xl mx-auto sm:py-3 sm:px-4  lg:px-0">
                <div className="">
                    <div className="lg:flex py-3   mb-3">
                        <div className="lg:w-1/3 min-h-90 lg:min-h-full bg-gray-300  mr-2"> </div>
                        <div className="flex-1 lg:ml-5">
                            <div className="flex   justify-between">
                                <h3 className="text-md font-bold">Top Categories</h3>
                                <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">8 Items</div>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="grid grid-rows-2 grid-flow-col md:grid-rows-3 gap-3 max-w">
                                    {/* <ProductCardSmall className="" /> */}
                                    {listProductsSmall}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home