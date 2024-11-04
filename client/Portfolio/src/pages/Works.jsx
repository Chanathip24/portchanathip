import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import axios from 'axios'


import Workcard from '../components/Workcard';
import Loading from './Loading';
const Works = () => {
    //data
    const [data, setData] = useState(null)
    //loading
    const [loading, setLoading] = useState(true)

    const staggerParentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // delay between each child animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://api.github.com/users/Chanathip24/repos")
                setData(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return <Loading />
    return (
        <>
            <Navbar />
            <main className='container min-h-[85svh] mx-auto'>
                <h1  className='text-3xl mt-5 text-center md:text-start'>My works</h1>
                <p className='text-gray-500 text-center md:text-start'>My github repository works.</p>
                {/* All of my works */}
                <motion.section variants={staggerParentVariants} initial="hidden" animate="visible" className='grid  md:place-items-start md:grid-cols-2 lg:grid-cols-3 p-3 md:p-0 gap-3 md:gap-x-5 md:gap-y-10 mt-5'>

                    {/* Card */}
                    {data.map((item, key) => {
                        return <motion.div key={key} variants={itemVariants}> {/* Attach item variants */}
                            <Workcard item={item} />
                        </motion.div>
                    })}

                </motion.section>
            </main>
            <Footer />
        </>
    )
}

export default Works