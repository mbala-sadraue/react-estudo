import { CiHeart } from "react-icons/ci"
import { FaComputer, FaTv } from "react-icons/fa6"
import { IoIosFitness, IoMdArrowDropright, IoMdPhonePortrait } from "react-icons/io"
import { IoCameraOutline, IoGameControllerOutline } from "react-icons/io5"
import { MdAddShoppingCart } from "react-icons/md"
import { PiBicycleLight } from "react-icons/pi"
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5 } from "react-icons/ri"
import { TfiReload } from "react-icons/tfi"

const Home = () => {
    return (
        <main>
            <section className="max-w-screen-2xl mx-auto py-3 sm:px-4 lg:pt-10  md:px-0">
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white pb-5">

                        <ul>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4  text-gray-500 border-b border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <IoMdPhonePortrait className="text-xl" />
                                        <span className="text-sm">Mobile</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4  text-gray-500 border-b border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <FaComputer className="text-xl" />
                                        <span className="text-sm">Computers</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4 text-gray-500 border-b border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <IoCameraOutline className="text-xl" />
                                        <span className="text-sm">Video & Cameras</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4 text-gray-500 border-b border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <FaTv className="text-xl" />
                                        <span className="text-sm">Televisions</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4 text-gray-500 border-b border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <PiBicycleLight className="text-xl" />
                                        <span className="text-sm">Bicycles</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4 text-gray-500 border-b border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <IoIosFitness className="text-xl" />
                                        <span className="text-sm">Fitness</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4  border-b  border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <IoGameControllerOutline className="text-xl" />
                                        <span className="text-sm">Mobile</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4  text-gray-500 border-b border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <IoMdPhonePortrait className="text-xl" />
                                        <span className="text-sm">Mobile</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between px-3 py-4">
                                    <div className="flex items-center space-x-3">
                                        <FaComputer className="text-xl" />
                                        <span className="text-sm">Computers</span>
                                    </div>
                                    <IoMdArrowDropright />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="bg-blue-950 md:col-span-2"></div>
                    <div className="bg-white p-3 px-10">
                        <div>
                            <h2 className="font-semibold text-lg mb-3">Deal of the Day</h2>
                            <div className="">
                                <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3 my-4">
                                    <div > <RiNumber1 className="text-2xl text-gray-400" /></div>
                                    <div>
                                        <h4 className="text-xs">Product Name</h4>
                                        <p className="text-black font-semibold mt-1">$399.00</p>
                                    </div>
                                    <div className="w-15 h-15 rounded-lg bg-gray-300">

                                    </div>
                                </div>
                                <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3 my-4">
                                    <div > <RiNumber2 className="text-2xl text-gray-400" /></div>
                                    <div>
                                        <h4 className="text-xs">Product Name</h4>
                                        <p className="text-black font-semibold mt-1">$399.00</p>
                                    </div>
                                    <div className="w-15 h-15 rounded-lg bg-gray-300">

                                    </div>
                                </div>
                                <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3 my-4">
                                    <div > <RiNumber3 className="text-2xl text-gray-400" /></div>
                                    <div>
                                        <h4 className="text-xs">Product Name</h4>
                                        <p className="text-black font-semibold mt-1">$399.00</p>
                                    </div>
                                    <div className="w-15 h-15 rounded-lg bg-gray-300">

                                    </div>
                                </div>
                                <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3 my-4">
                                    <div > <RiNumber4 className="text-2xl text-gray-400" /></div>
                                    <div>
                                        <h4 className="text-xs">Product Name</h4>
                                        <p className="text-black font-semibold mt-1">$399.00</p>
                                    </div>
                                    <div className="w-15 h-15 rounded-lg bg-gray-300">

                                    </div>
                                </div>
                                <div className="text-sm flex justify-between items-center pb-3">
                                    <div > <RiNumber5 className="text-2xl text-gray-400" /></div>
                                    <div>
                                        <h4 className="text-xs">Product Name</h4>
                                        <p className="text-black font-semibold mt-1">$399.00</p>
                                    </div>
                                    <div className="w-15 h-15 rounded-lg bg-gray-300">

                                    </div>
                                </div>

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
                    <div className="flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory gap-4 w-full   rounded-lg  lg:overflow-x-hidden">
                        <div className="bg-white text-lg font-bold  md:flex-1 snap-start rounded-sm p-2">
                            <div className="bg-gray-100 min-w-[280px] min-h-[280px] ">

                            </div>
                            <div className="mt-2">
                                <h4 className="text-sm">Product Name</h4>
                                <p className="text-black font-semibold mt-1 text-sm">$399.00</p>
                            </div>
                            <div className="mt-1 border-t border-gray-300 pt-2 text-xs text-gray-500">
                                <div className="flex">
                                    <input type="number" className="border border-gray-300 rounded-md p-1 w-16 focus-visible:border-red-500" name="quantity" id="" minLength={1} min={0} />
                                    <button className=" flex-1 py-1 rounded-md ml-3 flex items-center hover:text-blue-500">
                                        <MdAddShoppingCart className="mr-2 text-xl" />
                                        Add to Cart
                                    </button>
                                    <div className="flex space-x-3 justify-between items-center py-1">
                                        <CiHeart  className="text-xl" />
                                        <TfiReload className="text-xl" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white p-4 text-lg font-bold min-w-[270px] md:flex-1 snap-start rounded-sm">Item 2</div>
                        <div className="bg-white p-4 text-lg font-bold min-w-[270px] md:flex-1 snap-start rounded-sm">Item 3</div>
                        <div className="bg-white  p-4 text-lg font-bold min-w-[270px] md:flex-1 snap-start rounded-sm">Item 4</div>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default Home