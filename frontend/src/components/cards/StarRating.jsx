import React from 'react'
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"

const StarRating = ({rating}) => {

    return(
        <>
        {(rating >= 0 && rating <= 2 ) ? 
            <div className="stars d-flex flex-row mb-1">
                <TiStarHalfOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
            </div> : null }
        {(rating > 2 && rating <= 4 ) ? 
            <div className="stars d-flex flex-row mb-1">
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarHalfOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
            </div> : null }
        {(rating > 4 && rating <= 6 ) ? 
            <div className="stars d-flex flex-row mb-1">
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
            </div> : null }
        {(rating > 6 && rating <= 8 ) ? 
            <div className="stars d-flex flex-row mb-1">
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarOutline className="text-warning fs-small" />
            </div> : null }
        {(rating > 8 && rating <= 10 ) ? 
            <div className="stars d-flex flex-row mb-1">
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
                <TiStarFullOutline className="text-warning fs-small" />
            </div> : null }
        </>
    )
}

export default StarRating
