import React from 'react'
import getTimeUtil from '../../utils/getTimeUtil'
import StarRating from '../cards/StarRating'
import Genres from '../Genres'
import DetailsBtns from './DetailsBtns'
import DetailsMoney from './DetailsMoney'

const MovieDetailsContent = ({movie, type}) => {
    const genres = movie.genres && movie.genres.map(genre => {return genre.id})

    return (
        <div className="movie-details-content w-100">
            <span className="badge badge-sm bg-info float-end mt-2">
                {movie.status !== "Released" ? "Upcoming" : null}
            </span>
            <h1 className="fw-bold text-white">{movie.title}</h1>
            <span className="text-grey-shade">
                {movie.release_date && movie.release_date.split("-")[0]}
                <span className="pb-2"> - </span>
                {movie.runtime ? getTimeUtil(movie.runtime) : null}
            </span>
            <StarRating rating={movie.vote_average} />
            <div className="genres mb-2">
                <Genres genresList={genres} type={type} />
            </div>
            <div className="d-md-none mb-2">
                <DetailsBtns />
            </div>
            <p className="discription text-white ">{movie.overview}</p>
            <div className="money d-flex flex-row">
                {movie.budget ? 
                    <DetailsMoney money={movie.budget} name={"budget"} />
                    : null
                }
                {movie.revenue ? 
                    <DetailsMoney money={movie.revenue} name={"revenue"} />
                    : null
                }
            </div>
            <hr className="bg-white" />
        </div>
    )
}

export default MovieDetailsContent
