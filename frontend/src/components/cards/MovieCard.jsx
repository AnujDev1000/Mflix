import React, { Suspense } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"
const PosterImg = React.lazy(() => import('../imgComponents/PosterImg'));
import Genres from '../Genres';
import StarRating from './StarRating';

const MovieCard = ({movie}) => {
    
    return (
        <div className="movie-card mh-150 h-100 bg-prime-shade-1 shadow-sm rounded cursor-pointer position-relative p-1 bg-hover-1">
            <div className="card-img overflow-hidden rounded min-height-300">
                <Suspense fallback={<span></span>}>
                    <PosterImg poster_path={movie.poster_path} />
                </Suspense> 
            </div>
            <div className="movie-content position-absolute w-100 h-100 top-0 start-0 p-1">
                <span className="favorite position-absolute top-0 end-0 p-2 p-sm-3">
                    <div className="favorit-icon p-1 px-2 bg-white rounded-circle shadow-sm">
                        <FaRegHeart className="text-heart fs-6" />
                    </div>
                </span>
                <div className="movie-content-data bg-prime-gradient-1 w-100 h-100 p-2 rounded d-flex flex-column justify-content-end">
                    <span className="movie-name text-base1 fs-small fw-bold">{movie.title}</span>
                    <span className="text-base2 fs-small">{movie.release_date && movie.release_date.split("-")[0]}</span>
                    <StarRating rating={movie.vote_average} />
                    <Genres genresList={movie.genre_ids} type={"movie"} />
                </div>
            </div>
        </div>
    )
}

export default MovieCard
