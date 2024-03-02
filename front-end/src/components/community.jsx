import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cources from "./community/cources";
import person from "./Images/person2.jpg";
import person2 from "./Images/person.png";
import person3 from "./Images/person3.jpg";
import Modal from 'react-modal';
Modal.setAppElement('#root');
function Sidebar({ isOpen }) {
  return (
    <div id="sidebar" className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <nav className="navigation">
          <Link to={'/'} className="nav-link">
            <span className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="grey" class="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </span>
            Home
          </Link>
          <a href="#" className="nav-link">
            <span className="nav-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chat-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
              </svg>
            </span>
            Your threads
          </a>
        </nav>
        <Cources />
        <Link to={'/Courses'} className="text-decoration-none">
        <button className="add-course-btn">
          <span className="add-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </span>
          Join a New Course
        </button>
        </Link>
      </div>
    </div>
  );
}

function SidebarToggle({ isOpen, toggle }) {
  return (
    <div id="sidebar-toggle" className="sidebar-toggle" onClick={toggle}>
      <span>{isOpen ? "✖" : "☰"}</span>
    </div>
  );
}

function PostCreationForm() {
  const [title, setTile] = useState('')
  const [body, setBody] = useState('')
  const name = localStorage.getItem("name")
  const [catogery, setCatogery] = useState('')
  const handleSubmit = () => {
    axios.post("http://localhost:5000/addmessage", {
      title, body, name, catogery
    }).then((res) => {
      alert("added")
      closeModal()
    }).catch((err) => {
      alert("not added")
    })
  }
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

  return (
    <div className="comment">
      <div className="input-container">
        <textarea
          type="text"
          className="form-control"
          placeholder="Add a new thread"
          readOnly
        ></textarea>
        <button className="btn btn-primary ms-2" onClick={openModal}>
          <span className="send-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </span>
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <h2 style={{ marginBottom: '10px' }}>Add A New Thread</h2>
          <input type="text" placeholder="Title" className=" form-control mt-3" onChange={(e) => { setTile(e.target.value) }} />
          <input type="text" placeholder="Question" className=" form-control mt-3" onChange={(e) => { setBody(e.target.value) }} />
          <select className="form-select mt-3" onChange={(e) => {
            setCatogery(e.target.value)
          }}>
            <option selected>Please Select</option>
            <option>Bootstrap</option>
            <option>React</option>
            <option>Node Js</option>
            <option>Other</option>
          </select>
          <div className="mt-3 d-flex justify-content-between">
            <button onClick={closeModal} className="btn btn-danger">Cancel</button>
            <button onClick={handleSubmit} className="btn btn-success">Add</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

function Community() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitted:", inputValue);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [data, setData] = useState('')
  const [data2, setData2] = useState('')
  const getData = () => {
    axios.get("http://localhost:5000/getmessage").then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  const getData2 = () => {
    axios.get("http://localhost:5000/getcomment").then((res) => {
      setData2(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  const [comment, setComment] = useState('')
  const name = localStorage.getItem("name")
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
      padding: '20px',
      width: "70vh",
      maxHeight: "400px",
      overflowY: "auto"
    }
  };
  const Navigate = useNavigate("/comments/:id")
  const Comments = (id) => {
    Navigate(`/comments/${id}`)
  }
  const handleSubmit2 = (id) => {
    axios.post("http://localhost:5000/addcomment", {
      name, comment, id
    }).then((res) => {
      alert("added")
      closeModal()
    }).catch((err) => {
      alert("not added")
    })
  }
  const navigate = useNavigate("/signup")
  useEffect(() => {
    const check = localStorage.getItem("name")
    const check2 = localStorage.getItem("email")
    if (check && check2) {
    } else {
      navigate('/signup')
    }
    getData()
    getData2()
  }, [])
  return (
    <body className="body">
      <Sidebar isOpen={isSidebarOpen} />
      <SidebarToggle isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <div
        className={`container-fluid rest ${isSidebarOpen ? "sidebar-open" : ""
          }`}
      >
        <PostCreationForm />
        {
          data && data.map((item) => (

            <div className="chat mt-3">
              <div className="container">
                <div className="row mt-3">
                  <h1>{item.title}</h1>
                </div>
                <div className="row">
                  <div className=" name-container">
                    <span>
                      <img src={`http://localhost:5000/images/${item.personimg}`} alt="person" />
                    </span>
                    <div className="info">
                      <p className="name">{item.name} </p>
                      <p className="time">3d ago</p>
                    </div>
                    <div className="filter">{item.catogery}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="answer mt-1">
                    {item.body}
                  </div>
                </div>
                <div className="row">
                  <div className="response">
                    <span className="save-icon">
                      <i className="fi fi-sr-bookmark"></i>
                    </span>
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={closeModal}
                      contentLabel="Example Modal"
                      style={customStyles}
                    >
                      <h2 style={{ marginBottom: '10px' }}>Add A New Thread</h2>
                      <input type="text" placeholder="Title" className=" form-control mt-3" onChange={(e) => { setComment(e.target.value) }} />
                      <div className="mt-3 d-flex justify-content-between">
                        <button onClick={closeModal} className="btn btn-danger">Cancel</button>
                        <button onClick={() => {
                          handleSubmit2(item.id)
                        }} className="btn btn-success">Add</button>
                      </div>
                    </Modal>
                    <button
                      type="button"
                      className="btn text-input"
                      onClick={openModal}
                    >
                      <span className="icon-inside-input">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chat-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                        </svg>
                      </span>
                      Add Response
                    </button>
                    <div className="collapse" id="collapseExample">
                      <div className="input-container">
                        <textarea
                          type="text"
                          className="form-control"
                          id="talk"
                          placeholder="Add a new thread"
                          value={inputValue}
                          readOnly
                          onChange={handleChange}
                        ></textarea>
                        <button className="publish" onClick={handleSubmit}>
                          <span className="send-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="currentColor"
                              className="bi bi-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="image-stack-container" onClick={() => {
                      Comments(item.id)
                    }}>
                      <img src={person} alt="First" className="image first-image" />
                      <img
                        src={person2}
                        alt="Second"
                        className="image second-image"
                      />
                      <img
                        src={person3}
                        alt="Third"
                        className="image third-image"
                      />
                      <div className="plus-box">
                        <span className="plus-text">+11</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </body>
  );
}

export default Community;
