import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import DetailsSimilar from '../components/details/DetailsSimilar'
import Loader from '../components/Loader'
import Playing from '../components/playing/Playing'
import { NavContext } from '../context/NavContext'
import getPlayingMovies from '../hooks/getPlayingMovies'
import getUpcomimgMovies from '../hooks/getUpcomimgMovies'

const MoviePage = () => {
    const { setNav } = useContext(NavContext)
    const [playing, setPlaying] = useState([])
    const [upcoming, setUpcoming] = useState([])

    const fetchData = () => {
        const data = Promise.all([
            getPlayingMovies(),
            getUpcomimgMovies()
        ])
        data.then(([res1, res2]) => {
            setPlaying(res1.data)
            setUpcoming(res2.data)
        })
        setNav("movie")
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {playing.results && playing.results.length ?
                <div className=" movie">
                    <Playing playing={playing.results.slice(0,10)} type={"movie"} />
                    <div className="Upcoming container my-2">
                        {upcoming.results && upcoming.results.length ?
                            <DetailsSimilar similar={upcoming.results.slice(0,10)} type={"movie"} category={"upcoming"} />
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

export default MoviePage
