import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import getTvDetails from '../../hooks/getTvDetails'
import Loader from '../Loader'

const SeasonList = () => {
    const { id } = useParams()
    const [seasonsList, setSeasonsList] = useState([])

    useEffect(() => {
        setSeasonsList([])
        getTvDetails(id, "seasons")
            .then(res => {
                if(res.data && res.data.seasons.length){
                    setSeasonsList(res.data)
                }
                else{
                    setSeasonsList("No Data")
                }
            })
    }, [id])

    const tempSeasons = seasonsList.seasons && seasonsList.seasons.filter(season => season.name !== "Specials")

    return (
        <>
            {seasonsList.seasons ? 
                <div className="container navbar-padding">
                    <div className="search-header">
                        <span className="text-base2 text-uppercase fs-small">Seasons</span>
                        <h2 className="text-white mb-2 fw-bold">{seasonsList.name}</h2>
                    </div>
                    <hr className="bg-light m-0"/>
                    <div className="season-list mt-4 row px-2">
                        {tempSeasons && tempSeasons.map((season, i) => 
                            <div key={i} className="col-6 col-sm-3 px-1 my-1">
                                <Link to={"/tv/" + seasonsList.name + "/" + id +  "/season/" + season.season_number} className="text-decoration-none">
                                    <div className="season-card bg-dark rounded border-4 border-start border-danger p-2 py-1">
                                        <p className="text-base2 fs-small m-0 float-end pt-1">{season.air_date.split("-")[0]}</p>
                                        <span className="text-white fs-small">Season {season.season_number}</span>
                                        <p className="text-grey-shade fs-small m-0">EP {season.episode_count}</p>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                :
                <div className="position-relative"><Loader /></div>
            }
        </>
    )
}

export default SeasonList
