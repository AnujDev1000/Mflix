import React from 'react'
import Slider from 'react-slick'
import sliderSetting from '../../utils/sliderSetting'
import DetailsHeading from './DetailsHeading'
import DetailsReviewCard from './DetailsReviewCard'

const DetailsReviews = ({reviews, type, id}) => {
    reviews = reviews && reviews.filter(movie => movie.author_details.avatar_path !== null)
    console.log(reviews)

    return (
        <div className="details-review">
            <span className="text-white">Reviews</span>
            <div className="slider-box py-2 d-none d-lg-block">
                <Slider {...sliderSetting(3)}>
                    {reviews.map((review, i) => 
                        <div key={i}className="h-100">
                            <DetailsReviewCard review={review} />
                        </div>    
                    )}
                </Slider>
            </div>
            <div className="slider-box py-2 d-none d-sm-block d-lg-none">
                <Slider {...sliderSetting(2)}>
                    {reviews.map((review, i) => 
                        <div key={i}className="h-100">
                            <DetailsReviewCard review={review} />
                        </div>    
                    )}
                </Slider>
            </div>
            <div className="slider-box py-2 d-sm-none">
                <Slider {...sliderSetting(1)}>
                    {reviews.map((review, i) => 
                        <div key={i}className="h-100">
                            <DetailsReviewCard review={review} />
                        </div>    
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default DetailsReviews
