import React from 'react'
import Card from './Card'

import { Link } from 'react-router-dom'
const Simplework = ({data}) => {
    
    return (
        <section className='p-3 md:p-0 container mx-auto mt-5 mb-16'>
            <h5 className='text-lg'>Portfolio</h5>
            <div className='mt-5 flex flex-col md:flex-row gap-3 md:gap-0 justify-between md:items-center'>
                <h1 className='text-4xl md:w-1/3 xl:w-1/4'>Let's have a look at my portfolio</h1>
                <Link to='/works'><p className='underline'>See All</p></Link>
                
            </div>
            {/* Work container section */}
            <div className='grid md:grid-cols-3 gap-10 mt-8 place-items-center'>
                {data && Array.isArray(data) ? data.map((item,key)=>{
                    return <Card item={item} key={key}/>
                }) : undefined}
            </div>
        </section>
    )
}

export default Simplework