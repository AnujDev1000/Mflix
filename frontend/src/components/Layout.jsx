import React from 'react'
import { NavContextProvider } from '../context/NavContext'
import { SearchContextProvider } from '../context/SearchContext'
import MainRoutes from '../routes/MainRoutes'
import MovieRoutes from '../routes/MovieRoutes'
import PersonRoutes from '../routes/PersonRoutes'
import TvRoutes from '../routes/TvRoutes'
import UserRoutes from '../routes/UserRoutes'
import Navbar from './navbar/Navbar'

const Layout = () => {
    return (
        <div className="layout">
            <SearchContextProvider>
                <UserRoutes />
                <NavContextProvider>
                    <Navbar />
                    <MainRoutes />
                    <MovieRoutes />
                    <TvRoutes />
                    <PersonRoutes />
                </NavContextProvider>   
            </SearchContextProvider>
        </div>
    )
}

export default Layout
