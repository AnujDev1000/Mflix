import React, { Suspense } from 'react'
import PosterImg from '../imgComponents/PosterImg'

const DetailsPoster = ({poster_path}) => {
    return (
        <div className="detail-poster shadow">
            <div className="card-img overflow-hidden rounded">
                <Suspense fallback={<span></span>}>
                    <PosterImg poster_path={poster_path} />
                </Suspense> 
            </div>
        </div>
    )
}

export default DetailsPoster
