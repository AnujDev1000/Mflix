import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import sliderSetting from '../../utils/sliderSetting';
import DetailsHeading from './DetailsHeading'
import SimilarCard from './SimilarCard';

const DetailsSimilar = ({similar, id, type, category}) => {
    similar = similar && similar.filter(s => s.poster_path !== null)

    return (
        <div className="similar-movies">
            {category === "upcoming" ? 
                <DetailsHeading heading={"Upcoming " + type} type={ type + "/upcoming" } category={category}  />
                :
                <DetailsHeading heading={"More Like This"} type={ type + "/similar" } id={id}  />
            }
            <div className="slider-box py-2 d-none d-lg-block">
                <Slider {...sliderSetting(5)}>
                    {similar.map((s,i) => 
                        <div key={i}>
                            <Link to={"/" + type + "/" + s.id}>
                                <SimilarCard similar={s} type={type} />
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
                                <SimilarCard similar={s} type={type} />
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
                                <SimilarCard similar={s} type={type} />
                            </Link>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default DetailsSimilar
