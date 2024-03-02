import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
Modal.setAppElement('#root');
function Landing() {
    const navigate = useNavigate("/signup")
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
        const getStarted = ()=>{
            navigate('/signup')
        }
    return (
            <div className="container-fluid landing mb-5" style={{height: "85vh"}}>
                <div className="row">
                    <div className="col-md-12 col-lg-6 col-sm-12 col col1" style={{height:"100%"}}>
                        <h3 className="fs-2 fw-bold " style={{marginTop:"25%",marginBottom:"2rem",marginLeft:"2rem"}}>Unlcok Your Potential <br/> With P-CAST <br/> Where Learning Meets Innovation!</h3>
                            <button onClick={getStarted} className="btn btn-primary text-center" style={{marginLeft: "2rem" , backgroundColor: "cornflowerblue",borderColor: "cornflowerblue",borderRadius: "5px", marginRight:"1rem"}}>Get Started</button>
                            <button onClick={openModal} className="btn  text-center" style={{backgroundColor: "none" ,borderColor: "none" , borderRadius: "5px" , color: "cornflowerblue"}}><span>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="cornflowerblue" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                            </svg></span><a href="#video" className="text-decoration-none">Watch video</a></button>
                        </div>
                    </div>
                    <Modal
                            isOpen={isOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            style={customStyles}
                        >
                                                    <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/4UNOGa3tgqo?si=pXVHDzSN94bVEtyX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
                        </Modal>
                </div>
            )
}

export default Landing;