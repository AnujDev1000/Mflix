import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from '../components/details/MovieDetails'
import CastList from '../components/lists/CastList'
import GenreList from '../components/lists/GenreList'
import ImageList from '../components/lists/ImageList'
import SimilarList from '../components/lists/SimilarList'
import UpcomingList from '../components/lists/UpcomingList'
import VideoList from '../components/lists/VideoList'

const MovieRoutes = () => {
    return (
        <Routes>
            <Route path="/movie/:id" element={<MovieDetails  />} />
            <Route path="/movie/cast/:id" element={<CastList type={"movie"} />} />
            <Route path="/movie/similar/:id" element={<SimilarList type={"movie"} />} />
            <Route path="/movie/image/:id" element={<ImageList type={"movie"} />} />
            <Route path="/movie/video/:id" element={<VideoList type={"movie"} />} />
            <Route path="/movie/genre/:id" element={<GenreList type={"movie"} />} />
            <Route path="/movie/upcoming" element={<UpcomingList type={"movie"} />} />
        </Routes>
    )
}

export default MovieRoutes
