import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getPersonDetails from '../../hooks/getPersonDetails'
import Loader from '../Loader'
import NoData from '../NoData'
import MovieList from './MovieList'
import TvList from './TvList'

const PersonCreditsList = ({type, department}) => {
    const { id } = useParams()
    const [personCredits, setPersonCredits] = useState([])
    department = department && department === "actor" ? "cast" : department
    const [page, setPage] = useState(15)

    useEffect(() => {
        setPersonCredits([])
        getPersonDetails(id, type)
        .then(res => {
            if(res.data){
                setPersonCredits(res.data)
            }
            else{
                setPersonCredits("No Data")
            }
        })
    }, [id])

    return (
        <>
            {personCredits && personCredits[`${type}`] ?
                <div className="person-credits-list container navbar-padding text-base2">
                    <div className="search-header">
                        {type == "tv_credits" ? 
                            <span className="text-base2 text-uppercase fs-small">Tv Shows</span>
                            :
                            <span className="text-base2 text-uppercase fs-small">Movies</span>
                        }
                        {personCredits.name && personCredits.name ? <h2 className="text-white mb-2 fw-bold">{personCredits.name}</h2> : null}
                    </div>
                    <hr className="bg-light m-0"/>
                    <div className="credits-list mt-4">
                        {type === "movie_credits" ? 
                            <>
                                {personCredits.movie_credits && personCredits.movie_credits[`${department}`].length ?
                                    <MovieList movies={personCredits.movie_credits[`${department}`].slice(0,page)} /> 
                                    : 
                                    <NoData />
                                }
                            </>
                            :
                            <>
                                {personCredits.tv_credits && personCredits.tv_credits[`${department}`].length ?
                                    <TvList tv={personCredits.tv_credits[`${department}`].slice(0,page)} /> 
                                    : 
                                    <NoData />
                                }
                            </>
                        }
                    </div>
                    <div className="d-flex justify-content-center w-100">
                        <button type="button" className="btn btn-sm btn-warning my-2" onClick={e => {setPage(page+9)}}>Load More</button>
                    </div>
                </div>
                :
                <div className="position-relative"><Loader /></div>
            }
        </>
    )
}

export default PersonCreditsList
