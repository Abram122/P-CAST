import Navbar from "./Navbar"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import WebDevelopment from "./Images/Web Development.jpg"
import DesignApps from "./Images/Design Apps.jpg"
import DesignLogoes from "./Images/Design Logoes.jpg"
import IConPlay from "./Images/Icon_play.png"
import { useEffect, useState } from "react"
import Landing from "./Landing"
import Footer2 from "./Footer2"
import Modal from 'react-modal';
Modal.setAppElement('#root');
const Home = () => {
    const [data, setData] = useState('');
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
    useEffect(()=>{
        getcourses()
    },[])
    return (
        <div className="container-fluid1 home">
            <Navbar />
            <div className="container-fluid">
            <Landing />
            <div className="what-we-do mt-5 container">
                <h1 className="mb-4" id="video">What We Do </h1>
                <hr />
                <div className="row">
                    <div className="col-lg-6 h-100 my-auto text-center">
                        <h5>the all-in-one platform you can   learn, practice, communicate and sell your services.
                            All here in P-CAST.
                            If you want to know more,</h5>
                        <button className="about-btn fs-4 p-3" data-toggle="modal" data-target="#exampleModal" onClick={openModal}>
                            <img src={IConPlay} alt=""  style={{width:"50px",height:"50px"}}/>
                            Watch Video</button>
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            style={customStyles}
                        >
                            <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/4UNOGa3tgqo?si=pXVHDzSN94bVEtyX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            
                        </Modal>
                    </div>
                    <div className="col-lg-6 embed-responsive embed-responsive-21by9 d-lg-block about-video">
                        <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/4UNOGa3tgqo?si=pXVHDzSN94bVEtyX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                </div>
            </div>
            <div className="container m-auto courses-section row justify-content-lg-start justify-content-md-start  justify-content-sm-center gap-3">
                <h1 className="mb-4">Programming Courses</h1>
                <hr />
                {
                    data && data.filter((items)=>items.category == "Programming").slice(0, 3).map((item) => (
                        <div className="card card-courses">
                            <div className="image-container">
                                <div className='sec'>
                                    <img src={`http://localhost:5000/images/` + item.courseImage} alt={"img"} className="card-image" />
                                </div>
                            </div>
                            <div className="card-content card-courses-content">
                                <h2 className="card-title card-courses-title">{item.courseName}</h2>
                                <p className="card-text card-courses-text">{item.description}</p>
                                <Link className="text-decoration-none text-light" to={`${item.link}`}><button className="details-button">Details</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="container m-auto mt-4 courses-section row justify-content-lg-start justify-content-md-start  justify-content-sm-center gap-3">
                <h1 className=" mb-4">Networks Courses</h1>
                <hr />
                {
                    data && data.filter((items)=>items.category == "Network").slice(0, 3).map((item) => (
                        <div className="card card-courses">
                            <div className="image-container">
                                <div className='sec'>
                                    <img src={`http://localhost:5000/images/` + item.courseImage} alt={"img"} className="card-image" />
                                </div>
                            </div>
                            <div className="card-content card-courses-content">
                                <h2 className="card-title card-courses-title">{item.courseName}</h2>
                                <p className="card-text card-courses-text">{item.description}</p>
                                <Link className="text-decoration-none text-light" to={`${item.link}`}><button className="details-button">Details</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div class="our-services container">
                <div class="row text-center mt-2">
                    <h1 class="fw-semibold  text-start mt-2  border-bottom">OUR SERVICES</h1>
                    <div class="col-lg-4 col-md-6 col-sm-8  " >
                    <Link className="text-decoration-none text-dark" to={'/soon'}>
                        <img src={DesignApps} alt="img" class="rounded img-fluid  mb-2" style={{ height: "15rem", marginTop: "20%", width: "22rem" }} />
                        <h3>Desiging Apps</h3>
                        <br />
                    </Link>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8 ">
                    <Link className="text-decoration-none text-dark" to={'/soon'}>
                        <img src={WebDevelopment} alt="img" class="rounded img-fluid  mb-2" style={{ height: "15rem", marginTop: "20%", width: "22rem" }} />
                        <h3>Web Development</h3>
                        <br />
                    </Link>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8 " >
                    <Link className="text-decoration-none text-dark" to={'/soon'}>
                        <img src={DesignLogoes} alt="img" class="rounded img-fluid  mb-2" style={{ height: "15rem", marginTop: "20%", width: "22rem" }} />
                        <h3>Desiging Logos</h3>
                        <br />
                    </Link>
                    </div>
                </div>
            </div>
            </div>
            <Footer2 />
        </div>
    );
}

export default Home;