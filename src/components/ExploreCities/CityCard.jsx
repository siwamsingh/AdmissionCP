import React from 'react'
import { motion } from 'framer-motion'

function CityCard({ cityImage = "https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=", cityName = "hmm" }) {
    return (
        <motion.div 
                
        initial={{ opacity: 1 , scale: 0.9 , y:"10%" }}
        whileInView={{ opacity: 1  , scale: 1 , y:0}}
        transition={{ duration: 0.4, ease: "easeOut" }}  >
            <div className='group relative w-[8.5rem]  sm:w-[17rem] flex h-[10rem] sm:h-[20rem] items-end overflow-hidden rounded-lg p-4 shadow-lg'>
                <img src={cityImage} alt="img" className='absolute object-cover h-full w-full inset-0 hover:scale-110 transition ease-in-out duration-300' />

                <div className="relative flex w-full flex-col rounded-lg p-2 sm:p-4 text-center"
                style={{backgroundColor: "rgba(255, 255, 255, 0.5)" , backdropFilter: "blur(6px)" }}>
                    <span class="text-white font-semibold text-[0.8rem] sm:text-sm ">{cityName}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default CityCard
