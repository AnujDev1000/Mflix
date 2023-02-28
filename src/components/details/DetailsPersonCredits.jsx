import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import sliderSetting from '../../utils/sliderSetting'
import DetailsHeading from './DetailsHeading'
import SimilarCard from './SimilarCard'

const DetailsPersonCredits = ({similar, type, id, department}) => {
    similar = similar && similar.filter(s => s.poster_path !== null)
    
    return (
        <div className="detail-person-credits">
            <DetailsHeading heading={type + " - as " + department} type={ "person/" + type.toLowerCase() + "/similar/" + department.toLowerCase() } id={id}  />
            <div className="slider-box py-2 d-none d-lg-block">
                <Slider {...sliderSetting(5)}>
                    {similar.map((s,i) => 
                        <div key={i}>
                            <Link to={"/" + type + "/" + s.id}>
                                <SimilarCard similar={s}  />
                            </Link>
                        </div>
                    )}
                </Slider>
            </div>
            <div className="slider-box py-2 d-none d-sm-block d-lg-none">
                <Slider {...sliderSetting(3)}>
                    {similar.map((s,i) => 
                        <div key={i}>
                            <Link to={"/" + type + "/" + s.id}>
                                <SimilarCard similar={s}  />
                            </Link>
                        </div>
                    )}
                </Slider>
            </div>
            <div className="slider-box py-2 d-sm-none">
                <Slider {...sliderSetting(2)}>
                    {similar.map((s,i) => 
                        <div key={i}>
                            <Link to={"/" + type + "/" + s.id}>
                                <SimilarCard similar={s}  />
                            </Link>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default DetailsPersonCredits
