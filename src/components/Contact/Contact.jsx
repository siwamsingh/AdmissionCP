import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
    return (
        <div >
            <div>
                <h2 className='text-blue-700 text-2xl pb-[1rem] sm:text-3xl pt-[6rem] font-bold text-center'>
                    Get In Touch with Our Counseler
                </h2>
            </div>
            <motion.div

initial={{ opacity: 0, scale: 0.7, y: "5%" }}
whileInView={{ opacity: 1, scale: 1, y: 0 }}
transition={{ duration: 0.4, ease: "easeOut" }} className='flex  justify-center  items-center  sm:px-20 flex-wrap md:flex-nowrap pb-[1.5rem] px-10'>
                <div className='flex justify-center items-center sm:w-[50%] sm:pl-16'>
                    <div className='sm:px-4 w-[90%]'>
                        <div className=' sm:pl-10'>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-black py-4 ">Stay Connected with Us.
                                </h2>
                                <p className="text-[0.8rem] sm:text-[14px] text-gray-800 pb-[3rem] leading-6">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus necessitatibus consequatur facere distinctio quis natus maiores minima id alias.</p>
                                    </div>
                        </div>
                        <div className='flex justify-center'>
                            <img className="sm:w-[25rem]" src="https://admissionvidya.com/images/contact.gif" alt="contact" />

                        </div>
                    </div></div>
                <div
                 className=" h-auto w-full sm:w-1/2 bg-white p-5 rounded-lg mt-6 sm:mt-0">
                    <div className=" h-auto w-full sm:w-[80%] bg-white p-5 rounded-lg mt-6 sm:mt-0">
                        <h3 className="pt-4 text-[0.9rem] sm:text-xl font-bold text-center text-black font-fira">Contact With Us</h3>
                        <form action="" className='pt-6 pb-8 mb-4 sm:w-[90%] sm:mx-auto bg-white rounded'>
                            <div className="mb-2 ">
                                <label for="email" className="block mb-1 text-sm font-bold text-gray-700 text-center">Full Name</label>
                                <input className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none " id="email" type="email" placeholder="Email" value="" />
                                <p className="text-red-500"></p>
                            </div>

                            <div className="mb-2">
                                <label for="email" className="block mb-1 text-sm font-bold text-gray-700 text-center">Email</label>
                                <input className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none " id="email" type="email" placeholder="Email" value="" />
                                <p className="text-red-500"></p>
                            </div>

                            <div className="mb-2">
                                <label for="subject" className="block mb-1 text-sm font-bold text-gray-700 text-center">Subject</label>
                                <input className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none " id="subject" type="text" placeholder="Subject" value="" />
                                <p className="text-red-500"></p>
                            </div>

                            <div className="mb-2">
                                <label for="contactNumber" className="block mb-1 text-sm font-bold text-gray-700 text-center">Contact No</label>
                                <input className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none " id="contactNumber" type="tel" placeholder="Contact No" value="" />
                                <p className="text-red-500"></p>
                            </div>
                            <div className="mb-2">
                                <label for="message" className="block mb-1 text-sm font-bold text-gray-700 text-center">Your Message</label>
                                <textarea className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none " id="message" placeholder="Write your message"></textarea>
                                <p className="text-red-500"></p>
                            </div>
                            <div class="mb-6 py-2 text-center"><div><button class="w-full md:w-[120px] px-4 py-2 font-bold text-white bg-blue-800 rounded-lg hover:bg-[#00009c] focus:outline-none focus:shadow-outline duration-300">Submit</button></div></div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact
