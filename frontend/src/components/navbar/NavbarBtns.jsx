import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi"
import { FaSearch, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'

const NavbarBtns = ({openSearchBox, openUserBox}) => {
    return (
        <div className="btn-box">
            <button type="button" className="btn p-0 px-1 text-white d-md-none" onClick={e => openSearchBox(e)}>
                <FaSearch />
            </button>
            <button className="navbar-toggler border-0 p-0 me-1 " type="button" data-bs-toggle="collapse" data-bs-target="#navdata">
                <HiMenuAlt3  className="fs-2 fw-bold text-white" />
            </button>
            <button className="btn bg-light rounded btn-sm ms-2 d-md-none" onClick={e => openUserBox(e)} >
                <FaUser />
            </button>
            <div className="d-none d-md-none user-box search-top-1 bg-light rounded-bottom px-2 me-2 mt-1 position-absolute end-0 z-index"  id="user-box2">
                <Link to="/register" className="text-decoration-none text-dark">
                    Register
                </Link>
                <br/>
                <Link to="/login" className="text-decoration-none text-dark">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default NavbarBtns
