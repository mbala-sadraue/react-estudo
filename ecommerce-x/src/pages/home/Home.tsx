import { FaComputer, FaTv } from "react-icons/fa6"
import { IoIosFitness, IoMdArrowDropright, IoMdPhonePortrait } from "react-icons/io"
import { IoCameraOutline, IoGameControllerOutline } from "react-icons/io5"
import { PiBicycleLight } from "react-icons/pi"
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5 } from "react-icons/ri"

const Home = () => {
    return (

        <section className="max-w-screen-2xl mx-auto sm:py-3 sm:px-4 py-10  md:px-0">

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
                            <a href="#" className="flex items-center justify-between px-3 py-4 text-gray-500  border-gray-300">
                                <div className="flex items-center space-x-3">
                                    <IoGameControllerOutline className="text-xl" />
                                    <span className="text-sm">Mobile</span>
                                </div>
                                <IoMdArrowDropright />
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="bg-gray-100 md:col-span-2"></div>
                <div className="bg-white p-3 px-10">
                    <div>
                        <h2 className="font-semibold text-lg mb-3">Deal of the Day</h2>
                        <div className="">
                            <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3">
                                <div > <RiNumber1  className="text-2xl text-gray-400"/></div>
                                <div>
                                    <h4 className="text-xs">Product Name</h4>
                                    <p className="text-black font-semibold mt-1">$399.00</p>
                                </div>
                                <div className="w-15 h-15 rounded-lg bg-gray-300">
                                    
                                </div>
                            </div>
                             <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3">
                                <div > <RiNumber2  className="text-2xl text-gray-400"/></div>
                                <div>
                                    <h4 className="text-xs">Product Name</h4>
                                    <p className="text-black font-semibold mt-1">$399.00</p>
                                </div>
                                <div className="w-15 h-15 rounded-lg bg-gray-300">
                                    
                                </div>
                            </div>
                             <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3">
                                <div > <RiNumber3 className="text-2xl text-gray-400"/></div>
                                <div>
                                    <h4 className="text-xs">Product Name</h4>
                                    <p className="text-black font-semibold mt-1">$399.00</p>
                                </div>
                                <div className="w-15 h-15 rounded-lg bg-gray-300">
                                    
                                </div>
                            </div>
                             <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3">
                                <div > <RiNumber4  className="text-2xl text-gray-400"/></div>
                                <div>
                                    <h4 className="text-xs">Product Name</h4>
                                    <p className="text-black font-semibold mt-1">$399.00</p>
                                </div>
                                <div className="w-15 h-15 rounded-lg bg-gray-300">
                                    
                                </div>
                            </div>
                             <div className="text-sm flex justify-between items-center pb-3">
                                <div > <RiNumber5  className="text-2xl text-gray-400"/></div>
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
    )
}

export default Home