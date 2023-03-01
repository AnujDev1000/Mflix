import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
const ProfileImg = React.lazy(() => import('../imgComponents/ProfileImg'));
import DetailsHeading from './DetailsHeading';

const DetailsCast = ({cast, id, type}) => {

    return (
        <div className="cast">
            <DetailsHeading heading={"Cast"} type={ type + "/cast" } id={id}  />
            <div className="row overflow-hidden px-2">
            {cast.map((c, i) =>
                <div key={i}  className="col max-width-80 p-1">
                    {c.profile_path && c.profile_path.length ? 
                            <Link to={"/person/" + c.id}>
                                <Suspense fallback={<span></span>}>
                                    <ProfileImg profile_path={c.profile_path} />
                                </Suspense> 
                            </Link>
                    : null
                    }
                </div> 
            )}
            </div>
        </div>
    )
}

export default DetailsCast
