import React from 'react'
import { motion } from 'framer-motion'

function AboutUs() {
    return (
        <div>
            <div>
                <h2 className='text-blue-700 text-2xl pb-[1rem] sm:text-3xl pt-[6rem] font-bold text-center'>
                    About US
                </h2>
            </div>
            <div className='flex  justify-start  items-center px-2 sm:px-4 flex-wrap md:flex-nowrap pb-[1.5rem] '>
                <motion.div

                    initial={{ opacity: 1, scale: 1, x: "-5%" }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className='sm:w-[50%] px-16'>
                    <h1 className='sm:text-2xl text-[1rem] font-bold text-blue-500 py-6 '>
                        <span>WHO ARE WE </span>
                    </h1>
                    <h1 class="text-[1rem] text-gray-900 sm:text-xl font-semibold pt-2 pb-1 font-fira">Knowledge will bring you the opportunity to make a difference.</h1>
                    <p className="text-[0.8rem] sm:text-[14px] text-gray-800 pb-[3rem] leading-7">"At "
                        <b class="text-[#00009c]">Admissionvidhiya</b> " our mission is rooted in the firm belief that every student is entitled to a premier education and the opportunity to pursue their aspirations. We are dedicated to providing comprehensive support, guiding students through every step of their educational journey. From personalized admission counseling to aiding in college selections, offering assistance with educational loans, and providing valuable career counseling, we are committed to empowering students in making informed decisions and realizing their professional dreams."</p>

                    <button class="bg-blue-600 text-[0.8rem] text-white rounded-lg font-semibold px-4 cursor-pointer p-2 hover:bg-[#00009c] duration-200">DISCOVER MORE</button>


                </motion.div>
                <motion.div

                    initial={{ opacity: 0, scale: 0.7, y: "5%" }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }} className="w-full sm:w-[35rem] h-auto ">
                    <img src="	https://admissionvidya.com/images/aboutus.gif" alt="" className="w-full" />
                </motion.div>
            </div>
        </div >
    )
}

export default AboutUs
