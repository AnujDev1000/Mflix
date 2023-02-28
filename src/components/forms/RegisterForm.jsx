import React from 'react'
import { FaFacebook, FaUserCircle } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-9 col-sm-8 col-lg-7">
                    <form className="register-form d-flex flex-column">
                        <span className="fs-custom-2 fw-bold text-center mb-3 text-secondary">
                            <FaUserCircle />
                            <h6>REGISTER</h6>
                        </span>
                        <input className="mb-3 form-control p-2 fs-small shadow-sm" type="text" name="firstname" id="firstname" placeholder="FIRSTNAME" />
                        <input className="mb-3 form-control p-2 fs-small shadow-sm" type="text" name="lastname" id="lastname" placeholder="LASTNAME" />
                        <input className="mb-3 form-control p-2 fs-small shadow-sm" type="email" name="email" id="email" placeholder="EMAIL" />
                        <input className="mb-3 form-control p-2 fs-small shadow-sm" type="password" name="password" id="password" placeholder="PASSWORD" />
                        
                        <button className="btn  bg-main text-light my-1 mt-3">REGISTER</button>
                        <span className="text-center text-secondary fs-small">
                            Already have an account? 
                            <Link to="/login" className="text-decoration-none fw-bold"> Log In</Link>
                        </span>
                        <hr className="bg-secondary mt-4" />

                        <div className="options d-flex flex-row justify-content-center align-items-center fs-2">
                            <FcGoogle className="p-1 border rounded-circle mx-2"/>
                            <FaFacebook className="p-1 border rounded-circle text-primary mx-2" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
