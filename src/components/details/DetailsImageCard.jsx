import React, { Suspense } from 'react'
import BackdropImg from '../imgComponents/BackdropImg'
import PosterImg from '../imgComponents/PosterImg'

const DetailsImageCard = ({backdrop_path, poster_path}) => {
    return (
        <div className="details-image-card me-2 overflow-hidden shadow-sm rounded bg-main">
            {backdrop_path && backdrop_path.length ? 
                <Suspense fallback={<span></span>}>
                    <BackdropImg backdrop_path={backdrop_path} />
                </Suspense>
                : null
            }
            {poster_path && poster_path.length ? 
                <Suspense fallback={<span></span>}>
                    <PosterImg poster_path={poster_path} />
                </Suspense>
                : null
            }
        </div>
    )
}

export default DetailsImageCard
