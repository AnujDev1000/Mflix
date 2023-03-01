import React, { Suspense } from 'react'
import ProfileImg from '../imgComponents/ProfileImg'

const DetailsProfile = ({profile_path}) => {
    return (
        <div className="detail-profile shadow">
            <div className="card-img overflow-hidden rounded">
                <Suspense fallback={<span></span>}>
                    <ProfileImg profile_path={profile_path} />
                </Suspense> 
            </div>
        </div>
    )
}

export default DetailsProfile
