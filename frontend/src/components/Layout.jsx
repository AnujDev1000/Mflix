import React from 'react'
import { NavContextProvider } from '../context/NavContext'
import { SearchContextProvider } from '../context/SearchContext'
import { UserContextProvider } from '../context/userContext'
import MainRoutes from '../routes/MainRoutes'
import MovieRoutes from '../routes/MovieRoutes'
import PersonRoutes from '../routes/PersonRoutes'
import TvRoutes from '../routes/TvRoutes'
import UserRoutes from '../routes/UserRoutes'
import Navbar from './navbar/Navbar'

const Layout = () => {
    return (
        <div className="layout" id="layout">
            <UserContextProvider>
                <UserRoutes />
                <NavContextProvider>
                    <SearchContextProvider>
                        <Navbar />
                        <MainRoutes />
                        <MovieRoutes />
                        <TvRoutes />
                        <PersonRoutes />
                    </SearchContextProvider>
                </NavContextProvider>   
            </UserContextProvider>
        </div>
    )
}

export default Layout
