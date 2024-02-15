import facebook from "./Images/facebook.png"
import twitter from "./Images/twitter.png"
import linkedin from "./Images/linkedin.png"
import tiktok from "./Images/tiktok.png"
import instagram from "./Images/instagram.png"
const Footer = () => {
    return (
        <div className="">

                <footer
                    className="text-center text-lg-start text-white mt-4"
                    style={{backgroundColor: "#1c2331"}}
                >
                    <section
                        className="d-flex justify-content-between p-4"
                        style={{backgroundColor: "#6351ce"}}
                    >
                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div className="icons">
                            <a href="">
                                <img src={facebook} alt="" className="img-icons" />
                            </a>
                            <a href="">
                                <img src={instagram} alt="" className="img-icons" />
                            </a>
                            <a href="">
                                <img src={twitter} alt="" className="img-icons" />
                            </a>
                            <a href="">
                                <img src={tiktok} alt="" className="img-icons" />
                            </a>
                            <a href="">
                                <img src={linkedin} alt="" className="img-icons" />
                            </a>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">P-CAST</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                    />
                                    <p>
                                        E-Learing Company Aims Improve Education Level
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Services</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                    />
                                    <p>
                                        <a href="#!" className="text-white text-decoration-none">Courses</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white text-decoration-none">Cmmunity</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white text-decoration-none">MentorShip</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white text-decoration-none">Free Lance Market </a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                    />
                                    <p>
                                        <a href="#!" className="text-white text-decoration-none">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white text-decoration-none">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white text-decoration-none">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white text-decoration-none">Help</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                                    />
                                    <p><i className="fas fa-home mr-3"></i> Egypt Cairo</p>
                                    <p><i className="fas fa-envelope mr-3"></i> P-CASTexample.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 20 127 096 3278</p>
                                    <p><i className="fas fa-print mr-3"></i> + 20 101 361 6610</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                    >
                        © 2024 Copyright
                    </div>
                </footer>

            </div>
    );
}

export default Footer;