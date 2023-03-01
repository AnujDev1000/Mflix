import React from 'react'
import { image_url } from '../../env'

const PosterImg = ({poster_path}) => {
    return (
        <img src={image_url + "/original" + poster_path} alt="" className="img-responsive bg-main h-100"/>
    )
}

export default PosterImg
