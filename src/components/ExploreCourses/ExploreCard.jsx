import React from 'react'
import { motion } from 'framer-motion'

function ExploreCard({ image = "https://cdn-icons-png.flaticon.com/128/609/609034.png", tag = "tag" }) {

    return (
        <motion.div

        initial={{ opacity: 0 , scale: 0.7 , y:"30%" }}
  whileInView={{ opacity: 1  , scale: 1 , y:0}}
  transition={{ duration: 0.4, ease: "easeOut" }}

         className='bg-[#EEEEFF] w-[200px] p-4 rounded-lg text-center px-10 cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] items-center flex  justify-center hover:shadow-[0_10px_20px_rgba(_0,_80,240,_1)] hover:scale-110 duration-500'>
            <div className='  w-fit'>
                <div>
                    <img src={image} alt="img" className='w-[50px] h-[50px] sm:w-[6rem] sm:h-[6rem]' />
                </div>
                <h2 className='cursor-pointer text-xs mt-4 sm:text-[15px] font-semibold text-gray-700 hover:text-blue-300 duration-500'>
                    {tag}
                </h2>
            </div>
        </motion.div>
    )
}

export default ExploreCard
