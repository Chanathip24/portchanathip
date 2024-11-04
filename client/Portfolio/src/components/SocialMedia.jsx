import React, { useState } from 'react'

//icon
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
const SocialMedia = () => {

    //social toggle
    const [toggle, setToggle] = useState(false)

    const toggleSocial = () => {
        setToggle(!toggle)
    }

    return (
        <>
            {/* คอม */}
            <section className='fixed md:inline hidden right-12 top-[15%]'>
                <ul className='text-4xl flex flex-col gap-5'>
                    <a target='blank' href="https://github.com/Chanathip24"><li className=' p-3 transition-all border rounded-full hover:border hover:border-black cursor-pointer'><FaGithub /></li></a>
                    <a target='blank' href="https://www.facebook.com/jab.chowapong/"><li className=' p-3 transition-all border rounded-full hover:border hover:border-black cursor-pointer'><FaFacebook /></li></a>
                    <a target='blank' href="https://www.instagram.com/jabqq_/"><li className=' p-3 transition-all border rounded-full hover:border hover:border-black cursor-pointer'><FaInstagram /></li></a>

                </ul>
            </section>

            {/* มือถือ */}
            <section className='fixed md:hidden right-5 bottom-5'>
                <ul onClick={toggleSocial} className='text-2xl flex flex-col gap-5'>
                    <li className=' p-3 transition-all border animate-pulse rounded-full hover:border hover:border-black cursor-pointer'><AiOutlineGlobal /></li>
                </ul>
            </section>

            <section className={`${toggle ? "opacity-100 max-h-56" : "opacity-0 max-h-0"} transition-all ease-in-out overflow-hidden fixed  md:hidden right-5 bottom-24`}>
                <ul className='text-2xl flex flex-col gap-5'>
                    <a target='blank' href="https://github.com/Chanathip24"><li className=' p-3 transition-all border rounded-full hover:border hover:border-black cursor-pointer'><FaGithub /></li></a>
                    <a target='blank' href="https://www.facebook.com/jab.chowapong/"><li className=' p-3 transition-all border rounded-full hover:border hover:border-black cursor-pointer'><FaFacebook /></li></a>
                    <a target='blank' href="https://www.instagram.com/jabqq_/"><li className=' p-3 transition-all border rounded-full hover:border hover:border-black cursor-pointer'><FaInstagram /></li></a>

                </ul>
            </section>
        </>

    )
}

export default SocialMedia