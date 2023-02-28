import React, { Suspense } from 'react'
const ProfileImg = React.lazy(() => import('../imgComponents/ProfileImg'));

const PersonCard = ({singlePerson}) => {
    return (
        <div className="singlePerson-card h-100 bg-prime-shade-1 shadow-sm rounded cursor-pointer position-relative p-1 bg-hover-1">
            <div className="card-img overflow-hidden rounded min-height-200">
                <Suspense fallback={<span></span>}>
                    <ProfileImg profile_path={singlePerson.profile_path} />
                </Suspense> 
            </div>
            <div className="singlePerson-content position-absolute w-100 h-100 top-0 start-0 p-1">
                <div className="singlePerson-content-data bg-prime-gradient-1 w-100 h-100 p-2 rounded d-flex flex-column justify-content-end">
                    <span className="singlePerson-name text-base1 fs-small fw-bold">{singlePerson.name}</span>
                    <span className="text-base2 fs-small">{singlePerson.known_for_department}</span>
                </div>
            </div>
        </div>
    )
}

export default PersonCard
