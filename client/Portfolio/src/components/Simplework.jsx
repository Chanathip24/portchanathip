import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Simplework = ({data}) => {

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
        <motion.section variants={parentVarient} initial="hidden" whileInView="visible" className='p-3 md:p-0 container mx-auto mt-5 mb-16'>
            <motion.h5 variants={itemVarient} className='text-lg'>Portfolio</motion.h5>
            <motion.div variants={itemVarient} className='mt-5 flex flex-col md:flex-row gap-3 md:gap-0 justify-between md:items-center'>
                <h1 className='text-4xl md:w-1/3 xl:w-1/4'>Let's have a look at my portfolio</h1>
                <Link to='/works'><p className='underline'>See All</p></Link>
                
            </motion.div>
            {/* Work container section */}
            <div variants={parentVarient} initial="hidden" whileInView="visible" className='grid md:grid-cols-3 gap-10 mt-8 place-items-center'>
                {data && Array.isArray(data) ? data.map((item,key)=>{
                    return <motion.div variants={itemVarient}><Card item={item} key={key}/></motion.div>
                }) : undefined}
            </div>
        </motion.section>
    )
}

export default Simplework