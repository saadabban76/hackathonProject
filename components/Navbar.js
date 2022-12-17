import Link from 'next/link'
import React from 'react'
import {BiSearch} from 'react-icons/bi';
import {IoFastFoodSharp} from 'react-icons/io5';
import {BsBag} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import { useSelector,useDispatch } from 'react-redux';



const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  return (
    <div className='p-4 shadow-lg px-6 font-semibold text-[1rem] bg-white text-black'>
        {/* main */}
        <div className='flex container items-center md:justify-between'>
            <Link href='' className='flex-1 text-[1.2rem] text-orange-600'>Logo.</Link>
            <div className='hidden relative rounded-[0.7rem] mr-2 p-2 flex-1 px-2 hover:shadow-xl md:flex items-center space-x-5'>
                <BiSearch className='absolute text-[1.4rem] top-3.3 left-1' />
                <input 
                type='text'
                placeholder='Search'
                className='p-1 bg-white text-black outline-none focus:border-0' 
                />
            </div>
            {/* Left */}
            <div className='flex text-gray-7m nbhyu
            00 space-x-5'>
              <div className='flex space-x-2 items-center'>
                <IoFastFoodSharp className='text-[1.2rem]' />
                <Link href='' className='hidden md:inline-block'>Orders</Link>
              </div>
              {/* Cart */}
              <div className='relative flex space-x-2 items-center'>
                <p className='absolute text-orange-600 text-[1rem] font-bold top-[2px] left-3'>{count}</p>
                <BsBag className='text-[1.2rem]' />
                <Link href='' className='hidden md:inline-block'>Cart</Link>
              </div>

              <div className='flex space-x-2 items-center'>
                <CgProfile className='text-[1.2rem]' />
                <Link href='' className='hidden md:inline-block'>Profile</Link>
              </div>
            </div>
            {/* <Link href=''>Logo.</Link> */}
        </div>
        {/* Search Bar for mobile */}
        <div className='md:hidden border-gray-200 border shadow-sm mt-4 relative bg-[#ececec] rounded-[0.7rem] mr-1 p-1 flex-1 px-1 hover:shadow-xl flex items-center space-x-5'>
                <BiSearch className='absolute text-gray-600 text-[1.4rem] top-3.3 right-2' />
                <input 
                type='text'
                placeholder='Search for foods'
                className='p-1 bg-[#ececec] text-gray-700 outline-none focus:border-0' 
                />
            </div>
    </div>
  )
}

export default Navbar