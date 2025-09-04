import { FaComputer, FaTv } from "react-icons/fa6"
import { GiHeadphones } from "react-icons/gi"
import {  IoIosFitness, IoMdArrowDropright, IoMdPhonePortrait } from "react-icons/io"
import { IoCameraOutline, IoGameControllerOutline } from "react-icons/io5"
import { PiBicycleLight } from "react-icons/pi"

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
                <div className="bg-amber-500 md:col-span-2">B</div>
                <div className="bg-amber-200">C</div>
            </div>


        </section>
    )
}

export default Home