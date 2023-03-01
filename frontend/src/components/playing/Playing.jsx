import React from 'react'
import Slider from 'react-slick';
import sliderSetting from '../../utils/sliderSetting';
import PlayingCard from './PlayingCard';

const Playing = ({playing, type}) => {

    return (
        <div className="playing">
            <Slider {...sliderSetting(1, true, true, true)} >
                {playing.map((item, i) => 
                    <PlayingCard key={i} playing={item} type={type} />
                )}
            </Slider>
        </div>
    )
}

export default Playing
