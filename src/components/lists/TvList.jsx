import React from 'react'
import { Link } from 'react-router-dom';
import TvCard from '../cards/TvCard';

const TvList = ({tv}) => {
    
    return (
        <div className="tv-list mt-1">
            <div className="row justify-content-center justify-content-sm-start">
                {tv.map((show,i) => 
                    <div key={i} className="col-10 col-sm-6 col-md-4 col-lg-3 mb-4">
                        {show.poster_path && show.poster_path.length ? 
                                <Link to={"/tv/" + show.id}>
                                    <TvCard show={show} />
                                </Link>
                            : null
                        }
                    </div> 
                )}
            </div>
        </div>
    )
}

export default TvList
