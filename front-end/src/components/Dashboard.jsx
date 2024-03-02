import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
    const [data, setData] = useState('');
    const getcourses = () => {
        axios.get('http://localhost:5000/getcourses')
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }
    const navigate = useNavigate('/Admin')
    useEffect(() => {
        if (!sessionStorage.getItem("adminName")) {
            navigate('/Admin')
        }
        getcourses()
    }, [])
    return (
        <div className="container-fluid">
            <div className="mb-5">
                <div className="container m-auto courses-section row justify-content-lg-start justify-content-md-start  justify-content-sm-center ">

                    {
                        data && data.map((item) => (
                            <div className="card course border border-0 col-lg-4 col-md-6 col-9">
                                <div className="available ">
                                    <p>{item.availability}</p>
                                </div>
                                <Link>
                                    <img className="card-img-top" src={`http://localhost:5000/images/` + item.courseImage} alt="Bootstrap" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{item.courseName}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <div className="text-start">
                                        <Link>
                                            <a href="#" className=" text-dark">Launch Course</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
            <div className="fixed-bottom d-flex justify-content-around">
                <button className="btn btn-dark"><Link to={'/addcourse'} className="text-decoration-none text-light">Add Course</Link></button>
                <button className="btn btn-dark"><Link to={'/addcategory'} className="text-decoration-none text-light">Add category</Link></button>
                <button className="btn btn-dark"><Link to={'/addservice'} className="text-decoration-none text-light">Add category</Link></button>
                <button className="btn btn-dark"><Link to={'/servicepanel'} className="text-decoration-none text-light">Services Request</Link></button>
                <button className="btn btn-dark"><Link to={'/managequestions'} className="text-decoration-none text-light">Questions Managment</Link></button>
            </div>
        </div>
    );
}

export default Dashboard;