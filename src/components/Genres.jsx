import React from 'react'
import { Link } from 'react-router-dom'
import genres from "../genres.json"

const Genres = ({genresList, type}) => {
    return (
        <div className="genresList d-flex flex-row flex-wrap gap-1">
            {genresList &&  genresList.length ? 
                genresList.map((genre,i) => 
                    <div key={i} className="badge badge-sm bg-dark mw-max-content hover-dark shadow-sm">
                        <Link to={"/"+type+"/genre/"+genre} className="text-decoration-none text-white">
                            {genres[`${genre}`]}
                        </Link>
                    </div>
                ) : 
                <div className="badge badge-sm bg-dark mw-max-content">
                    genre
                </div>
            }
        </div>
    )
}

export default Genres
