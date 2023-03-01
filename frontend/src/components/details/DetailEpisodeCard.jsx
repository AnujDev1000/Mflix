import React from 'react'
import getTimeUtil from '../../utils/getTimeUtil'

const DetailEpisodeCard = ({episode}) => {
    return (
        <div className="detail-episode-card bg-prime-shade-1 rounded shadow-sm p-2">
            <p className="text-base2 fs-small m-0 float-end pt-1">
                {episode.runtime ? getTimeUtil(episode.runtime) : null}
            </p>
            <span className="text-base2 fs-small">
                EP {episode.episode_number}
            </span>
            <p className="text-white fs-small m-0 text-ellipsis text-truncate w-75">{episode.name}</p>
        </div>
    )
}

export default DetailEpisodeCard
