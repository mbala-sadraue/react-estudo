import { BsCart4 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoPerson } from 'react-icons/go'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdFavoriteBorder } from 'react-icons/md'

const Header = () => {
    return (
        <header className='sm:py-3 sm:px-4 bg-blue-950 text-white'>
            {/* Social Media Links */}
            <div>
                <div className="flex items-center justify-between ">
                    <div className="flex items-center space-x-4 ">
                        <div>
                            <GiHamburgerMenu className='text-2xl' />
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-xl font-bold uppercase'>EommerceX</h1>
                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <GoPerson className='text-2xl' />
                        <MdFavoriteBorder className='text-2xl' />
                        <BsCart4 className='text-2xl' />
                    </div>

                </div>

            </div>
            {/* Search Bar */}
            <div>

                <div className='flex items-center bg-white text-gray-700 p-2 rounded-sm mt-3'>
                    <div className='flex items-center space-x-1 '><span>All</span> <IoMdArrowDropdown /></div>
                    <div className='mx-2 flex-1'>
                        <input type="text" placeholder='search products' className='bg-red-700  w-full py-0.5 focus-visible:border-0' />
                    </div>
                    <div className='ml-1'></div>
                </div>
            </div>

            {/* Navigation Links */}
            <div></div>
        </header>
    )
}

export default Header
