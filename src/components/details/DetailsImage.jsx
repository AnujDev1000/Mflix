import React from 'react'
import Slider from 'react-slick'
import sliderSetting from '../../utils/sliderSetting'
import DetailsHeading from './DetailsHeading'
import DetailsImageCard from './DetailsImageCard'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const DetailsImage = ({images, id, type}) => { 

    return (
        <div className="details-image mb-2">
            <DetailsHeading heading={"Images"} type={ type + "/image" } id={id}  />
            <div className="slider-box py-2 d-none d-sm-block">
                <Slider {...sliderSetting(3, false)}>
                    {images.map((img, i) => 
                        <DetailsImageCard key={i} backdrop_path={img.file_path} />
                    )}
                </Slider>
            </div>
            <div className="slider-box py-2 d-sm-none">
                <Slider { ...sliderSetting(2, false) } >
                    {images.map((img, i) => 
                        <DetailsImageCard key={i} backdrop_path={img.file_path} />
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default DetailsImage
