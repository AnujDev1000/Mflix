import React, { Suspense } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"
const PosterImg = React.lazy(() => import('../imgComponents/PosterImg'));
import genres from "../../genres.json"
import Genres from '../Genres';
import StarRating from './StarRating';

const TvCard = ({show}) => {
    return (
        <div className="show-card h-100 bg-prime-shade-1 shadow-sm rounded cursor-pointer position-relative p-1 bg-hover-1">
            <div className="card-img overflow-hidden rounded min-height-300">
                <Suspense fallback={<span></span>}>
                    <PosterImg poster_path={show.poster_path} />
                </Suspense> 
            </div>
            <div className="show-content position-absolute w-100 h-100 top-0 start-0 p-1">
                <span className="heart position-absolute top-0 end-0 p-3 p-sm-3">
                    <div className="favorit-icon p-1 px-2 bg-white rounded-circle shadow-sm">
                        <FaRegHeart className="text-heart fs-6" />
                    </div>
                </span>
                <div className="show-content-data bg-prime-gradient-1 w-100 h-100 p-2 rounded d-flex flex-column justify-content-end">
                    <span className="show-name text-base1 fs-small fw-bold">{show.name}</span>
                    <span className="text-base2 fs-small">{show.first_air_date && show.first_air_date.split("-")[0]}</span>
                    <StarRating rating={show.vote_average} />
                    <Genres genresList={show.genre_ids} type={"tv"} />
                </div>
            </div>
        </div>
    )
}

export default TvCard
