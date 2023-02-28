import React from 'react'
import { image_url } from '../../env'

const BackdropImg = ({backdrop_path}) => {
    return (
        <img src={image_url + "/original" + backdrop_path} alt="" className="img-responsive"/>
    )
}

export default BackdropImg
