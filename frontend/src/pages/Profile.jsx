import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import { UserContext } from '../context/userContext'
import getUser from '../hooks/getUser'

const Profile = () => {
    const {user} = useContext(UserContext)
    const [userData, setUserData] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setUserData({})
        setErrors({})
        getUser(user.id)
        .then(res => {
            console.log(res.data);
            if(res.data.hasOwnProperty("_id")){
                setUserData(res.data)
            }
            else{
                setErrors(res.data)
            }
        })

    }, [])

    return (
        <>
            {userData && userData._id ? 
                <div className="container navbar-padding text-light">
                    <div className="profile-header">
                        <h2 className="text-white mb-2 fw-bold">Profile</h2>
                    </div>
                    <hr className="bg-light m-0"/>

                    <div className="row mt-4">
                        <div className="col-md-7">
                            <div className="favorite-box w-100 rounded p-2 rounded shadow-sm bg-gradient-1">
                                <h6>Access all your saved movies and TV shows in one place with our convenient 'My Watchlist' feature. Easily manage your favorite titles and enjoy seamless viewing across all your devices.</h6>

                                <Link to="/favorites" className="text-decoration-none btn btn-sm btn-primary mt-3">
                                    Favorites
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="user mt-3 mt-md-0">
                                <span className="fs-small text-base2">Firstname</span>
                                <input className="form-control bg-transparent text-white border-main placeholder-white mb-3" type="text" value={userData.firstname} />

                                <span className="fs-small text-base2">Lastname</span>
                                <input className="form-control bg-transparent text-white border-main placeholder-white mb-3" type="text" value={userData.lastname} />

                                <span className="fs-small text-base2">Email</span>
                                <input className="form-control mb-2 bg-transparent text-white border-main placeholder-white mb-3" type="text" value={userData.email} />
                            </div>
                        </div>
                    </div>

                </div>
                :
                <div className="position-relative "><Loader /></div>
            }
        </>
    )
}

export default Profile
