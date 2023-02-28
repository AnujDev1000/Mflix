import React, { useEffect, useState } from 'react'
import HomeMain from '../components/home/HomeMain'
import Loader from '../components/Loader'
import getProviders from '../hooks/getProviders'
import sortUtil from '../utils/sortUtil'
import HomeProviders from './HomeProviders'


const Home = () => {
    const [providers, setProviders] = useState([])

    useEffect(() => {
        setProviders([])
        getProviders()
            .then(res => {
                if(res.data && res.data.results.length){
                    const data = [...new Map(res.data.results.slice(0,199).sort(sortUtil("display_priority")).map(i => [i["display_priority"], i])).values()]
                    setProviders(data)
                }
                else{
                    setProviders("No Data")
                }
            })
    }, [])

    return (
        <>
            {providers.length ? 
                <div className="Home position-relative">
                    <HomeMain />
                    <HomeProviders providers={providers.slice(0,48)} />
                </div>
                : <div className="position-relative "><Loader /></div>
            }
        </>
    )
}

export default Home

// CineVision: Your Window into the World of Cinema
// Reel World: A celebration of the art and power of cinema
// Silver Screen Haven: Your online home for all things film
// Picture Perfect: Where cinema and culture come together
// Cinephile's Corner: Your ultimate guide to the world of film
// Movie Mosaic: Celebrating the diverse world of cinema, one film at a time
// Screen Society: Bringing the magic of movies to your fingertips
// Cinema Chronicles: Exploring the stories and legends of the big screen
// The Reel Deal: Your daily dose of movie news, reviews, and interviews
// Picture House: Where the love of film never fades
// The Film Fanatic: A platform for movie lovers, by movie lovers.

// Your ultimate guide to the world of film. Discover the latest movies and tvshows, immerse yourself in film culture. Experience the magic of cinema, all in one place.

// Here's a potential branding for a movie website:

// Brand Name: CineMate
// Tagline: "Discover Your Next Favorite Film"

// Mission Statement: At CineMate, we believe that film has the power to inspire, to challenge, and to bring people together. We are dedicated to curating a platform that connects you with the films you love, and with the films you'll love next. Join us on a journey of discovery, and never stop exploring the world of cinema.








