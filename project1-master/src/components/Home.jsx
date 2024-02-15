import Navbar from "./Navbar"
import reactimg from "./Images/react.jpg"
import python from "./Images/python.jpg"
import landing from "./Images/landing img.png"
import laravel from "./Images/laravel.jpg"
import nodejs from "./Images/nodejs.jpg"
import javascript from "./Images/javascript.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid'
import './style/home.css';
import { useEffect, useState } from "react"
import Footer from "./Footer"
const Home = () => {
    const navigate = useNavigate("/signup")
    useEffect(()=>{
        const check =localStorage.getItem("name")
        const check2 =localStorage.getItem("email")
        if(check){
        }else{
            navigate('/signup')
        }
    }
    ,[])
    return (
        <div className="container-fluid1">
            <Navbar/>
            <div className="landing container row gap-5 justify-content-center">
                <div className="img-landing col-lg-5">
                    <img src={landing} alt="landing img" className="img-fluid" />
                </div>
                <div className="content-landing col-lg-6 d-flex justify-content-center align-items-center">
                    <h1 className="text-center">IMPROVE YOUR SKILLS
                        WITH P-CAST
                        BE READY FOR WORK
                    </h1>
                </div>
            </div>
            <div className="what-we-do mt-4 container">
                <h1 className="mb-4">What We Do </h1>
                <h5 className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Officiis, nulla beatae. Ratione enim rem reiciendis
                    et at expedita consequatur sunt vel, suscipit quia aliquam beatae eveniet,
                    sapiente temporibus obcaecati natus?</h5>
            </div>
            <div className="container courses-section">
                <h1 className="fw-light mb-4">Courses</h1>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="card course border border-0" >
                            <Link>
                            <img className="card-img-top" src={reactimg} alt="Bootstrap" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">React</h5>
                                <p className="card-text">Some quick example text to build on the card</p>
                                <div className="text-start">
                                <Link>
                                    <a href="#" className=" text-dark">Launch Course</a>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card course border border-0" >
                        <Link>
                            <img className="card-img-top" src={python} alt="Bootstrap" />
                        </Link>
                            <div className="card-body">
                                <h5 className="card-title">Python</h5>
                                <p className="card-text">Some quick example text to build on the card</p>
                                <div className="text-start">
                                <Link>
                                    <a href="#" className=" text-dark">Launch Course</a>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card course border border-0" >
                        <Link>
                            <img className="card-img-top" src={javascript} alt="Bootstrap" />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card course border border-0" >
                        <Link>
                            <img className="card-img-top" src={laravel} alt="Bootstrap" />
                        </Link>
                            <div className="card-body">
                                <h5 className="card-title">PHP With Laravel</h5>
                                <p className="card-text">Some quick example text to build on the card</p>
                                <div className="text-start">
                                <Link>    
                                    <a href="#" className=" text-dark">Launch Course</a>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card course border border-0" >
                        <Link>
                            <img className="card-img-top" src={nodejs} alt="Bootstrap" />
                        </Link>
                            <div className="card-body">
                                <h5 className="card-title">Nodejs</h5>
                                <p className="card-text">Some quick example text to build on the card</p>
                                <div className="text-start">
                                <Link>
                                    <a href="#" className=" text-dark">Launch Course</a>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className="services container mt-4">
                <h1 className="mb-4">OUR SERVICES</h1>
                <div className="row gap-3 justify-content-center">
                    <div className="col-lg-3">
                        <div className="card service border border-0" >
                            <img className="card-img-top" src={nodejs} alt="Bootstrap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card</p>
                                <div className="text-start">
                                    <Link to={'service'} className="text-decoration-none">
                                    <a href="#" className=" text-dark">Get Service</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card service border border-0" >
                            <img className="card-img-top" src={nodejs} alt="Bootstrap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card</p>
                                <div className="text-start">
                                <Link to={'service'} className="text-decoration-none">
                                    <a href="#" className=" text-dark">Get Service</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card service border border-0" >
                            <img className="card-img-top" src={nodejs} alt="Bootstrap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card</p>
                                <div className="text-start">
                                <Link to={'service'} className="text-decoration-none">
                                    <a href="#" className=" text-dark">Get Service</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;