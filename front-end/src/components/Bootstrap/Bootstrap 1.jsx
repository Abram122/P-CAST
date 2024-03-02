import assimage from "../Images/ass.jpeg"
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import Questions from '../Questions'
const Courses = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <SideNav/>
                <center>
                <div className="col-lg-9">
                    <h2 className="fw-light mt-3 ms-2  text-center text-lg-start"> Bootstrap 5 Lesson 1 </h2>
                    <center>
                    <iframe className="mt-5" width="660" height="315" src="https://www.youtube.com/embed/2mmVIvWmhFo?si=Hd_yUTk4alpOu4WS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        <p>
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
                            <Link to={'/soon'}>
                            <img src={assimage} alt="" className="img-fluid" />
                            </Link>
                        </div>
                        
                        <div className="nav-buttons d-flex justify-content-around w-50 mt-4">
                            <Link className="btn btn-dark" to={'/bootstrap2'}>Next Lesson</Link>
                        </div>
                    </center>
                    <Questions/>
                </div>
                </center>
            </div>
        </div>
    );
}

export default Courses;