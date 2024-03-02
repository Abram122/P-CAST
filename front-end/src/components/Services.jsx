import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { useEffect,useState } from 'react';
const Services = () => {
    const [data, setData] = useState('');
    const getservice = () => {
        axios.get('http://localhost:5000/getservices')
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getservice()
    }, [])
    return (
        <div>
            <Navbar/>
        <div className="container">
            <h1 className="text-center" style={{color:"#052659"}}>Your Gateway to Exceptional Services!</h1>
            <div className="row main-services mt-5 justify-content-lg-start justify-content-md-start justify-content-sm-center ">
                {
                    data && data.map(item=>(
                <div className="services col-lg-3 col-md-6 col-sm-9">
            <Link to={'/services/'+item.category}>
                    <div className='over-text'>
                        <h2 className='text-center'>{item.category}</h2>
                    </div>
                    <div className='over-text2'>
                        <h2 className=''>Explore Now</h2>
                    </div>
                    <img src={`http://localhost:5000/images/` + item.img} alt="" className='img-fluid'/>
            </Link>
                </div>
                    ))
                }

            </div>
        </div>
        </div>
    );
}

export default Services;