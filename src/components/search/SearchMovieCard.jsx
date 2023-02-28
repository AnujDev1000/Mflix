import React, { Suspense } from 'react'
const PosterImg = React.lazy(() => import('../imgComponents/PosterImg'));
const ProfileImg = React.lazy(() => import('../imgComponents/ProfileImg'));

const SearchMovieCard = ({movie}) => {
    return (
        <div className="movie d-flex flex-row bg-hover-2 rounded">
            <div className="img-box w-40 me-2 rounded overflow-hidden">
                {movie.poster_path && movie.poster_path ? 
                    <Suspense fallback={<div className="spinner-border spinner-border-sm text-primary"><span></span></div>}>
                        <PosterImg poster_path={movie.poster_path} className="" />
                    </Suspense> 
                    :
                    <Suspense fallback={<div className="spinner-border spinner-border-sm text-primary"><span></span></div>}>
                        <ProfileImg profile_path={movie.profile_path} />
                    </Suspense> 
                }
            </div>
            <div className="movie-content d-flex flex-column text-truncate text-base1 fs-small w-100">
                <span className="text-ellipsis fw-bold">{movie.name && movie.name}</span>
                <span className="text-ellipsis fw-bold">{movie.title && movie.title}</span>
                <span className="text-base2">{movie.media_type}</span>  
                <span className="text-grey-shade">
                    {movie.release_date && movie.release_date.split("-")[0]}
                </span>  
                <span className="text-grey-shade ">
                    {movie.first_air_date && movie.first_air_date.split("-")[0]}
                </span>  
            </div>
        </div>
    )
}

export default SearchMovieCard
