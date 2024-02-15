import logo from "../Images/logo.png"
import { Link } from "react-router-dom";
const SideNav = () => {
    return (
        <div className="col-lg-3 side-nav">
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
    );
}

export default SideNav;