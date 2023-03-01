import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-9 col-sm-8 col-lg-7">
                    <form className="register-form d-flex flex-column">
                        <span className="fs-custom-2 fw-bold text-center mb-3 text-secondary">
                            <FaUserCircle />
                            <h6>LOGIN</h6>
                        </span>
                        <input className="mb-3 form-control p-2 fs-small shadow-sm" type="email" name="email" id="email" placeholder="EMAIL" />
                        <input className="mb-3 form-control p-2 fs-small shadow-sm" type="password" name="password" id="password" placeholder="PASSWORD" />
                        
                        <button className="btn bg-main text-light my-1 mt-3">LOGIN</button>
                        <span className="text-center text-secondary fs-small">
                            Don't have an account? 
                            <Link to="/register" className="text-decoration-none fw-bold"> Register</Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
