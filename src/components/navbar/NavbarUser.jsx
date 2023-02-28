import React, { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavbarUser = ({openUserBox}) => {

    return (
        <div className="btn-group position-relative">
            <button className="btn bg-base1 rounded btn-sm ms-2 d-none d-md-block" onClick={e => openUserBox(e)} >
                <FaUser />
            </button>
            <div className="d-none user-box search-top-2 bg-base1 rounded-bottom px-2 pb-0 mt-1 position-absolute end-0 z-index"  id="user-box">
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

export default NavbarUser
