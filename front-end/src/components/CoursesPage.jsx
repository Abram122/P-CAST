import javascript from './Images/javascript.jpg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect ,useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
const CoursesPage = () => {
    const [data, setData] = useState('');
    const getcourses = () => {
        axios.get('http://localhost:5000/getcourses')
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }
    const navigate = useNavigate("/signup")
    useEffect(() => {
        const check = localStorage.getItem("name")
        const check2 = localStorage.getItem("email")
        if (check && check2) {
            getcourses()
        } else {
            navigate('/signup')
        }
    }, [])
    return (
        <div className="container">
            <Navbar />
            <div className="row justify-content-lg-start justify-content-md-start justify-content-center">
                {
                    data && data.map((item) => (
                        <div className="card card-courses">
                            <div className="image-container">
                                <div className='sec'>
                                    <img src={`http://localhost:5000/images/` + item.courseImage} alt={"img"} className="card-image" />
                                </div>
                            </div>
                            <div className="card-content card-courses-content">
                                <h2 className="card-title card-courses-title">{item.courseName}</h2>
                                <p className="card-text card-courses-text">{item.description}</p>
                                <Link className="text-decoration-none text-light" to={`${item.link}1`}><button className="details-button">Details</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CoursesPage;