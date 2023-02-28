import React from 'react'

const DetailSeasonContent = ({season}) => {
    return (
        <div className="detail-season-content">
            <span className="text-grey-shade">
                {season.air_date && season.air_date.split("-")[0]}
                <span className="pb-2"> - </span>
                EP {season.episodes && season.episodes.length}
            </span>
            <p className="discription text-white ">{season.overview}</p>
        </div>
    )
}

export default DetailSeasonContent
