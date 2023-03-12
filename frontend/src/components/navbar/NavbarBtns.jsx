import React, { useContext } from 'react'
import { HiMenuAlt3 } from "react-icons/hi"
import { FaSearch, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

const NavbarBtns = ({openSearchBox, openUserBox2, logoutUser}) => {
    const {user} = useContext(UserContext)

    return (
        <div className="btn-box">
            <button type="button" className="btn p-0 px-1 text-white d-md-none" onClick={e => openSearchBox(e)}>
                <FaSearch />
            </button>
            <button className="navbar-toggler border-0 p-0 me-1 " type="button" data-bs-toggle="collapse" data-bs-target="#navdata">
                <HiMenuAlt3  className="fs-2 fw-bold text-white" />
            </button>
            {user && user.token ?
                    <button className="btn btn-sm p-0 ms-1 d-md-none text-light fw-bold" onClick={e => openUserBox2(e)} >
                        {user.firstname}
                    </button>
                :
                    <button className="btn bg-light rounded-circle btn-sm ms-1 d-md-none" onClick={e => openUserBox2(e)} >
                        <FaUser />
                    </button>
            }
            <div className="d-none d-md-none user-box search-top-1 bg-dark rounded px-2 me-2 mt-1 position-absolute end-0 z-index text-end"  id="user-box2">
                {user && user.token ? 
                        <>
                            <Link to="/profile" className="text-decoration-none text-light fs-small">
                                Profile
                            </Link>
                            <hr className="m-0 bg-secondary" />
                            <Link to="/favorites" className="text-decoration-none text-light fs-small">
                                Favorites
                            </Link>
                            <hr className="m-0 bg-secondary" />
                            <span className="text-light fs-small cursor-pointer" onClick={e => logoutUser(e)}>Logout</span>
                        </>
                    :
                        <>
                            <Link to="/register" className="text-decoration-none text-light fs-small">
                                Register
                            </Link>
                            <hr className="m-0 bg-secondary" />
                            <Link to="/login" className="text-decoration-none text-light fs-small">
                                Login
                            </Link>
                        </>
                }
            </div>
        </div>
    )
}

export default NavbarBtns
