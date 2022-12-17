import Image from 'next/image'
import React from 'react'
import {  useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/example'

const FoodContainer = ({image, title, price}) => {
    const dispatch = useDispatch();
  return (
    <div className='py-4 md:max-w-[254px] text-black'>
        {/* Main */}
        <div className='md:flex-col w-full max-h-[350px] hover:scale-105 hover:shadow-lg  
        cursor-pointer p-4 border border-gray-200 rounded-[1.1rem] justify-between flex gap-2'>
            {/* Food Image */}
            <div className=''>
                <Image 
                src={image}
                className='rounded-[1.1rem]'
                width={254}
                height={160}
                alt='' />
            </div>
            {/* details */}
            <div className=' flex-col mx-2 flex-1 flex gap-3 justify-between'>
                <div className='border-b pb-2 px-1 flex md:flex-row gap-3 flex-col justify-between'>
                    <h4 
                    className='text-[1.3rem] font-semibold'>{title}</h4>
                    <p className='text-[1.1rem]'>₹{price}</p>
                </div>
                {/* buttons */}
                <div className='flex gap-3 flex-col md:flex-row'>
                    <div className='bg-[#faecec] w-[70px] hover:scale-105 hover:shadow-lg border border-red-200 p-1 px-4 rounded-[0.8rem]'>
                    <button 
                    className=' 
                    text-[0.9rem]
                    text-center font-semibold 
                    text-red-500'>Order</button>
                    </div>
                    <div className='bg-[#f1ffef] w-[70px] hover:scale-105 hover:shadow-lg border border-green-200 p-1 px-4 rounded-[0.8rem]'>
                    <button 
                    onClick={()=> dispatch(increment())}
                    className=' 
                    text-[0.9rem]
                    text-center font-semibold 
                    text-green-600'>Add</button>
                    </div>

                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default FoodContainer