import React from 'react'
import { image_url } from '../../env'

const ProfileImg = ({profile_path}) => {
    return (
        <img src={image_url + "/original" + profile_path} alt="" className="img-responsive bg-main h-100 rounded"/>
    )
}

export default ProfileImg
