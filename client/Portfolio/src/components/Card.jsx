import React from 'react'

const Card = ({ item }) => {
    return (
        <a className='w-[70%]' target='blank' href={`https://${item.git_url.slice(6)}`}>
            <article >
                <img src="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg" className='rounded-2xl' alt="" width={300} />
                <h1 className='mt-5 text-xl'>{item?.name}</h1>
                <p className='mt-2 text-gray-600'>{item.description ? item.description : "No description for this projects"}</p>
            </article>
        </a>

    )
}

export default Card