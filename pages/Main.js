import Image from 'next/image';
import React from 'react'
import FoodsTap from '../components/FoodsTap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import WhatWeServe from '../components/WhatWeServe'
import main from '../public/images/wwsMain.jpg';
import SignUp from './SignUp';

const Main = () => {
  return (
    <div>
        <Navbar />
        <div className='md:h-[479px] h-[260px]'>
          <Image className='priority object-fill h-full w-full' src={main} alt='' />
        </div>
        <WhatWeServe />
        <FoodsTap />
        <Footer />
    </div>
  )
}

export default Main