import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="bg-light  sticky-top">
        <nav class="navbar  navbar-expand-lg navbar-light container ">
            <div class="container-fluid">
            <Link to={'/'} className=" text-decoration-none">
                <a class="navbar-brand" href="#">P-CAST</a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                        <li class="nav-item">
                            <Link to={'/'} className=" text-decoration-none">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'community'} className=" text-decoration-none">
                            <a class="nav-link" href="#">Community</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'RankingPage'} className=" text-decoration-none">
                            <a class="nav-link" href="#">Ranking Page</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'courses'} className=" text-decoration-none">
                            <a class="nav-link" href="#">All Courses</a>
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