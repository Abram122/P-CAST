import img from './Images/login-signup.jpg'
import { useState  } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
const Signin = () => {
        const [email,setEmail]  = useState('')
        const [password,setPassword]  = useState('')
        const [emailError, setEmailError] = useState('Enter Your Email Address')
        const [passwordError, setPasswordError] = useState('Enter Your Password')
        const [err,setErr] = useState('')
        const navigate = useNavigate("/")
        const errText = document.getElementsByClassName("error")
    // for email 
    const regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // for password
    const regpass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

        const send = (e)=>{
            e.preventDefault()
            axios.post("http://localhost:5000/login",{
                email , password
            }).then((res)=>{

                if (email == '') {
                    setEmailError('Email is required')
                } else if (regemail.test(email)) {
                    setEmailError('')
                } else {
                    setEmailError("invaild Email")
            }
                if (password == '') {
                    setPasswordError('Password is required')
                } else if (regpass.test(password)) {
                    setPasswordError('')
                } else {
                    setPasswordError('Invalid Password')
                }if(emailError==""&&passwordError==""){
                    alert(res.data.user.name)
                    localStorage.setItem("name",res.data.user.name)
                    localStorage.setItem("email",res.data.user.email)
                    alert("setted")
                    navigate('/')
                }
                
            }).catch(err=>{
                alert("err")
                alert(err)
                setErr(err)
                console.log(err)
            })
            
            
        }
    return (  
        <div className="container-fluid ps-5 pe-5 form">
            <div className="row">
                <div className="col-lg-6 div-img">
                    <img src={img} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="text-center">
                        <h1>Welcome to our community</h1>
                        <h5>Become A New Member :)</h5>
                    </div>
                    <form action="" method="post">
                        <div className="form-div">
                            <label className="form-label">Email Address</label>
                            <input type="email" name="email" id="" className="form-control" onChange={(e)=>{
                                setEmail(e.target.value)
                            }}/>
                            <p className=' text-danger'> {emailError}</p>
                            
                        </div>
                        <div className="form-div">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" id="" className="form-control" onChange={(e)=>{
                                setPassword(e.target.value)
                            }}/>
                            <p className=' text-danger'> {passwordError}</p>
                        </div>
                        <div className="text-ceter mt-4">
                            <p>Donot Have An Account <Link to={'/signup'}>Sign Up</Link> </p>
                        </div>
                        <div className="form-div mt-4 text-center">
                            <input type="submit" value={"SignIn"} name="submit" id="" className="btn btn-primary w-50 " onClick={send} />
                        </div>
                        <p className='text-danger error'></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;