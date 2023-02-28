import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getGenreMovies from '../../hooks/getGenreMovies'
import genres from "../../genres.json"
import MovieList from './MovieList'
import NoData from '../NoData'
import Loader from '../Loader'
import getGenreTv from '../../hooks/getGenreTv'
import TvList from './TvList'

const GenreList = ({type}) => {
    const { id } = useParams()
    const [genreData, setGenreData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        setGenreData([])
        const data = type == "movie" ? getGenreMovies(id, type, page) : getGenreTv(id, type, page)
        data.then(res => {
            if(res.data && res.data.results.length){
                setGenreData(res.data.results)
            }
            else{
                setGenreData("No Data")
            }
        })
    }, [page, id])


    return (
        <>
            {genreData.length ? 
                <div className=" text-base2 container navbar-padding">
                    <div className="search-header">
                        {type == "tv" ? 
                            <span className="text-base2 text-uppercase fs-small">Tv Shows</span>
                            :
                            <span className="text-base2 text-uppercase fs-small">Movies</span>
                        }
                        <h2 className="text-white mb-2 fw-bold">{genres[`${id}`]}</h2>
                    </div>
                    <hr className="bg-light m-0"/>
                    <div className="genre-list mt-4">
                    {type == "movie" ? 
                        <>
                            {genreData.length ? 
                                <MovieList movies={genreData.slice(0,15)} /> : 
                            <NoData />}
                        </> :
                        <>
                            {genreData.length ?    
                                <TvList tv={genreData.slice(0,15)} /> : 
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
                : <div className="position-relative "><Loader /></div>
            }
        </>
    )
}

export default GenreList
