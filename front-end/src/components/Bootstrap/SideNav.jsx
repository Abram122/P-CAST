import logo from "../Images/logo.png"
import { Link } from "react-router-dom";
const SideNav = () => {
    return (
        <div>
            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-three-columns" viewBox="0 0 16 16">
                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1zM10 15V1H6v14zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11z" />
            </svg></button>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="d-flex flex-column gap-4">
                        <div>
                            <Link to={'/'}>
                                <img src={logo} alt="" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="  text-start lesson   ">
                            <Link to={'/Bootstrap1'} className="text-decoration-none text-dark"><p>Lesson One</p></Link>
                        </div>
                        <div className="  text-start lesson  ">
                            <Link to={'/Bootstrap2'} className="text-decoration-none text-dark ">Lesson Two</Link>
                        </div>
                        <div className="  text-start lesson  ">
                            <Link to={'/Bootstrap3'} className="text-decoration-none text-dark ">Lesson Three</Link>
                        </div>
                        <div className="  text-start lesson  ">
                            <Link to={'/Bootstrap4'} className="text-decoration-none text-dark ">Lesson Four</Link>
                        </div>
                        <div className="  text-start lesson  ">
                            <Link to={'/Bootstrap5'} className="text-decoration-none text-dark ">Lesson Five</Link>
                        </div>
                        <div className="  text-start lesson  ">
                            <Link to={'/Bootstrap6'} className="text-decoration-none text-dark ">Lesson Six</Link>
                        </div>
                        <div className="  text-start lesson  ">
                            <Link to={'/Bootstrap7'} className="text-decoration-none text-dark ">Lesson Seven</Link>
                        </div>
                        <div className="  text-start lesson  ">
                            <Link to={'/Bootstrap8'} className="text-decoration-none text-dark ">Lesson Eight</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;