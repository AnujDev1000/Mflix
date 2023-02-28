import React from 'react'
import { FaVideo } from "react-icons/fa"

const VideoBox = ({videoKey}) => {

    return (
        <div className="video-box overflow-hidden my-2 position-relative rounded bg-prime-shade-1">
            <div className="position-absolute top-50 start-50 translate-middle">
                <FaVideo className="text-base2 fs-1" />
            </div>
            <div className="embed-responsive embed-responsive-16by9 position-relative">
                <iframe className="embed-responsive-item w-100 h-sm-200 rounded shadow-sm" src={"https://www.youtube-nocookie.com/embed/" + videoKey + "?rel=0" } ></iframe>
            </div>
        </div>
    )
}

export default VideoBox
