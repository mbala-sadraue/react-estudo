
import { MdAddShoppingCart } from "react-icons/md"
import { TfiReload } from "react-icons/tfi"
import { CiHeart } from "react-icons/ci"
import  '../../pages/home/Home'
import type { Product } from "../../pages/home/Home"

const ProductCardBig = ( {product}:{product:Product} ) => {
      return (
        <div className="bg-white text-lg font-bold   snap-start rounded-sm p-2">
            <div className="bg-gray-100 min-w-[280px] min-h-[280px] relative">
                <div className="bg-blue-100 absolute right-2 top-2 py-2 px-3 rounded-md border border-gray-400">
                    <p className="text-xs font-medium text-blue-700">New</p>
                </div>
            </div>
            <div className="mt-2">
                <h4 className="text-sm">{product.name}</h4>
                <p className="text-black font-semibold mt-1 text-sm">${product.price}.00</p>
            </div>
            <div className="mt-1 border-t border-gray-300 pt-2 text-xs text-gray-500">
                <div className="flex">
                    <input type="number" className="border border-gray-300 rounded-md p-1 w-16 focus-visible:border-red-500" name="quantity" id="" minLength={1} min={0} />
                    <button className=" flex-1 py-1 rounded-md ml-3 flex items-center hover:text-blue-500">
                        <MdAddShoppingCart className="mr-2 text-xl" />
                        Add to Cart
                    </button>
                    <div className="flex space-x-3 justify-between items-center py-1">
                        <CiHeart className="text-xl" />
                        <TfiReload className="text-xl" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export {ProductCardBig}