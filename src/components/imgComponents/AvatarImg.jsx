import React from 'react'
import { image_url } from '../../env'

const AvatarImg = ({avatar_path}) => {
    const url = avatar_path && avatar_path[6] === ":" ? avatar_path.substring(1,avatar_path.length) : image_url + "/original" + avatar_path
    
    return (
        <img src={url} alt="" className="h-100 max-height-40"/>
    )
}

export default AvatarImg
