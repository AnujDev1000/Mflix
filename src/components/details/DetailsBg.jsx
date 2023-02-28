import React, { Suspense } from 'react'
import BackdropImg from '../imgComponents/BackdropImg'

const DetailsBg = ({backdrop_path}) => {
    return (
        <div className="bg-movie vh-100 fixed-top z-index-1">
            <Suspense fallback={<span></span>}>
                <BackdropImg backdrop_path={backdrop_path} />
            </Suspense>
            <div className="bg-prime-gradient-2 position-absolute w-100 h-100 top-0 left-0"></div>
        </div>
    )
}

export default DetailsBg
