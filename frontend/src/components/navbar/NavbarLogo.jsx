import React from 'react'
import { FaTheaterMasks} from "react-icons/fa"

const NavbarLogo = () => {
    return (
        <a href="/" className="navbar-brand bg-white p-0 d-flex flex-row align-items-center bg-base2">
            <div className="logo-icon bg-main px-1">
                <FaTheaterMasks className="text-white fs-5" />
            </div>
            <span className="fs-6 mx-1 ff-cursive text-dark">mflix</span>
        </a>
    )
}

export default NavbarLogo
