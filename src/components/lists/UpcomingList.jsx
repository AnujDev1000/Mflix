import React, { useEffect, useState } from 'react'
import getUpcomimgMovies from '../../hooks/getUpcomimgMovies'
import getUpcomingTv from '../../hooks/getUpcomingTv'
import Loader from '../Loader'
import NoData from '../NoData'
import MovieList from './MovieList'
import TvList from './TvList'

const UpcomingList = ({type}) => {
    const [upcoming, setUpcoming] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        setUpcoming([])
        const data = type == "movie" ? getUpcomimgMovies(page) : getUpcomingTv(page+1)
        data.then(res => {
            if(res.data && res.data.results.length){
                setUpcoming(res.data.results)
            }
            else{
                setUpcoming("No Data")
            }
        })
    }, [page])

    return (
        <>
            {upcoming.length ? 
                <div className=" text-base2 container navbar-padding">
                    <div className="search-header">
                        {type == "tv" ? 
                            <span className="text-base2 text-uppercase fs-small">Tv Shows</span>
                            :
                            <span className="text-base2 text-uppercase fs-small">Movies</span>
                        }
                        <h2 className="text-white mb-2 fw-bold">Upcoming</h2>
                    </div>
                    <hr className="bg-light m-0"/>
                    <div className="genre-list mt-4">
                    {type == "movie" ? 
                        <>
                            {upcoming.length ? 
                                <MovieList movies={upcoming.slice(0,15)} /> : 
                            <NoData />}
                        </> :
                        <>
                            {upcoming.length ?    
                                <TvList tv={upcoming.slice(0,15)} /> : 
                            <NoData />}
                        </>
                    }
                    </div>
                    <div className="d-flex justify-content-center w-100">
                        {page > 1 ? 
                            <button type="button" className="btn btn-sm btn-dark my-2 me-2" onClick={e => {setPage(page-1)}}>Prev</button>
                            : null
                        }
                        <button type="button" className="btn btn-sm btn-warning my-2" onClick={e => {setPage(page+1)}}>Next</button>
                    </div>
                </div>
                : <div className="position-relative"><Loader /></div>
            }
        </>
    )
}

export default UpcomingList
