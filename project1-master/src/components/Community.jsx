import "./style/community.css"
import { useState, useEffect } from "react";
import logo from './Images/logo.png'
import axios from "axios";
import { Link } from "react-router-dom";
const Community = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [catogery, setCatogery] = useState('');
    const [fresh, setFresh] = useState(0);
    const [data, setData] = useState('');
    const [comments, setComments] = useState('')
    const [id, setID] = useState(0)
    const [comment, setComment] = useState('')
    const [filtered, setFiltered] = useState('react')
    const send12 = (e) => {
        e.preventDefault()
        const name = localStorage.getItem('name')
        console.log(inputValue, name)
        axios.post("http://localhost:5000/addmessage", {
            inputValue, name, catogery
        }).then(res => {
            if (res.data = 'done') {
            }
            setCatogery('')
            setInputValue('')
            setFresh(fresh + 1)
        }).catch(err => {
            console.log(err)
        })
    }
    const send120 = (e) => {
        e.preventDefault()
        const name = localStorage.getItem('name')
        console.log(comment, name, id)
        axios.post("http://localhost:5000/addcomment", {
            comment, name, id
        }).then(res => {
            if (res.data == 'done') {
                
            }
            setComment('')
            setFresh(fresh + 1)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleBackspace = () => {
        if (inputValue.trim() === '') {
            return;
        }

        const lastChar = inputValue[inputValue.length - 1];

        if (lastChar.trim() === '') {
            setInputValue(inputValue.slice(0, -2));
        } else {
            setInputValue(inputValue.slice(0, -1));
        }



    };

    const fetchData = async () => {
        const response = await axios
            .get("http://localhost:5000/getmessage")
            .catch((err) => {
                console.log("Err", err);
            })
        let products = response.data;
        setData(products);
            console.log(data)
    }
    const fetchData2 = async () => {
        const response = await axios
            .get("http://localhost:5000/getcomment")
            .catch((err) => {
                console.log("Err", err);
            })
        let products2 = response.data;
        setComments(products2);
        
    }
    
    const fdata = async (sender) => {
        setFiltered(sender)
    }
    useEffect(() => {
        fetchData();
        fetchData2();
        console.log(data)
    }, [fresh])
    

    return (
        <div className="community12">
            <div id="sidebar" className="sidebar" style={{ transform: sidebarVisible ? 'translateX(0px)' : 'translateX(-100%)' }}>
                <div className="sidebar-content">
                    <div className="logo-container">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="logo"
                        />
                    </div>
                    <nav className="navigation">
                        <Link to={'/'}>
                        <a href="#" className="nav-link text-decoration-none">Home</a>
                        </Link>
                        <a href="#" className="nav-link">Your Threads</a>
                        <a href="#" className="nav-link">Your Friends</a>
                    </nav>
                    <div className="courses-list">
                        <div className="course-item">
                            <span className="course-color-indicator one"></span>
                            <p onClick={()=>{
                                fdata('bootstrap')
                            }} className="course-name">Bootstrap</p>
                        </div>
                        <div className="course-item">
                            <span className="course-color-indicator two"></span>
                            <p onClick={()=>{
                                fdata('nodejs')
                            }} className="course-name">Node js</p>
                        </div>
                        <div className="course-item">
                            <span className="course-color-indicator three"></span>
                            <p onClick={()=>{
                                fdata('react')
                            }} className="course-name">React js</p>
                        </div>
                    </div>

                    <button className="add-course-btn">
                        <span className="add-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-plus-circle"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                                />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                                />
                            </svg>
                        </span>
                        <Link to={'/'} className="text-decoration-none">
                        Join a New Course
                        </Link>
                    </button>
                </div>
            </div>

            <div id="sidebar-toggle" className="sidebar-toggle" onClick={toggleSidebar}>
                <span>&#9776;</span>
            </div>

            <div className="container-fluid rest">
                <div className="comment mt-4">
                    <div className="text-center">
                        <h4>Talk With Your Community</h4>
                    </div>
                    <h4 className="mb-3">Create Post</h4>
                    <div className="input-container w-75">
                        <label for="talk">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-chat-text"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                                />
                                <path
                                    d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
                                />
                            </svg>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="talk"
                            placeholder="Say Something ..."
                            value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                        ></input>
                        <button id="backspace-button" type="button" onMouseDown={handleBackspace}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="25"
                                fill="currentColor"
                                className="bi bi-backspace"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"
                                />
                                <path
                                    d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="text-end d-flex justify-content-around align-items-center ">
                        <select className="form-select w-25" onChange={(e) => setCatogery(e.target.value)} aria-label="Default select example">
                            <option selected>Please Select Catogery</option>
                            <option value="bootstrap">Bootstrap</option>
                            <option value="react">React</option>
                            <option value="nodejs">Nodejs</option>
                        </select>
                        <button onClick={send12} className="puplish btn btn-primary">
                            <span className="send-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-send"
                                    viewBox="0 0 16 16"

                                >
                                    <path
                                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
                                    /></svg></span
                            >Publish
                        </button>
                    </div>
                </div>
                {
                    // setFiltered(comments.filter(comment => comment.id == item.id))                 
                    data && data.map((item) => (
                        <div className="chat mt-3">
                            <div className="container">
                                <div className="row">
                                </div>
                                <div className="name-container d-flex justify-content-between ">
                                    <div className="d-flex gap-2 ">
                                        <span className="bg-dark text-light">{item.name[0]}</span>
                                        <p  className="name">{item.name}</p>
                                    </div>
                                    <div>
                                        <p  className="name">{item.catogery}</p>
                                    </div>
                                </div>
                                <div>
                                    {/* <p  className="name">{item.time.slice(0, 10)}</p> */}
                                </div>
                                <div    className="row">
                                    <div    className="answer mt-3">
                                        {item.message}
                                    </div>
                                </div>
                                <div    className="row">
                                    <div    className="response w-75 mt-4">
                                        <span   className="send-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-send"
                                                viewBox="0 0 16 16"
                                                onClick={send120}
                                            >
                                                <path
                                                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
                                                /></svg></span
                                        >
                                        <input
                                            type="text"
                                            placeholder="Add Response ...."
                                            className="form-control"
                                            value={comment}
                                            onChange={(e) => {
                                                setComment(e.target.value)
                                                setID(item.id)

                                            }}
                                        />
                                    </div>
                                </div>
                                {

                                    <div className="mt-3">
                                        {comments && comments.filter(comment => comment.id == item.id).slice(0,2).map(comment => (
                                            <div>
                                                <div class="row name-container">
                                                    <span class="bg-dark text-light">{item.name[0]}</span>
                                                    <p class="name">{item.name}</p>
                                                </div>
                                                <p className="mt-3">
                                                    {/* {comment.time.slice(0, 10)} */}
                                                </p>
                                                <p className="mt-3">
                                                    {comment.name}
                                                </p>
                                            </div>
                                        ))}
                                        {
                                            comments && 
                                                <p>
                                                    <Link to={`/comments/${item.id}`}>See All Comments</Link>
                                                </p>
                                        }
                                    </div>

                                }

                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    );
}

export default Community;