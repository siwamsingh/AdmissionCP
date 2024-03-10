import React from 'react'
import { motion } from 'framer-motion'

function AbroadCard({image,city="London",description=["String1","string2,Str","String4"]}) {
  return (
    <motion.div 
                
    initial={{ opacity: 1 , scale: 0.9 , rotateY: 90 , y:"5%" }}
    whileInView={{ opacity: 1  , scale: 1,rotateY: 0 , y:0}}
    transition={{ duration: 0.4, ease: "easeOut" }} >
      <div className='m-4 p-4 bg-white rounded-lg text-center cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-500 hover:shadow-md hover:shadow-blue-500  h-[340px] w-[230px]'>
        <div >
            <img src={image} alt="imagw" className='w-30 h-20 object-cover mb-2 mx-auto'/>
        </div>
        <h1 className='text-lg font-semibold text-gray-900'>
            {city}
        </h1>
        <div className='text-[0.8rem] sm:text-[14px] text-gray-700 mt-2'>

        <p>
            {description.map(ele=>(
                <p>
                    {ele}
                </p>
            ))}
        </p>
        </div>
      </div>
    </motion.div>
  )
}

export default AbroadCard
