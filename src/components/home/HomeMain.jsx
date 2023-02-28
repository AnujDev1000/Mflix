import React from 'react'
import { Link } from 'react-router-dom'
import WallE from '../imgComponents/WallE'

const HomeMain = () => {
    return (
        <>
            <div className="position-absolute top-0 left-0 w-100 vh-100 d-flex">
                <WallE />
            </div>
            <div className="position-absolute top-0 left-0 bg-prime-gradient-3 w-100 vh-100"></div>
            <div className="container position-relative vh-100">
                <div className="row align-items-center h-100 py-2">
                    <div className="col-sm-8 col-lg-5">
                        <div className="d-flex flex-column align-items-center text-base1 ">
                            <h1 className="fs-custom-3 fw-bold text-center">Your Window into the World of Cinema</h1>
                            <p className="text-center">
                                Your ultimate guide to the world of film. Discover the latest movies and tvshows, immerse yourself in film culture. Experience the magic of cinema, all in one place.
                            </p>
                            <Link to="/movie" className="text-decoration-none text-dark">
                                <button className="btn btn-warning fw-bold rounded-0">
                                        GET STARTED
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMain
