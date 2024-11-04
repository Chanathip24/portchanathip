import React from 'react'
//icon
import { TiHeartOutline } from "react-icons/ti";
const Footer = () => {
    return (
        <footer className='mt-5 bg-black  text-white flex justify-between py-5 '>

            <p className='container md:mx-auto mx-2 flex items-center gap-2'>Made with <TiHeartOutline className='text-red-600 text-2xl' />by Chanathip Chaowaphong</p>
        </footer>
    )
}

export default Footer