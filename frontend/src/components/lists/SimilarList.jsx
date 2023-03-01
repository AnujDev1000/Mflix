import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getMovieDetails from '../../hooks/getMovieDetails'
import getTvDetails from '../../hooks/getTvDetails'
import Loader from '../Loader'
import MovieList from './MovieList'
import TvList from './TvList'

const SimilarList = ({type}) => {
    const { id } = useParams()
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        setSimilar([])
        const data = type == "movie" ? getMovieDetails(id, "recommendations") : getTvDetails(id, "recommendations")
        data.then(res => {
            if(res.data && res.data.recommendations.results.length){
                setSimilar(res.data)
            }
            else{
                setSimilar("No Data")
            }
        })
    }, [id])

    return (
        <>
            {similar.recommendations ? 
                <div className="container navbar-padding">
                    <div className="search-header">
                        {type == "tv" ? 
                            <span className="text-base2 text-uppercase fs-small">Similar Tv Shows</span>
                            :
                            <span className="text-base2 text-uppercase fs-small">Similar Movies</span>
                        }
                        {similar.title && similar.title ? <h2 className="text-white mb-2 fw-bold">{similar.title}</h2> : null}
                        {similar.name && similar.name ? <h2 className="text-white mb-2 fw-bold">{similar.name}</h2> : null}
                    </div>
                    <hr className="bg-light m-0"/>
                    <div className="similar-list mt-4">
                        {type == "movie" ? <>
                                {similar.recommendations.results && similar.recommendations.results.length ? 
                                    <MovieList movies={similar.recommendations.results} /> 
                                    : 
                                    <NoData />
                                }
                            </> :
                            <>
                                {similar.recommendations.results && similar.recommendations.results.length ?    
                                    <TvList tv={similar.recommendations.results} /> 
                                    : 
                                    <NoData />
                                }
                            </>
                        }
                    </div>
                </div>
                : <div className="position-relative "><Loader /></div>
            }  
        </>
    )
}

export default SimilarList
