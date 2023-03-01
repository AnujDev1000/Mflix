import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import Illustration from '../components/imgComponents/Illustration'
import NavbarLogo from '../components/navbar/NavbarLogo'

const Login = () => {
    return (
        <div className="position-relative bg-prime z-index-main2 vh-100 w-100 shadow">
            <div className="container py-3 h-100">
                <div className="row bg-light h-100 g-0 rounded">
                    <div className="col-7 h-100 d-none d-md-block">
                        <div className="illustration position-relative h-100 w-100">    
                            <Illustration />
                        </div>
                    </div>
                    
                    <div className="col-md-5 h-100 position-relative">
                        <div className="position-absolute top-0 left-0 p-2">
                            <NavbarLogo />
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
