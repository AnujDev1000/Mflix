import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'

const UserRoutes = () => {
    const {user} = useContext(UserContext)

    return (
        <Routes>
            <Route path="/register" element={user && user.token ? <Home/> : <Register />} />
            <Route path="/login" element={user && user.token ? <Home/> : <Login />} />
            <Route path="/profile" element={user && user.token ? <Profile /> : <Home /> } />
            <Route path="/favorites" element={user && user.token ? <Favorites /> : <Home /> } />
        </Routes>
    )
}

export default UserRoutes
