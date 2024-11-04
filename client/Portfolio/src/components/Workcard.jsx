import React from 'react'
//icon
import { FaRegStar } from "react-icons/fa";


const Workcard = ({ item }) => {
    return (
        <a className='' target='blank' href={`https://${item.git_url.slice(6)}`}>
            <article className='md:w-[340px] xl:w-[420px] drop-shadow-xl h-[180px] border border-gray-600 hover:bg-gray-800 transition cursor-pointer hover:text-white rounded-lg px-8 py-5 flex flex-col gap-1 justify-center'>
                <h1 className='text-lg font-semibold'>{item.full_name}</h1>
                <p className='text-gray-500'>{item.description ? item.description : "No description for this project."}</p>
                <h1 className='flex gap-5 items-center'><FaRegStar className='text-yellow-300 text-2xl' /> {item.stargazers_count}</h1>
            </article>
        </a>





    )
}

export default Workcard