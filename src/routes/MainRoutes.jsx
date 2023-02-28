import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Search from '../components/search/Search'
import Home from '../pages/Home'
import MoviePage from '../pages/MoviePage'
import TvPage from '../pages/TvPage'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/tv" element={<TvPage />} />
            <Route path="/search/:search" element={<Search  />} />
        </Routes>
    )
}

export default MainRoutes
