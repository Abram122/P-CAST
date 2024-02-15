import { useState , useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import logo from './Images/logo.png'
import axios from "axios";
import "./style/community.css"
const Comments = () => {
    const {id} = useParams()
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [catogery, setCatogery] = useState('');
    const [fresh, setFresh] = useState(0);
    const [data, setData] = useState('');
    const [comments, setComments] = useState('')
    const [comment, setComment] = useState('')
    const [filtered, setFiltered] = useState('react')
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

    const fdata = async (sender) => {
        setFiltered(sender)
    }
    useEffect(() => {
        fetchData();
        fetchData2();
        console.log(data)
    } ,[fresh])
    return (
        <div>
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
                {
                    data && data.filter((message)=> message.id == id).map((item) => (
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
                                            }}
                                        />
                                    </div>
                                </div>
                                </div>
                                
                                {

                                    <div className="mt-3">
                                        {comments && comments.filter(comment => comment.id == item.id).map(comment => (
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
                                    </div>

                                }

                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
        </div>
    );
}

export default Comments;