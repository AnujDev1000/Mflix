import React from 'react'
import DetailEpisodeCard from './DetailEpisodeCard'

const DetailsEpisodes = ({episodes}) => {
    return (
        <div className="episode-list mt-2">
            {episodes && episodes.length ? 
                <>
                    <p className="discription text-white ">Episodes</p>
                    <div className="row g-2">
                        {episodes.map((episode, i) => 
                            <div className="col-sm-6 col-lg-4 mb-1" key={i}>
                                <DetailEpisodeCard episode={episode} />
                            </div>
                        )}
                    </div>
                </>
                : null
            }
        </div>
    )
}

export default DetailsEpisodes
