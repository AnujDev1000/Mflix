import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

const NavbarUser = ({openUserBox, logoutUser, navigateTo}) => {
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
            <div className="d-none user-box search-top-2 bg-dark rounded pb-0 py-1 px-2 mt-1 position-absolute end-0 z-index text-end"  id="user-box">
                {user && user.token ? 
                        <>
                            <p onClick={() => navigateTo("/profile")} className="m-0 cursor-pointer text-light fs-small">
                                Profile
                            </p> 
                            <hr className="bg-secondary m-0" />
                            <p onClick={() => navigateTo("/favorites")} className="m-0 cursor-pointer text-light fs-small">
                                Favorites
                            </p>
                            <hr className="bg-secondary m-0" />
                            <p className="m-0 text-light fs-small cursor-pointer" onClick={() => logoutUser()}>Logout</p>
                        </>
                    :
                        <>
                            <p onClick={() => navigateTo("/register")} className="m-0 cursor-pointer text-light fs-small">
                                Register
                            </p>
                            <hr className="bg-secondary m-0" />
                            <p onClick={() => navigateTo("/login")} className="m-0 cursor-pointer text-light fs-small">
                                Login
                            </p>
                        </>
                }
            </div>
        </div>
    )
}

export default NavbarUser
