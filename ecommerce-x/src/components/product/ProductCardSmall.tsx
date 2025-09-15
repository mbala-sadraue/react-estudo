import { CiHeart } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

const ProductCardSmall  = ({ className }: { className?: string }) => {
   return (
        <div className={`min-w-[300px] flex  bg-white  ${className}`}>
            <div className="flex flex-col-2 space-x-3  p-2">
                <div className="w-20 h-20 bg-gray-300 rounded-md">

                </div>
                <div>
                    <h4 className="text-sm mt-2">Product Name</h4>
                    <p className="text-black font-semibold mt-1 text-sm">$399.00</p>
                    <div className="flex space-x-3 items-center py-1 mt-2">
                        <MdAddShoppingCart className="mr-2 text-sm" />
                        <CiHeart className="text-sm" />
                        <TfiReload className="text-sm" />
                    </div>
                </div>
            </div>
        </div>);
}

export { ProductCardSmall }