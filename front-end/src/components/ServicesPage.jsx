import { Link, useParams } from "react-router-dom";
import img from "./Images/back-home.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const ServicesPage = () => {
    let { cat } = useParams()
    const [data, setData] = useState('')
    const getdata = () => {
        axios.get('http://localhost:5000/getservice').then((res) => {
            setData(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <Navbar/>
        <div className="container-fluid">
            <div className="text-end mb-lg-1 mb-md-1 mb-5 mt-3">
                <button className="btn btn-dark ps-3 pe-3">
                    <Link className="text-decoration-none text-white" to={'/addservice'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-plus-square" viewBox="0.3 1 19 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    Add Service
                    </Link>
                    </button>
            </div>
            <div className="row justify-content-center">
                {
                    data && data.filter((item) => item.status == 1 && item.servicecategory == cat).map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="services-page card shadow">
                                <Link className=" text-decoration-none text-dark" to={'/serviceDetails/' + item.id}>
                                    <img src={`http://localhost:5000/images/` + item.serviceimage} alt="service image" className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="mb-2">{item.servicename}</h6>
                                    <p>{item.servicedesc}</p>
                                    <p>starts from ${item.serviceprice}</p>
                                </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    );
}

export default ServicesPage;