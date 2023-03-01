import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getMovieDetails from '../../hooks/getMovieDetails'
import getTvDetails from '../../hooks/getTvDetails'
import Loader from '../Loader'
import NoData from '../NoData'
import PersonList from './PersonList'

const CastList = ({type}) => {
    const { id } = useParams()
    const [castList, setCastList] = useState([])

    useEffect(() => {
        setCastList([])
        const data = type == "movie" ? getMovieDetails(id, "credits") : getTvDetails(id, "credits")
        data.then(res => {
            if(res.data && res.data.credits.cast.length){
                setCastList(res.data)
            }
            else{
                setCastList("No Data")
            }
        })
    }, [id])

    return (
        <>
            {castList.credits ? 
                <div className="container navbar-padding">
                    <div className="search-header">
                        <span className="text-base2 text-uppercase fs-small">Cast</span>
                        {castList.title && castList.title ? <h2 className="text-white mb-2 fw-bold">{castList.title}</h2> : null}
                        {castList.name && castList.name ? <h2 className="text-white mb-2 fw-bold">{castList.name}</h2> : null}
                    </div>
                    <hr className="bg-light m-0"/>
                    <div className="cast-list mt-4">
                        {castList.credits.cast && castList.credits.cast.length ? <PersonList person={castList.credits.cast} /> : 
                            <NoData />}
                    </div>
                </div>
                :  <div className="position-relative "><Loader /></div>
            }  
        </>
    )
}

export default CastList
