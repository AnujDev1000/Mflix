import React from 'react'
import { image_url } from '../../env'

const LogoImg = ({logo_path}) => {
    return (
        <img src={image_url + "/original" + logo_path} alt="" className="img-responsive bg-main h-100"/>
    )
}

export default LogoImg
