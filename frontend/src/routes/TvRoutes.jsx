import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailsSeason from '../components/details/DetailsSeason'
import TvDetails from '../components/details/TvDetails'
import CastList from '../components/lists/CastList'
import GenreList from '../components/lists/GenreList'
import ImageList from '../components/lists/ImageList'
import SeasonList from '../components/lists/SeasonList'
import SimilarList from '../components/lists/SimilarList'
import UpcomingList from '../components/lists/UpcomingList'
import VideoList from '../components/lists/VideoList'

const TvRoutes = () => {
    return (
        <Routes>
            <Route path="/tv/:id" element={<TvDetails  />} />
            <Route path="/tv/cast/:id" element={<CastList type={"tv"} />} />
            <Route path="/tv/similar/:id" element={<SimilarList type={"tv"} />} />
            <Route path="/tv/image/:id" element={<ImageList type={"tv"} />} />
            <Route path="/tv/video/:id" element={<VideoList type={"tv"} />} />
            <Route path="/tv/genre/:id" element={<GenreList type={"tv"} />} />
            <Route path="/tv/seasons/:id" element={<SeasonList />} />
            <Route path="/tv/:name/:tvId/season/:id" element={<DetailsSeason />} />
            <Route path="/tv/upcoming" element={<UpcomingList type={"tv"} />} />
        </Routes>
    )
}

export default TvRoutes
