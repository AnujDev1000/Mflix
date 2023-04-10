import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import getTvDetails from '../../hooks/getTvDetails'
import Loader from '../Loader'
import DetailsBg from './DetailsBg'
import DetailsBtns from './DetailsBtns'
import DetailsCast from './DetailsCast'
import DetailsImage from './DetailsImage'
import DetailsPoster from './DetailsPoster'
import DetailsVideo from './DetailsVideo'
import TvDetailsContent from './TvDetailsContent'
import DetailsSimilar from './DetailsSimilar'
import DetailsTvSeasons from './DetailsTvSeasons'
import { FavoriteContext } from '../../context/FavoriteContext'
import { UserContext } from '../../context/userContext'
import { toast } from 'react-toastify'
import addFavoriteTv from '../../hooks/addFavoriteTv'
import removeFavoriteTv from '../../hooks/removeFavoriteTv'

const TvDetails = () => {
    const navigate = useNavigate()
    const { favorites, dispatchFavorites } = useContext(FavoriteContext)
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [tv, setTv] = useState([])
    const [loading, setLoading] = useState(false)
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        setLoading(true)
        setFavorite(false)
        getTvDetails(id, "all")
                .then(res => {
                    setLoading(false)
                    setTv(res.data)
                    if(favorites.shows.findIndex(s => s.id == res.data.id) != -1){
                        setFavorite(true)
                    }
                })
        
        if(!user){
            setFavorite(false)
        }

    }, [id])


    const addToFavorite = (e) => {
        e.preventDefault()
        setLoading(true)
        if(user && user.token){
            const body = {
                genres: tv.genres,
                id: tv.id, 
                original_name: tv.original_name,
                poster_path: tv.poster_path,
                first_air_date: tv.first_air_date,
                name: tv.name,
                vote_average: tv.vote_average
            }
            addFavoriteTv(favorites._id, user.token, body)
            .then(res => {
                setLoading(false)
                toast.success("Added to Favorites")
                dispatchFavorites("ADD_SHOW", body)
                setFavorite(true)
            })
        }
        else{
            setLoading(false)
            navigate("/login")
        }
    }
    
    const removeFromFavorite = (e) => {
        e.preventDefault()
        setLoading(true)
        const body = {
            id: tv.id
        }
        removeFavoriteTv(favorites._id, user.token, body)
        .then(res => {
            setLoading(false)
            toast.success("Removed from Favorites")
            dispatchFavorites("REMOVE_SHOW", body)
            setFavorite(false)
        })
    }


    return (
        <>
            {!loading && tv.credits ? 
                <div className="tv-details container navbar-padding">
                    <DetailsBg backdrop_path={tv.backdrop_path} />
                    <div className="row justify-content-center mt-sm-5">

                        <div className="col-6 col-sm-6 col-md-3 mb-2">
                            <div className="movie-details-main">
                                <DetailsPoster poster_path={tv.poster_path} />
                                <div className="d-none d-md-block">
                                    <DetailsBtns favorite={favorite} type={"tv"} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} />
                                </div>
                            </div>
                            <hr className="bg-white d-md-none" />
                        </div>

                        <div className="col-* col-md-9 mb-2">
                            <TvDetailsContent tv={tv} type={"tv"} favorite={favorite} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} />
                            {tv.seasons && tv.seasons.length ? 
                                <DetailsTvSeasons seasons={tv.seasons} id={tv.id} type={"tv"} name={tv.name} /> 
                                : null
                            }
                            <hr className="bg-white" />
                            {tv.credits.cast && tv.credits.cast.length ? 
                                <DetailsCast cast={tv.credits.cast.slice(0,5)} id={tv.id} type={"tv"}  /> 
                                : null
                            }
                        </div>

                        <div className="Recommendation col-* my-2 mt-5">
                            {tv.recommendations && tv.recommendations.results.length ?
                                <DetailsSimilar similar={tv.recommendations.results.slice(0,10)} type={"tv"} id={tv.id} />
                                :null
                            }
                        </div>

                        <div className="Image col-* my-2">
                            {tv.images && tv.images.backdrops.length ?
                                <DetailsImage images={tv.images.backdrops.slice(0,10)} id={tv.id} type={"tv"} />
                                :null
                            }
                        </div>

                        <div className="Video col-* my-2">
                            {tv.videos && tv.videos.results.length ?
                                <DetailsVideo videos={tv.videos.results} id={tv.id} type={"tv"} />
                                :null
                            }
                        </div>

                    </div>
                </div>
                :
                <div className="position-relative"><Loader /></div>
            }
        </>
    )
}

export default TvDetails
