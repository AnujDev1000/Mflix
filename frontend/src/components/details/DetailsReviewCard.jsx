import React from 'react'
import AvatarImg from '../imgComponents/AvatarImg'

const DetailsReviewCard = ({review}) => {
    return (
        <div className="review-card bg-prime rounded shadow-sm me-2 p-2 h-100">
            <div className="d-flex flex-row align-items-center">
                <div className="author-img me-2 rounded-circle overflow-hidden">
                    <AvatarImg avatar_path={review.author_details.avatar_path} />
                </div>
                <span className="text-white">{review.author}</span>
            </div>
            <hr className="text-white mb-3" />
            <p className="text-white fs-small ms-5 text-break">{review.content.substring(0,300)}</p>
        </div>
    )
}

export default DetailsReviewCard
