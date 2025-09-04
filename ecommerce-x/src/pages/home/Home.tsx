import {  IoMdArrowDropright, IoMdPhonePortrait } from "react-icons/io"

const Home = () => {
    return (

        <section className="max-w-screen-2xl mx-auto sm:py-3 sm:px-4 py-10  md:px-0">

            <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white ">

                    <ul>
                        <li>
                            <a href="#" className="flex items-center justify-between p-3  text-gray-500">
                                <div className="flex items-center space-x-3">
                                    <IoMdPhonePortrait />
                                    <span>Mobile</span>
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