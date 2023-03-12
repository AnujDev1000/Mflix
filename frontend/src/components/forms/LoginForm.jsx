import React, { useContext, useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import loginUser from '../../hooks/loginUser'

const LoginForm = () => {
    const { user, dispatch } = useContext(UserContext)
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({ email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    }, [inputs])

    const handleLogin = (e) => {
        e.preventDefault()
        setErrors({})
        setLoading(true)
        loginUser(inputs)
        .then(res => {
            if(res.data.hasOwnProperty('token')){
                setInputs({ email: "", password: "" })
                dispatch("SET_USER", res.data)
                setLoading(false)
                navigate("/")
            }
            else{
                setErrors(res.data)
            }
            setLoading(false)
        })
    }

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-9 col-sm-8 col-lg-7">
                    <form className="register-form d-flex flex-column">
                        <span className="fs-custom-2 fw-bold text-center mb-3 text-secondary">
                            <FaUserCircle />
                            <h6>LOGIN</h6>
                        </span>

                        <input className="form-control p-2 fs-small shadow-sm" type="email" name="email" id="email" placeholder="EMAIL" value={inputs.email} onChange={e => {setInputs({...inputs, email: e.target.value })}} />
                        {errors && errors ? 
                            <span className="text-danger fs-small">{errors.email}</span>
                            : null
                        }

                        <input className="mt-3 form-control p-2 fs-small shadow-sm" type="password" name="password" id="password" placeholder="PASSWORD" value={inputs.password} onChange={e => {setInputs({...inputs, password: e.target.value })}} />
                        {errors && errors ? 
                            <span className="text-danger fs-small">{errors.password}</span>
                            : null
                        }
                        {errors && errors.credentials ? 
                            <span className="text-danger fs-small">{errors.credentials}</span>
                            : null
                        }
                        
                        <button type="button" className="btn  bg-main text-light my-1 mt-3" onClick={e => handleLogin(e)}>
                            {loading ? 
                                <div className="spinner-border spinner-border-sm" role="status"></div>
                                : 
                                "LOGIN"
                            }
                        </button>
                        
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
