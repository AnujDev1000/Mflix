import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getMovieDetails from '../../hooks/getMovieDetails'
import getTvDetails from '../../hooks/getTvDetails'
import DetailsImageCard from '../details/DetailsImageCard'
import Loader from '../Loader'

const ImageList = ({type}) => {
    const { id } = useParams()
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        setImageList([])
        const data = type == "movie" ? getMovieDetails(id, "images") : getTvDetails(id, "images")
        data.then(res => {
            if(res.data && res.data.images.backdrops.length){
                setImageList(res.data)
            }
            else{
                setImageList("No Data")
            }
        })
    }, [id])

    return (
        <>
            {imageList.images ? 
                <div className="container navbar-padding">
                    <div className="search-header">
                        <span className="text-base2 text-uppercase fs-small">Images</span>
                        {imageList.title && imageList.title ? <h2 className="text-white mb-2 fw-bold">{imageList.title}</h2> : null}
                        {imageList.name && imageList.name ? <h2 className="text-white mb-2 fw-bold">{imageList.name}</h2> : null}
                    </div>
                    <hr className="bg-light m-0"/>
                    <div className="img-list mt-4 row p-2">
                        <span className="text-base2">Backgrounds</span>
                        {imageList.images.backdrops && imageList.images.backdrops.length ? 
                            <>
                                {imageList.images.backdrops.slice(0,12).map((img, i) => 
                                    <div key={i} className="col-6 col-sm-4 p-1 bg-prime text-primary">
                                        <DetailsImageCard backdrop_path={img.file_path} />
                                    </div>
                                )}
                            </> : 
                            <NoData />
                        }
                        
                        <span className="text-base2 mt-4">Posters</span>
                        {imageList.images.posters && imageList.images.posters.length ? 
                            <>
                                {imageList.images.posters.slice(0,8).map((img, i) => 
                                    <div key={i} className="col-4 col-sm-3 p-1 bg-prime text-primary">
                                        <DetailsImageCard poster_path={img.file_path} />
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

export default ImageList
