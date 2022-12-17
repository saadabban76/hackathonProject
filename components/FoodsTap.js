import React from 'react';
import foods from '../json/foods.json';
import FoodContainer from './FoodContainer';

const FoodsTap = () => {
  return (
    <div className='bg-white container p-6 py-4'>
        {/* Foods Header */}
        <div className='w-full py-3 border-gray-400 border-b'>
            <h3 className='text-black text-[1.7rem] font-semibold'>Order food online </h3>
        </div>
        {/* Foods Section */}
        <div className='py-8 flex flex-col md:grid md:grid-cols-3 xl:grid-cols-4'>
            {foods.map((item,id)=> (
                <FoodContainer 
                    key={id}
                    title={item.title}
                    price={item.price}
                    image={item.images}
                />
            ))}
        </div>
    </div>
  )
}

export default FoodsTap