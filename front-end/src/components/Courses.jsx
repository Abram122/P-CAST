import assimage from "./Images/ass.jpeg"
import logo from "./Images/logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Courses = () => {
    const navigate = useNavigate("/signup")
    useEffect(() => {
        const check = localStorage.getItem("name")
        const check2 = localStorage.getItem("email")
        if (check && check2) {
        } else {
            navigate('/signup')
        }
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 side-nav">
                    <div className="d-flex flex-column gap-4">
                        <div>
                            <img src={logo} alt="" className="img-fluid" />
                        </div>
                        <div className="  text-center lesson   ">
                            <Link className="text-decoration-none text-dark ">Lesson One</Link>
                        </div>
                        <div className="  text-center lesson  ">
                            <Link className="text-decoration-none text-dark ">Lesson One</Link>
                        </div>
                        <div className="  text-center lesson  ">
                            <Link className="text-decoration-none text-dark ">Lesson One</Link>
                        </div>
                        <div className="  text-center lesson  ">
                            <Link className="text-decoration-none text-dark ">Lesson One</Link>
                        </div>
                        <div className="  text-center lesson  ">
                            <Link className="text-decoration-none text-dark ">Lesson One</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <h2 className="fw-light mt-3 ms-2  text-start"> Course Title here with lesson no. </h2>
                    <center>
                        <iframe width="660" className="mt-5" height="315" src="https://www.youtube.com/embed/kKBSRIGX5mg?si=_PHH9E-8Kg1nTFr-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p>
                            <a class="btn btn-light mt-4" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Sub Title Click Here
                            </a>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card w-50 card-body border border-light text-start  ">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                        <h4 className="text-start fw-light">
                            The Assignment For Lesson no.
                        </h4>
                        <div>
                            <img src={assimage} alt="" className="img-fluid" />
                        </div>
                        <div className="nav-buttons d-flex justify-content-around w-50 mt-4">
                            <Link className="btn btn-dark">Previos Lesson</Link>
                            <Link className="btn btn-dark">Next Lesson</Link>
                        </div>
                    </center>

                </div>
            </div>
        </div>
    );
}

export default Courses;