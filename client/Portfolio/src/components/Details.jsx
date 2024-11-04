import React from 'react'
/* Icon */
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { motion } from 'framer-motion'
import { TbServer2 } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
const Details = () => {
    const parentVarient = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const itemVarient = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <section  className='container mb-16 mx-auto grid  md:grid-cols-2'>
            <motion.div variants={parentVarient} initial="hidden" whileInView="visible" className='flex flex-col p-4 md:p-0 gap-5'>
                <motion.div variants={itemVarient} className='flex gap-6 items-center'>
                    <h1 className='cursor-pointer hover:animate-ping flex items-center text-2xl bg-black text-white p-4 rounded-full hover:bg-white  hover:text-black transition'><HiOutlineComputerDesktop /></h1>
                    <div>
                        <p>Frontend Web Development</p>
                        <p className='text-gray-600'>Build responsive websites for all devices.</p>
                    </div>

                </motion.div>
                <motion.div variants={itemVarient} className='flex gap-6 items-center'>
                    <h1 className='cursor-pointer hover:animate-ping hover:bg-white  hover:text-black transition flex items-center text-2xl bg-black text-white p-4 rounded-full'><TbServer2 /></h1>
                    <div>
                        <p>Backend Web Development</p>
                        <p className='text-gray-600'>Develop systems for data management and server handling.</p>
                    </div>

                </motion.div>
                <motion.div variants={itemVarient} className='flex gap-6 items-center'>
                    <h1 className='cursor-pointer hover:animate-ping hover:bg-white  hover:text-black transition flex items-center text-2xl bg-black text-white p-4 rounded-full'><MdDeveloperMode /></h1>
                    <div>
                        <p>UI/UX Design</p>
                        <p className='text-gray-600'>Create user-friendly and engaging interfaces.</p>
                    </div>

                </motion.div>

            </motion.div>
            <div className='flex flex-col p-4 md:p-0 gap-5 justify-center'>
                <h5 className='text-lg'>Feature Service</h5>
                <h1 className='text-4xl'>Web development</h1>
                <p className='text-gray-600'>I provide web development services, specializing in responsive frontend and backend solutions. I focus on creating user-friendly websites that perform well on all devices.</p>
            </div>
        </section>
    )
}

export default Details