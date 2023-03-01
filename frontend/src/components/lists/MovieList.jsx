import React from 'react'
import { Link } from 'react-router-dom';
import MovieCard from '../cards/MovieCard';

const MovieList = ({movies}) => {

    return (
        <div className="movie-list mt-1 z-index">
            <div className="row justify-content-center justify-content-sm-start">
                {movies.map((movie,i) => 
                <>
                    {movie.poster_path && movie.poster_path.length ? 
                        <div key={i} className="col-10 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <Link to={"/movie/" + movie.id}>
                                <MovieCard movie={movie} />
                            </Link>
                        </div> 
                        : null
                    }
                </>
                )}
            </div>
        </div>
    )
}

export default MovieList
