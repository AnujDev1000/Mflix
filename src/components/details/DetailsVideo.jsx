import React from 'react'
import VideoBox from '../VideoBox'
import DetailsHeading from './DetailsHeading'

const DetailsVideo = ({videos, id, type}) => {
    let tempVideos = videos && videos.filter(video => video.type == "Trailer" && video.official == true )
    tempVideos = tempVideos[tempVideos.length-1]

    const videoKey = tempVideos && tempVideos ? tempVideos.key : videos[videos.length-1].key
    
    return (
        <div className="movie-details-video">
            <DetailsHeading heading={"Trailers & Extras"} type={type + "/video"} id={id}  />
            <VideoBox videoKey={videoKey} />
        </div>
    )
}

export default DetailsVideo
