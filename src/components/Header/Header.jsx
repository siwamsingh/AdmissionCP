import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

function Header() {

    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous  ){ setHidden(true);}
        else {setHidden(false);}
    })
    return (
        <motion.div
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}

            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: "easeInOut" }}

            className='flex fixed z-50 w-screen  bg-[#1560bd] h-24 shadow-xl justify-between  lg:justify-evenly sm:gap-4  items-center px-8 '>
            <div className="text-white class  font-bold text-2xl">
                LOGO
            </div>
            <div className='hidden lg:block'>
                <ul className='flex items-center gap-6'>
                    <li className='text-white text-[15px] font-semibold p-2  '>
                        <span>HOME</span>

                    </li>
                    <li className='text-white text-[15px] font-semibold p-2  '>
                        <span>COLLEGES</span>
                    </li>
                    <li className='text-white text-[15px] font-semibold p-2  flex gap-2'>
                        <span>COURSES</span>
                        <span className="inline-block h-6 w-6 hover:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-full w-6 text-white ">
                                <path fillRule="evenodd" d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z" clipRule="evenodd" />
                            </svg>
                        </span>

                    </li>
                    <li className='text-white flex text-[15px] font-semibold p-2 gap-2 '>
                        <span>STUDY ABROAD</span>
                        <span className="inline-block h-6 w-6 hover:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-full w-6 text-white ">
                                <path fillRule="evenodd" d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </li>
                    <li className='text-white flex text-[15px] font-semibold p-2 gap-2 '>
                        <span>NEWS</span>
                        <span className="inline-block h-6 w-6 hover:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-full w-6 text-white ">
                                <path fillRule="evenodd" d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </li>
                    <li className='text-white flex text-[15px] font-semibold p-2 gap-2 '>
                        <span>MORE</span>
                        <span className="inline-block h-6 w-6 hover:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-full w-6 text-white ">
                                <path fillRule="evenodd" d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
            <div className=' hidden lg:block'>
                <button className='bg-white text-[#1560bd] p-[0.6rem] font-semibold rounded-[8px] px-5 transition duration-300 ease-in-out hover:shadow-md'>
                    Get a Councelling Session
                </button>
            </div>
            <div className=' block lg:hidden'>
                <button className='w-6 h-8  flex flex-col justify-evenly'>
                    <div className='w-full h-[3px] bg-white rounded-xl'></div>
                    <div className='w-full h-[3px] bg-white rounded-xl'></div>
                    <div className='w-full h-[3px] bg-white rounded-xl'></div>
                </button>
            </div>
        </motion.div>
    )
}

export default Header
