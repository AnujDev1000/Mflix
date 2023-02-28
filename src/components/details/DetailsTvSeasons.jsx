import React from 'react'
import { Link } from 'react-router-dom'
import DetailsHeading from './DetailsHeading'

const DetailsTvSeasons = ({seasons, id, type, name}) => {
    const tempSeasons = seasons && seasons.filter(season => season.name !== "Specials")


    return (
        <div className="details-tv-seasons">
            {tempSeasons && tempSeasons.length > 4 ? 
                <DetailsHeading heading={"Seasons"} type={ type + "/seasons" } id={id}  />
                :
                <span className="text-white">Seasons</span>
            }
            <div className="seasons row px-2">
                {tempSeasons.slice(0,4).map((season, i) => 
                    <div key={i} className="col-6 col-lg-3 px-1 my-1">
                        <Link to={"/tv/" + name + "/" + id +  "/season/" + season.season_number} className="text-decoration-none">
                            <div className="season-card bg-dark rounded border-4 border-start border-danger p-2 py-1">
                                <p className="text-base2 fs-small m-0 float-end pt-1">{season.air_date && season.air_date.split("-")[0]}</p>
                                <span className="text-white fs-small">Season {season.season_number}</span>
                                <p className="text-grey-shade fs-small m-0">EP {season.episode_count}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DetailsTvSeasons
