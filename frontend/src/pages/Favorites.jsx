import React from 'react'
import { useContext } from 'react'
import MovieList from '../components/lists/MovieList'
import TvList from '../components/lists/TvList'
import NoData from '../components/NoData'
import { FavoriteContext } from '../context/FavoriteContext'
import { UserContext } from '../context/userContext'

const Favorites = () => {
    const { favorites, dispatchFavorites } = useContext(FavoriteContext)
    const { user } = useContext(UserContext)

    return (
        <div className="container navbar-padding text-light">
            <div className="Favorite-header">
                <h2 className="text-white mb-2 fw-bold">Favorites</h2>
            </div>
            <hr className="bg-light m-0"/>
            <div className="favorite-content mt-3">
                <p className="text-base2" >MOVIES</p>
                {favorites.movies && favorites.movies.length ? 
                    <MovieList movies={favorites.movies} /> 
                    :
                    <NoData />
                }

                <p className="text-base2 mt-2" >TV</p>
                {favorites.shows && favorites.shows.length ? 
                    <TvList tv={favorites.shows} /> 
                    :
                    <NoData />
                }
            </div>
        </div>
    )
}

export default Favorites
