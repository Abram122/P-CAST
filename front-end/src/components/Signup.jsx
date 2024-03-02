import img from "./Images/login-signup.jpg"
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConPassword] = useState('')
    const [nameError, setNameError] = useState('Enter Your First Name')
    const [phoneError, setPhoneError] = useState('Enter Your Phone Number')
    const [emailError, setEmailError] = useState('Enter Your Email Address')
    const [passwordError, setPasswordError] = useState('Enter Your Password')
    const [conpasswordError, setConPasswordError] = useState('Confirm Your Password')
    const [errorm, setErrorm] = useState('')
    const navigate = useNavigate("/signin")
    // regex 
    // for phone
    const regphone = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g
    // for username 
    const reguser = /^[0-9A-Za-z]{6,16}$/
    // for email 
    const regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // for password
    const regpass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    const send = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/adduser", {
            name, email, phone, password
        }).then(res => {
            // if (res.data == "you already have an account please signin") {
            //     setErrorm(res.data)
            //     alert("already have an account")
            // }
            //  else {
                if (name == '') {
                    setNameError('User Name is required')
                } else if (reguser.test(name)) {
                    setNameError('')
                } else {
                    setNameError('Invalid User Name')
                }
                if (email == '') {
                    setEmailError('Email is required')
                } else if (regemail.test(email)) {
                    setEmailError('')
                } else {
                    setEmailError("invaild Email")
            }
            if (phone == '') {
                setPhoneError('Phone Number is required')
            } else if (regphone.test(phone)) {
                setPhoneError('')
            } else {
                setPhoneError('Invalid Phone Number')
                }
                if (password == '') {
                    setPasswordError('Password is required')
                } else if (regpass.test(password)) {
                    setPasswordError('')
                } else {
                    setPasswordError('Invalid Password')
                }
                if (password!= conpassword) {
                    setConPasswordError('Passwords do not match')
                } else {
                    setConPasswordError('')
                }
                if (nameError== '' && emailError== ''  && passwordError== '' && conpasswordError=="") {
                    navigate('/signin')
                }
    
        // }
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
        console.log(name, email, phone, password)
    }
    return (
        <div className="container-fluid ps-5 pe-5 form">
            <div className="row">
                <div className="col-lg-6 div-img">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="text-center">
                        <h1>Welcome to our community</h1>
                        <h5>Become A New Member :)</h5>
                    </div>
                    <form action="/" >
                        <div className="form-div">
                            <label className="form-label">User Name</label>
                            <input type="text" name="username" id="" className="form-control" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            <p className="text-danger">{nameError}</p>
                        </div>
                        <div className="form-div">
                            <label className="form-label">Email Address</label>
                            <input type="email" name="email" id="" className="form-control" onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                            <p className="text-danger">{emailError}</p>
                        </div>
                        <div className="form-div">
                            <label className="form-label">Phone Number</label>
                            <input type="number" name="phonenumber" id="" className="form-control" onChange={(e) => {
                                setPhone(e.target.value)
                            }} />
                            <p className="text-danger">{phoneError}</p>
                        </div>
                        <div className="form-div">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" id="" className="form-control" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                            <p className="text-danger">{passwordError}</p>
                        </div>
                        <div className="form-div">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="confirm password" id="" className="form-control" onChange={(e) => {
                                setConPassword(e.target.value)
                            }} />
                            <p className="text-danger">{conpasswordError}</p>
                            <div className="text-ceter mt-4">
                                <p>Already Have An Account <Link to={"/signin"}>Signin</Link> </p>
                            </div>
                        </div>
                        <div className="form-div mt-4 text-center">
                            <button className="btn btn-primary w-50" onClick={send} >Sign Up</button>
                            <p className="error text-danger mt-3 text-start">{errorm}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;