import React from 'react'
import { motion } from 'framer-motion'

function Counselling() {
    return (
        <div
        >
            <div className='flex  justify-center'>
                <h1 className='sm:text-3xl text-[1.3rem] mb-2 font-semibold text-blue-700 pt-[1.2rem]'>Get A Free
                    <span className='sm:text-3xl text-[1.3rem] mb-2 font-extrabold text-[#00009c] font-fira '> CareerCounseling Session</span>
                </h1>
                <img src="	https://cdn-icons-gif.flaticon.com/8121/8121309.gif" alt="funny camera" className=' sm:w-[3.5rem] w-[2.5rem] h-[2.5rem] sm:h-[3.5rem] ' />

            </div>
            <div className='flex  justify-around items-center px-4 flex-wrap md:flex-nowrap pb-[1.5rem] mx-auto'>
                <motion.div 
                
        initial={{ opacity: 0.9 , scale: 1 , x:"-5%" }}
        whileInView={{ opacity: 1  , scale: 1 , x:0}}
        transition={{ duration: 0.4, ease: "easeOut" }}
                className='sm:w-[50%] '>
                    <h1 className='sm:text-2xl text-[1rem] font-bold text-blue-500 py-6 '>
                        <span>Confused about the best career-fit for you?</span>
                        <span className=' scale-y-105'>|</span>
                    </h1>
                    <p className="text-[0.8rem] sm:text-[14px] text-gray-800 pb-[3rem]">Too many choices can be daunting! Analyse your aptitude, capabilities, personality and interests with our scientific psychometric tool, and get advised on the best career options for you. It can also derive whether or not you are suitable for a particular career or role type.</p>
                    <a className="group inline-block relative" href="/counselingRegForm">
                        <span className="py-1 text-[16px] font-medium text-blue-500 flex justify-start items-center font-fira">Try our Free counseling session
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-blue-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></span></a>


                </motion.div>
                <motion.div 
                
                initial={{ opacity: 1 , scale: 0.9 , y:"5%" }}
                whileInView={{ opacity: 1  , scale: 1 , y:0}}
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className='sm:w-[450px] '>
                    <img src="https://admissionvidya.com/images/guidance.gif" alt="" className="w-full" />
                </motion.div>
            </div>
        </div>
    )
}

export default Counselling
