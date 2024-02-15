import { Link } from "react-router-dom";
import { useState ,useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
    const [data, setData] = useState('');
    const getcourses = () => {
        axios.get('http://localhost:5000/getcourses')
            .then((response) => {
                console.log(response.data)
                alert('21')
                setData(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(()=>{
        getcourses()
    },[])
    return (
        <div className="container-fluid">
            <div className="">
                {
                    data && data.map(item=>(
                        <div className="courses row gap-3">
                            <div className="card course border border-0 col-lg-4 col-md-6 col-8">
                        <Link>
                            <img className="card-img-top" src={''} alt="Bootstrap" />
                        </Link>
                            <div className="card-body">
                                <h5 className="card-title">Javascript</h5>
                                <p className="card-text">Some quick example text to build on the card</p>
                                <div className="text-start">
                                <Link>
                                    <a href="#" className=" text-dark">Launch Course</a>
                                </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))
                }
            
            </div>
            <button className="btn btn-dark"><Link to={'/addcourse'} className="text-decoration-none text-dark">Add Course</Link></button>
        </div>
    );
}

export default Dashboard;