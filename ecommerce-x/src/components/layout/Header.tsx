import { BsCart4, BsTwitterX } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoMail, GoPerson } from 'react-icons/go'
import { IoIosSearch, IoMdArrowDropdown } from 'react-icons/io'
import { LuBookText } from 'react-icons/lu'
import { MdFavoriteBorder } from 'react-icons/md'
import { SlSocialFacebook } from 'react-icons/sl'
import { TbBrandTiktok, TbPhoneCall } from 'react-icons/tb'

const Header = () => {
    return (
        <header className='sm:py-3 sm:px-4 px-4 py-3 bg-blue-950 text-white'>
            <div className='max-w-screen-2xl m-auto'>
                {/* Social Media Links */}
                <div className='hidden lg:block'>
                    <div className='flex justify-between mb-4'>
                        <div className='flex text-xs space-x-4'>
                            <a href="tel:+1234567890" className='hover:underline cursor-pointer flex items-center space-x-1'> <TbPhoneCall /> <span> +1 234 567 890</span></a>
                            <a href="#" target="_blank" className='hover:underline cursor-pointer  flex items-center space-x-1'><span> Order item</span></a>
                            <a href="#" target="_blank" className='hover:underline cursor-pointer  flex items-center space-x-1'> <TbPhoneCall /> <span> FAQ</span></a>
                            <a href="" className='hover:underline cursor-pointer flex items-center space-x-1'><GoMail /><span>  info@ecommercex.com</span></a>
                        </div>
                        <div className='flex space-x-4 text-xs'>
                            <a href="#" target="_blank" className=' cursor-pointer  flex items-center space-x-1'> <TbBrandTiktok />

                                <span> 10M</span></a>
                            <a href="#" target="_blank" className=' cursor-pointer  flex items-center space-x-1'> <SlSocialFacebook /><span> 15M</span></a>
                            <a href="#" target="_blank" className=' cursor-pointer  flex items-center space-x-1'> <FaInstagram />
                                <span> 9M</span></a>
                            <a href="#" target="_blank" className=' cursor-pointer  flex items-center space-x-1'> <BsTwitterX />
                                <span> 2M</span></a>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='lg:flex lg:items-center lg:justify-between space-y-3 lg:space-y-0'>

                        {/* Logo  */}
                        <div>
                            <div className="flex items-center justify-between py-2 lg:mr-14">
                                <div className="flex items-center space-x-4 ">
                                    <div>
                                        <GiHamburgerMenu className='text-3xl' />
                                    </div>
                                    <div className='flex items-center'>
                                        <h1 className='text-xl font-bold uppercase'>EommerceX</h1>
                                    </div>
                                </div>

                                <div className='flex items-center space-x-4 lg:hidden'>
                                    <GoPerson className='text-3xl' />
                                    <MdFavoriteBorder className='text-3xl' />
                                    <BsCart4 className='text-3xl' />
                                </div>

                            </div>

                        </div>

                        {/* Search Bar */}
                        <div className='lg:flex-1 lg:mx-6 lg:items-center'>

                            <div className='flex items-center bg-white text-gray-500 p-2 rounded-sm mt-3 md:mt-0 text-sm'>
                                <div className='flex items-center space-x-1 '><span>All</span> <IoMdArrowDropdown /></div>
                                <div className='mx-2 flex-1'>
                                    <input type="text" placeholder='search products' className='outline-none  w-full py-0.5 focus-visible:border-0 md:py-0' name='name' id='name'  />
                                </div>
                                <div className='ml-1'>
                                    <IoIosSearch className='text-2xl' />
                                </div>
                            </div>
                        </div>

                        {/* User Actions */}
                        <div className='hidden lg:flex lg:items-center lg:space-x-6 text-xs self-center'>
                            <a href="#" className='text-gray-500 flex items-center bg-white px-3 rounded-md space-x-2 py-3'>   <GoPerson className='text-xl' /><span className=''>  Account</span><IoMdArrowDropdown /> </a>
                            <a href="#" className='text-gray-500 flex items-center bg-white px-3 rounded-md space-x-2 py-3'>   <GoMail className='text-xl' /><span className=''>  Contact</span> </a>
                            <a href="#" className='text-gray-500 flex items-center bg-white px-3 rounded-md space-x-2 py-3'>   <LuBookText className='text-xl' /><span className=''>  Feed</span> </a>
                        </div>

                        {/* Navigation Links */}
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
