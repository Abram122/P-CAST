import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import img from "./Images/2.jpg"
import Navbar from "./Navbar";
import Modal from 'react-modal';
Modal.setAppElement('#root');
const ServiceDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const getdata = () => {
        axios.get('http://localhost:5000/getservice').then((res) => {
            setData(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    // modal 
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
            border: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            padding: '20px'
        }
    };
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                {
                    data && data.filter((item) => item.id == id).map((item) => (
                        <div>
                            <h2 className="card-details-text text-center">{item.servicename}</h2>
                            <div className="row">
                                <div className="col-lg-7 shadow">

                                    <div className="card card-details">
                                        <img src={`http://localhost:5000/images/` + item.serviceimage} alt="service img" />
                                        <div className="card-body">
                                            <p className="card-details-text">{item.servicedesc}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-5 shadow services-details">
                                    <h4 className="card-details-text">service card</h4>
                                    <hr />
                                    <div className="d-flex justify-content-between ps-3 pe-3">
                                        <p className="card-details-text">Average response speed is an</p>
                                        <p className="card-details-text">Hour</p>
                                    </div>
                                    <div className="d-flex justify-content-between ps-3 pe-3">
                                        <p className="card-details-text">Buyers</p>
                                        <p className="card-details-text">7</p>
                                    </div>
                                    <div className="d-flex justify-content-between ps-3 pe-3">
                                        <p className="card-details-text">Requests in progress</p>
                                        <p className="card-details-text">2</p>
                                    </div>
                                    <div className="d-flex justify-content-between ps-3 pe-3">
                                        <p className="card-details-text">Service price starts from</p>
                                        <p className="card-details-text">${item.serviceprice}</p>
                                    </div>
                                    <div className="d-flex justify-content-between ps-3 pe-3">
                                        <p className="card-details-text">Delivery time is</p>
                                        <p className="card-details-text">{item.servicedeliver}</p>
                                    </div>
                                    <h4 className="card-details-text">Service Owner</h4>
                                    <hr />
                                    <div className="d-flex w-50 justify-content-between ps-3">
                                        {/* <div className="owner-img">
                            <img src={img} alt="owner image" />
                        </div> */}
                                        <Modal
                                            isOpen={isOpen}
                                            onRequestClose={closeModal}
                                            contentLabel="Example Modal"
                                            style={customStyles}
                                        >
                                            <h1>Send To owner with this email :</h1>
                                            <h4 className="text-center">{item.contact}</h4>
                                        </Modal>
                                        <div className="my-auto">
                                            <h6 className="card-details-text">{item.freelancername}</h6>
                                        </div>
                                    </div>
                                    <div className="contact-with-owner text-end pe-4">
                                        <button className="btn btn-owner" onClick={openModal}>Contact With Owner</button>
                                    </div>
                                </div>
                                <div className="col-lg-7 shadow mt-3">
                                    <h4 className="card-details-text">Buy This Service</h4>
                                    <div className="contact-with-owner text-center">
                                        <button className="btn btn-primary" onClick={openModal}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-cart2" viewBox="0 0 20  16">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                            </svg>
                                            Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ServiceDetails;