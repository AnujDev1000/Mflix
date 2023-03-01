import React, { useContext, useEffect, useState } from 'react'
import DetailsSimilar from '../components/details/DetailsSimilar'
import Loader from '../components/Loader'
import Playing from '../components/playing/Playing'
import { NavContext } from '../context/NavContext'
import getPlayingTv from '../hooks/getPlayingTv'
import getUpcomingTv from '../hooks/getUpcomingTv'

const TvPage = () => {
    const { setNav } = useContext(NavContext)
    const [playing, setPlaying] = useState([])
    const [upcoming, setUpcoming] = useState([])

    const fetchData = () => {
        const data = Promise.all([
            getPlayingTv(),
            getUpcomingTv()
        ])
        data.then(([res1, res2]) => {
            setPlaying(res1.data)
            setUpcoming(res2.data)
        })
        setNav("tv")
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(upcoming);

    return (
        <>
            {playing.results && playing.results.length ?
                <div className=" tv">
                    <Playing playing={playing.results.slice(0,10)} type={"tv"} />
                    <div className="Upcoming container my-2">
                        {upcoming.results && upcoming.results.length ?
                            <DetailsSimilar similar={upcoming.results.slice(0,20)} type={"tv"} category={"upcoming"} />
                            :null
                        }
                    </div>
                </div>
                :
                <div className="position-relative"><Loader />l</div>
            }
        </>
    )
}

export default TvPage
