import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

const NavbarUser = ({openUserBox, logoutUser}) => {
    const {user} = useContext(UserContext)

    return (
        <div className="btn-group position-relative">
            {user && user.token ?
                    <button className="btn btn-sm p-0 ms-2 d-none d-md-block fw-bold text-light" onClick={e => openUserBox(e)} >
                        {user.firstname}
                    </button>
                :
                    <button className="btn bg-light rounded-circle btn-sm ms-2 d-none d-md-block" onClick={e => openUserBox(e)} >
                        <FaUser />
                    </button>
            }
            <div className="d-none user-box search-top-2 bg-dark rounded pb-0 px-2 mt-1 position-absolute end-0 z-index text-end"  id="user-box">
                {user && user.token ? 
                        <>
                            <Link to="/profile" className="text-decoration-none text-light fs-small">
                                Profile
                            </Link> 
                            <hr className="bg-secondary m-0" />
                            <Link to="/favorites" className="text-decoration-none text-light fs-small">
                                Favorites
                            </Link>
                            <hr className="bg-secondary m-0" />
                            <span className="text-light fs-small cursor-pointer" onClick={e => logoutUser(e)}>Logout</span>
                        </>
                    :
                        <>
                            <Link to="/register" className="text-decoration-none text-light fs-small">
                                Register
                            </Link>
                            <hr className="bg-secondary m-0" />
                            <Link to="/login" className="text-decoration-none text-light fs-small">
                                Login
                            </Link>
                        </>
                }
            </div>
        </div>
    )
}

export default NavbarUser
