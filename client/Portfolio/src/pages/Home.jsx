import React,{useState,useEffect} from 'react'
import axios from 'axios'
//component
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Simplework from '../components/Simplework'
import Loading from './Loading'
import SocialMedia from '../components/SocialMedia'
const Home = () => {
    //github data
    const [data,setData ]= useState(null)

    //loading status
    const [loading,setLoading] = useState(true)
    //fetch
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const res = await axios.get("https://api.github.com/users/Chanathip24/repos")
                setData(res.data.slice(1,4))
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if(loading) return <Loading/>
    return (
        <>
            <Navbar />
            <main >
                <SocialMedia/>
                <Hero />
                <Details />
                <Simplework data={data}/>
            </main>

            <Footer />
        </>

    )
}

export default Home