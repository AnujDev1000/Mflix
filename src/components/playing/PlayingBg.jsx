import React, { Suspense } from 'react'
import BackdropImg from '../imgComponents/BackdropImg'

const PlayingBg = ({backdrop_path}) => {
    return (
        <div className="playing-bg text-base2 h-100">
            <Suspense fallback={<span></span>}>
                <BackdropImg backdrop_path={backdrop_path} />
            </Suspense>
            <div className="bg-prime-gradient-2 position-absolute w-100 h-100 top-0 left-0 d-flex justify-content-center align-items-center">
            </div>
        </div>
    )
}

export default PlayingBg
