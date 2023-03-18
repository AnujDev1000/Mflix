import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FaFacebook, FaUserCircle } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import registerUser from '../../hooks/registerUser'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

const RegisterForm = () => {
    const { user, dispatch } = useContext(UserContext)
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({ firstname: "", lastname: "", email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    console.log(user);
    useEffect(() => {
    }, [inputs])

    const handleRegister = (e) => {
        e.preventDefault()
        setErrors({})
        setLoading(true)
        registerUser(inputs)
        .then(res => {
            if(res.data.hasOwnProperty('_id')){
                toast.success("Registered Successfully!")
                console.log(res.data);
                setInputs({ firstname: "", lastname: "", email: "", password: ""})
                setLoading(false)
                navigate("/login")
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
                    <form className="register-form d-flex flex-column" autoComplete="off" >
                        <span className="fs-custom-2 fw-bold text-center mb-3 text-secondary">
                            <FaUserCircle />
                            <h6>REGISTER</h6>
                        </span>
                        <input className="form-control p-2 fs-small shadow-sm" type="text" name="firstname" id="firstname" placeholder="FIRSTNAME" value={inputs.firstname} onChange={e => {setInputs({...inputs, firstname: e.target.value })}} />
                        {errors && errors ? 
                            <span className="text-danger fs-small">{errors.firstname}</span>
                            : null
                        }

                        <input className="mt-3 form-control p-2 fs-small shadow-sm" type="text" name="lastname" id="lastname" placeholder="LASTNAME" value={inputs.lastname} onChange={e => {setInputs({...inputs, lastname: e.target.value })}} />
                        {errors && errors ? 
                            <span className="text-danger fs-small">{errors.lastname}</span>
                            : null
                        }

                        <input className="mt-3 form-control p-2 fs-small shadow-sm" type="email" name="email" id="email" placeholder="EMAIL" value={inputs.email} onChange={e => {setInputs({...inputs, email: e.target.value })}} />
                        {errors && errors ? 
                            <span className="text-danger fs-small">{errors.email}</span>
                            : null
                        }

                        <input className="mt-3 form-control p-2 fs-small shadow-sm" type="password" name="password" id="password" placeholder="PASSWORD" value={inputs.password} onChange={e => {setInputs({...inputs, password: e.target.value })}} />
                        {errors && errors ? 
                            <span className="text-danger fs-small">{errors.password}</span>
                            : null
                        }

                        <button type="button" className="btn bg-main text-light my-1 mt-3" onClick={e => handleRegister(e)}>
                            {loading ? 
                                <div className="spinner-border spinner-border-sm" role="status"></div>
                                : 
                                "REGISTER"
                            }
                        </button>

                        <span className="text-center text-secondary fs-small">
                            Already have an account? 
                            <Link to="/login" className="text-decoration-none fw-bold"> Log In</Link>
                        </span>
                        
                        {/* <hr className="bg-secondary m-0 mt-3" />
                        <div className="mt-2 options d-flex flex-row justify-content-center align-items-center fs-2">
                            <FcGoogle className="p-1 border rounded-circle mx-2"/>
                            <FaFacebook className="p-1 border rounded-circle text-primary mx-2" />
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
