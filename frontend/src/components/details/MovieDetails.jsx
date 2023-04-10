import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getMovieDetails from '../../hooks/getMovieDetails'
import DetailsBg from './DetailsBg';
import Loader from '../Loader';
import DetailsBtns from './DetailsBtns';
import DetailsCast from './DetailsCast';
import DetailsImage from './DetailsImage';
import DetailsPoster from './DetailsPoster';
import DetailsReviews from './DetailsReviews';
import DetailsVideo from './DetailsVideo';
import MovieDetailsContent from './MovieDetailsContent';
import DetailsSimilar from './DetailsSimilar';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import addFavoriteMovie from '../../hooks/addFavoriteMovie';
import { UserContext } from '../../context/userContext';
import { toast } from "react-toastify"
import removeFavoriteMovie from '../../hooks/removeFavoriteMovie';

const MovieDetails = () => {
    const navigate = useNavigate()
    const { favorites, dispatchFavorites } = useContext(FavoriteContext)
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        setFavorite(false)
        setLoading(true)
        getMovieDetails(id, "all")
                .then(res => {
                    setLoading(false)
                    setMovie(res.data)
                    if(favorites.movies.findIndex(m => m.id == res.data.id) != -1){
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
                genres: movie.genres,
                id: movie.id, 
                original_title: movie.original_title,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                title: movie.title,
                vote_average: movie.vote_average
            }
            addFavoriteMovie(favorites._id, user.token, body)
            .then(res => {
                setLoading(false)
                toast.success("Added to Favorites")
                dispatchFavorites("ADD_MOVIE", body)
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
            id: movie.id
        }
        removeFavoriteMovie(favorites._id, user.token, body)
        .then(res => {
            setLoading(false)
            toast.success("Removed from Favorites")
            dispatchFavorites("REMOVE_MOVIE", body)
            setFavorite(false)
        })
    }



    return (
        <>
            {!loading && movie.credits ? 
                <div className="movie-details container navbar-padding">
                    <DetailsBg backdrop_path={movie.backdrop_path} />
                    <div className="row justify-content-center mt-sm-5">

                        <div className="col-6 col-sm-6 col-md-3 mb-2">
                            <div className="movie-details-main">
                                <DetailsPoster poster_path={movie.poster_path} />
                                <div className="d-none d-md-block">
                                    <DetailsBtns favorite={favorite} type={"movie"} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} loading={loading} />
                                </div>
                            </div>
                            <hr className="bg-white d-md-none" />
                        </div>
                        
                        <div className="Content col-* col-md-9 mb-2">
                            <MovieDetailsContent movie={movie} type={"movie"} favorite={favorite} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} loading={loading} />
                            {movie.credits.cast && movie.credits.cast.length ? 
                                <DetailsCast cast={movie.credits.cast.slice(0,5)} id={movie.id} type={"movie"} /> 
                                : null
                            }
                        </div>

                        <div className="Recommendation col-* mt-5">
                            {movie.recommendations && movie.recommendations.results.length ?
                                <DetailsSimilar similar={movie.recommendations.results.slice(0,10)} type={"movie"} id={movie.id} />
                                :null
                            }
                        </div>

                        <div className="Image col-* my-2">
                            {movie.images && movie.images.backdrops.length ?
                                <DetailsImage images={movie.images.backdrops.slice(0,9)} id={movie.id} type={"movie"} />
                                :null
                            }
                        </div>

                        <div className="Video col-* my-2">
                            {movie.videos && movie.videos.results.length ?
                                <DetailsVideo videos={movie.videos.results} id={movie.id} type={"movie"} />
                                :null
                            }
                        </div>

                        {/* <div className="col-*">
                            {movie.reviews && movie.reviews.results.length >=3 ?
                                <DetailsReviews reviews={movie.reviews.results} id={movie.id} type={"reviews"} />
                                :null
                            }
                        </div> */}
                    </div>
                </div>
                :  
                <div className="position-relative"><Loader /></div>
            }
        </>
    )
}

export default MovieDetails
