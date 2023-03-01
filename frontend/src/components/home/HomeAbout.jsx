import React from 'react'
import IllustrationMovie from '../imgComponents/IllustrationMovie'
import MinionsLogo from '../imgComponents/MinionsLogo'

const HomeAbout = () => {
    return (
        <div className="home-about position-relative navbar-padding bg-dark">
            <div className="container px-4">
                <h1 className="w-100 text-center text-base1 fw-bold pb-3">ABOUT</h1>
                <div className="row">
                    <div className="col-md-6 ">
                        <MinionsLogo />
                    </div>
                    <div className="col-md-6 my-2 my-sm-0">
                        <div className="home-about-content h-100 fs-6 text-justify text-base1">
                            At Mflix, we believe that film has the power to inspire, to challenge, and to bring people together. We are dedicated to curating a platform that connects you with the films you love, and with the films you'll love next. With our comprehensive database of movies, from the latest releases to classic films from the past, you'll always have access to the information you need to stay up-to-date with the latest happenings in the world of cinema.With features like personalized recommendations, watchlists, and curated collections, you'll never run out of options for your next movie night.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
