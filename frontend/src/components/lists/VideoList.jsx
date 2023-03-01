import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getMovieDetails from '../../hooks/getMovieDetails'
import getTvDetails from '../../hooks/getTvDetails'
import Loader from '../Loader'
import VideoBox from '../VideoBox'

const VideoList = ({type}) => {
    const { id } = useParams()
    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        setVideoList([])
        const data = type == "movie" ? getMovieDetails(id, "videos") : getTvDetails(id, "videos")
        data.then(res => {
            if(res.data && res.data.videos.results.length){
                setVideoList(res.data)
            }
            else{
                setVideoList("No Data")
            }
        })
    }, [id])


    return (
        <>
            {videoList.videos ? 
                <div className="container navbar-padding">
                    <div className="search-header">
                        <span className="text-base2 text-uppercase fs-small">Videos</span>
                        {videoList.title && videoList.title ? <h2 className="text-white mb-2 fw-bold">{videoList.title}</h2> : null}
                        {videoList.name && videoList.name ? <h2 className="text-white mb-2 fw-bold">{videoList.name}</h2> : null}
                    </div>
                    <hr className="bg-light m-0"/>
                    <div className="cast-list mt-4 row p-2">
                        {videoList.videos.results && videoList.videos.results.length ? 
                            <>
                                {videoList.videos.results.slice(0,12).map(video => 
                                    <div className="col-lg-6 px-1">
                                        <VideoBox videoKey={video.key} />
                                    </div>
                                )}
                            </> : 
                            <NoData />
                        }
                    </div>
                </div>
                :  <div className="position-relative"><Loader /></div>
            }  
        </>
    )
}

export default VideoList
