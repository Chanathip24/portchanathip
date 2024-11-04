import React from 'react'
import {motion} from 'framer-motion'
//icon
import { RxDownload } from "react-icons/rx";

const Hero = () => {
    return (
        <motion.section initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className='container min-h-[65svh] md:min-h-[70svh] mx-auto flex justify-center gap-10 md:gap-14 items-center flex-col'>
            <h1 className='text-lg tracking-wider'>Hi! I'm Chanathip Chaowaphong ✌️</h1>
            <h2 className='font-semibold tracking-wider md:w-1/2 text-center text-3xl  md:text-5xl'>Full Stack Developer based in Thailand</h2>

            <p className='w-[90%] md:w-1/3 text-center tracking-wider text-gray-600'>I specialize in full-stack web development and Linux server deployment. Skilled in building scalable, responsive applications using modern JavaScript frameworks and libraries.</p>

            <div className='flex md:flex-row flex-col gap-5'>
                <button className='px-8 py-3 border border-black text-white bg-black rounded-3xl hover:bg-white hover:text-black transition'>Hire Me</button>
                <button className='px-10 py-3 border border-white rounded-3xl flex items-center gap-3 hover:border-black hover:text-white hover:bg-black transition'>Download CV <RxDownload className='text-xl' /></button>
            </div>


        </motion.section>
    )
}

export default Hero