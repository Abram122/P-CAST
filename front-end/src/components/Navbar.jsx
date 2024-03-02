import { Link } from "react-router-dom";
import logo from './Images/logo-dark.jpg'
import user from "./Images/user (1).png"
import email from "./Images/email.png"
const Navbar = () => {
    return (
        <div className="bg-light  sticky-top">
            <nav class="navbar  navbar-expand-lg navbar-light container ">
                <div class="container-fluid">
                    <Link to={'/'} className=" text-decoration-none">
                        <img src={logo} alt="logo" className="img-fluid" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                        <a class="navbar-brand ms-2" href="#" style={{ fontSize: "20px" }}>P-CAST</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end " id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={'/Courses'} className=" text-decoration-none">
                                    <a class="nav-link active" aria-current="page" href="#">All Courses</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/RankingPage'} className=" text-decoration-none">
                                    <a class="nav-link" href="#">Ranking Page</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/community'} className=" text-decoration-none">
                                    <a class="nav-link" href="#">Community</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/services'} className=" text-decoration-none">
                                    <a class="nav-link" href="#">Freelance</a>
                                </Link>
                            </li>
                            <li class="nav-item ms-lg-2 my-auto">
                                <Link to={'/soon'} className=" text-decoration-none">
                                    <img src={email} alt="" />
                                </Link>
                            </li>
                            <li class="nav-item ms-lg-3 my-auto">
                                <Link to={'/profile'} className=" text-decoration-none">
                                    <img src={user} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;