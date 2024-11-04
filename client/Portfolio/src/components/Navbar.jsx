import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
//icon
import { TbMail } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const listyle = 'hover-underline-animation left'

    //navbar มือถือ
    const [isNav,setNav] = useState(false)
    const toggleNav = ()=>{
        setNav(!isNav)
    }
    return (

        <>
            {/* คอม */}
            <nav className=' bg-[#FAF9F6] hidden text-lg container mx-auto lg:flex justify-between py-6 sticky top-0'>
                <h1 className='flex gap-5 items-center'><TbMail className='text-xl flex items-center' /> chanathip24.work@gmail.com</h1>
                <ul className='flex justify-between w-[15%]'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'font-semibold' : undefined)}><li className='hover-underline-animation left mr-2'>Home</li></NavLink>

                    <NavLink to='/works' className={({ isActive }) => (isActive ? 'font-semibold' : undefined)}><li className={listyle}>Showcases</li></NavLink>
                </ul>
            </nav>

            {/* มือถือ */}
            <nav className='z-10 bg-[#FAF9F6] drop-shadow-md lg:hidden sticky top-0 py-5 px-4 flex items-center justify-between'>
                <NavLink to='/' ><h1 className='font-semibold text-2xl'>Chanathip</h1></NavLink>
                
                {isNav ? <RxCross1 onClick={toggleNav} className='text-2xl cursor-pointer'/> : <RxHamburgerMenu onClick={toggleNav} className='text-2xl cursor-pointer'/>}
                
            </nav>
            <nav className={`${isNav ? "opacity-100 max-h-52 translate-y-0" : "translate-y-5 max-h-0 opacity-0"} z-10 lg:hidden transition-all overflow-hidden bg-[#FAF9F6] flex flex-col text-lg justify-between sticky top-12 drop-shadow-md`}>
 
                <ul className='flex flex-col p-5 gap-5'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'font-semibold' : undefined)}><li className={'text-2xl hover-underline-animation left'}>Home</li></NavLink>

                    <NavLink to='/works' className={({ isActive }) => (isActive ? 'font-semibold' : undefined)}><li className={'text-2xl hover-underline-animation left'}>Showcases</li></NavLink>
                </ul>
                <h1 className='px-5 pb-5 flex gap-5 items-center'><TbMail className='text-xl flex items-center' /> chanathip24.work@gmail.com</h1>
            </nav>
        </>

    )
}

export default Navbar