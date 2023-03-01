import React from 'react'
import StarRating from '../cards/StarRating'
import Genres from '../Genres'
import DetailsBtns from './DetailsBtns'

const TvDetailsContent = ({tv, type}) => {
    const genres = tv.genres && tv.genres.map(genre => {return genre.id})

    return (
        <div className="tv-details-content w-100">
            <span className="badge badge-sm bg-info float-end mt-2">
                {tv.status == "planned" || tv.status == "In Production" ? "Upcoming" : null}
                {tv.status == "Returning Series" || tv.status == "Pilot" ? "Running" : null}
            </span>
            <h1 className="fw-bold text-white">{tv.name}</h1>
            <span className="text-grey-shade">
                {tv.first_air_date && tv.first_air_date.split("-")[0]}
                <span className="pb-2"> - </span>
                <span>SE </span>
                {tv.number_of_seasons}
                <span> EP </span>
                {tv.number_of_episodes}
            </span>
            <StarRating rating={tv.vote_average} />
            <div className="genres mb-2">
                <Genres genresList={genres} type={type} />
            </div>
            <div className="d-md-none mb-2">
                <DetailsBtns />
            </div>
            <p className="discription text-white ">{tv.overview}</p>
        </div>
    )
}

export default TvDetailsContent
