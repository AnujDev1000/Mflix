import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../cards/StarRating'
import PlayingBg from './PlayingBg'
import youtube_logo from "../../assets/youtube_logo.png"

const PlayingCard = ({playing, type}) => {

    return (
        <div className="playing-movie-card position-relative vh-100">
            <div className="position-absolute w-100 h-100">
                <PlayingBg backdrop_path={playing.backdrop_path} />
            </div>
            <div className="container position-relative navbar-padding d-flex flex-column justify-content-end h-100 ">
                <Link to={"/" + type + "/" + playing.id} className="text-decoration-none m-auto" >
                    <img src={youtube_logo} className="m-auto w-80" alt=""/>
                </Link>
                <div className="content glass p-2 rounded mb-5 w-sm-75 border-4 border-start border-end border-danger">
                    <h5 className="text-base1 fw-bold">
                        {playing.title && playing.title}
                        {playing.name && playing.name}
                        <span className="text-info fs-small"> {playing.original_language}</span>
                    </h5>
                    <p className="text-base1 m-0">{playing.release_date && playing.release_date.split("-")[0]}</p>
                    <p className="text-base1 m-0">{playing.first_air_date && playing.first_air_date.split("-")[0]}</p>
                    <StarRating rating={playing.vote_average} />
                    <p className="text-base1 m-0">{playing.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayingCard