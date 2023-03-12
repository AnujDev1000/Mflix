import React, { useEffect, useState } from 'react'
import HomeMain from '../components/home/HomeMain'
import Loader from '../components/Loader'
import getProviders from '../hooks/getProviders'
import sortUtil from '../utils/sortUtil'
import HomeProviders from './HomeProviders'


const Home = () => {
    const [providers, setProviders] = useState([])

    useEffect(() => {
        setProviders([])
        getProviders()
            .then(res => {
                if(res.data && res.data.results.length){
                    const data = [...new Map(res.data.results.slice(0,199).sort(sortUtil("display_priority")).map(i => [i["display_priority"], i])).values()]
                    setProviders(data)
                }
                else{
                    setProviders("No Data")
                }
            })
    }, [])

    return (
        <>
            {providers.length ? 
                <div className="Home position-relative">
                    <HomeMain />
                    {/* <HomeProviders providers={providers.slice(0,48)} /> */}
                </div>
                : <div className="position-relative "><Loader /></div>
            }
        </>
    )
}

export default Home








