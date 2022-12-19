import { ExitToApp } from '@mui/icons-material';
import Image from 'next/image'
import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../slices/cartSlice';
import {decrement, increment} from '../slices/cartSlice';

const FoodContainer = ({id, image, title, price}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.cart);
    console.log("cart : ",cart);
    // this invokes the removeFromBasket reducer only when the follwing item is present in the cart
    let cartPresent= false;
    const index = cart.findIndex((item)=> item.id == id);
    console.log("index : ",index);
    if(index>=0) {
        cartPresent = true;
    }else{
        cartPresent = false;
    }

    console.log("cart Present ? : ", cartPresent);

    const addToBasket = () => {
        dispatch(increment());
        dispatch(addToCart({id,image,title,price}));
    };

    const removeFromBasket = () => {
        dispatch(decrement());
        dispatch(removeFromCart(id));
    }

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
                    <div className='flex bg-[#f1ffef] rounded-[0.8rem] w-[70px]'>
                    {/* Remove Button */}
                    <button 
                    onClick={removeFromBasket}
                    className=' 
                    hover:scale-105 
                    hover:shadow-lg border border-red-200
                    w-full
                    rounded-l-[0.8rem]
                    border-r
                    bg-red-300 
                    text-black
                    text-[0.9rem]
                    text-center font-semibold 
                    '>-1</button>
                    {/* Add Button */}
                    <button 
                    onClick={addToBasket}
                    className='
                    hover:scale-105 
                    hover:shadow-lg border border-green-200
                    w-full
                    rounded-r-[0.8rem]
                    bg-green-300 
                    text-[0.9rem]
                    text-center font-semibold 
                    text-black'>+1</button>
                    </div>                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default FoodContainer