import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate('/Dashboard')
    const send = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/admin', {
            name,
            password
        }).then((response) => {
            console.log(response.data.user);
            sessionStorage.setItem("adminName",response.data.user.name)
            navigate('/Dashboard')
        })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: "90vh" }}>
            <h3>Admin Form</h3>
            <p>Please Fill Data To Be Able TO Go To Dashboard</p>
            <form action="" className="w-50">
                <div className="form-div">
                    <label className="form-label">Admin Name</label>
                    <input type="text" onChange={(e) => {
                        setName(e.target.value)
                    }} className="form-control" />
                </div>
                <div className="form-div">
                    <label className="form-label">Admin Password</label>
                    <input type="password" onChange={(e) => {
                        setPassword(e.target.value)
                    }} className="form-control" />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary w-100 mt-4" onClick={send}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Admin;