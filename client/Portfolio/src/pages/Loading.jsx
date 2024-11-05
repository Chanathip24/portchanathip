import React from 'react'
import { SyncLoader } from 'react-spinners'
const Loading = () => {
    return (
        <main className='w-[100%] min-h-[100svh] flex justify-center items-center'>
            <SyncLoader size={30}/>
        </main>
    )
}

export default Loading