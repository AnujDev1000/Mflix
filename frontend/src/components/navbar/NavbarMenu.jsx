import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavContext } from '../../context/NavContext'

const NavbarMenu = () => {
    const { nav, setNav } = useContext(NavContext)

    return (
        <ul className="navbar-nav ms-auto navbar-nav-scroll bg-prime-md pt-2 py-md-0 me-md-2" id="navabr-menu">
            <li className="nav-item me-sm-2">
                <Link to="/" className="text-decoration-none text-base2">
                    <span className={nav === "home" ? "text-info cursor-pointer" : null} onClick={e => setNav("home")}>Home</span>
                </Link>
            </li>
            <li className="nav-item rounded me-sm-2 my-1 my-sm-0">
                <Link to="/movie" className="text-decoration-none text-base2">
                    <span className={nav === "movie" ? "text-info cursor-pointer" : null} onClick={e => setNav("movie")}>Movie</span>
                </Link>
            </li>
            <li className="nav-item rounded my-1 my-sm-0">
                <Link to="/tv" className="text-decoration-none text-base2">
                    <span className={nav === "tv" ? "text-info cursor-pointer" : null} onClick={e => setNav("tv")}>Tv</span>
                </Link>
            </li>
        </ul>
    )
}

export default NavbarMenu
