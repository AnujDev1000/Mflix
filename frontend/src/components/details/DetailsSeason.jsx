import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getSeasonDetails from '../../hooks/getSeasonDetails'
import Loader from '../Loader'
import DetailSeasonContent from './DetailSeasonContent'
import DetailsEpisodes from './DetailsEpisodes'
import DetailsPoster from './DetailsPoster'

const DetailsSeason = () => {
    const { id, name, tvId } = useParams()
    const [season, setSeason] = useState([])

    useEffect(() => {
        setSeason([])
        getSeasonDetails(id, tvId)
            .then(res => {
                if(res.data){
                    setSeason(res.data)
                }
                else{
                    setSeason("No Data")
                }
            })
    }, [id])
    console.log(season);

    return (
        <>
            {season.episodes && season.episodes ?
                <div className="season-details container navbar-padding">
            <div className="search-header">
                <span className="text-base2 text-uppercase fs-small">Season {id}</span>
                <h2 className="text-white mb-2 fw-bold">{name}</h2>
            </div>
            <hr className="bg-light m-0"/>

            <div className="row justify-content-center mt-2">
                <div className="col-6 col-sm-6 col-md-3 mb-2">
                    <div className="movie-details-main">
                        <DetailsPoster poster_path={season.poster_path} />
                    </div>
                </div>

                <div className="col-* col-md-9">
                    <DetailSeasonContent season={season} />
                    <hr className="bg-light m-0"/>
                    <DetailsEpisodes episodes={season.episodes} />
                </div>

            </div>
        </div>
                :
                <div className="position-relative"><Loader /></div>
            }
        </>
    )
}

export default DetailsSeason
