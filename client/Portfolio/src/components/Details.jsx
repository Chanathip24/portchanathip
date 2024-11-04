import React from 'react'
/* Icon */
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { motion } from 'framer-motion'
import { TbServer2 } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
const Details = () => {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1}} className='container mb-16 mx-auto grid  md:grid-cols-2'>
            <div className='flex flex-col p-4 md:p-0 gap-5'>
                <div className='flex gap-6 items-center'>
                    <h1 className='cursor-pointer hover:animate-ping flex items-center text-2xl bg-black text-white p-4 rounded-full hover:bg-white  hover:text-black transition'><HiOutlineComputerDesktop /></h1>
                    <div>
                        <p>Frontend Web Development</p>
                        <p className='text-gray-600'>Build responsive websites for all devices.</p>
                    </div>

                </div>
                <div className='flex gap-6 items-center'>
                    <h1 className='cursor-pointer hover:animate-ping hover:bg-white  hover:text-black transition flex items-center text-2xl bg-black text-white p-4 rounded-full'><TbServer2 /></h1>
                    <div>
                        <p>Backend Web Development</p>
                        <p className='text-gray-600'>Develop systems for data management and server handling.</p>
                    </div>

                </div>
                <div className='flex gap-6 items-center'>
                    <h1 className='cursor-pointer hover:animate-ping hover:bg-white  hover:text-black transition flex items-center text-2xl bg-black text-white p-4 rounded-full'><MdDeveloperMode /></h1>
                    <div>
                        <p>UI/UX Design</p>
                        <p className='text-gray-600'>Create user-friendly and engaging interfaces.</p>
                    </div>

                </div>

            </div>
            <div className='flex flex-col p-4 md:p-0 gap-5 justify-center'>
                <h5 className='text-lg'>Main Services</h5>
                <h1 className='text-4xl'>Web development</h1>
                <p className='text-gray-600'>I provide web development services, specializing in responsive frontend and backend solutions. I focus on creating user-friendly websites that perform well on all devices.</p>
            </div>
        </motion.section>
    )
}

export default Details