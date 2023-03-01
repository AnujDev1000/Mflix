import React, { Suspense } from 'react'
import PosterImg from '../imgComponents/PosterImg'

const SimilarCard = ({similar}) => {
    return (
        <div className="similar-card bg-prime-shade-1 p-1 me-2 shadow-sm rounded position-relative bg-hover-1 min-height-100">
            <div className="card-img overflow-hidden rounded mh-300">
                <Suspense fallback={<span></span>}>
                    <PosterImg poster_path={similar.poster_path} />
                </Suspense> 
            </div>
            <div className="similar-content position-absolute w-100 h-100 top-0 start-0 p-1">
                <div className="similar-content-data bg-prime-gradient-1 w-100 h-100 p-2 rounded d-flex flex-column justify-content-end">
                    <span className="similar-name text-base1 fs-small fw-bold">{similar.title}</span>
                    <span className="similar-name text-base1 fs-small fw-bold">{similar.name}</span>
                    <span className="text-base2 fs-small">{similar.release_date && similar.release_date.split("-")[0]}</span>
                    <span className="text-base2 fs-small">{similar.first_air_date && similar.first_air_date.split("-")[0]}</span>
                    <span className="text-base2 fs-small">{similar.job && similar.job}</span>
                </div>
            </div>
        </div>
    )
}

export default SimilarCard
