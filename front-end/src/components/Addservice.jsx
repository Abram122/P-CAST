import { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addservice = () => {
        const [freelancername,setFreelancername] = useState('')
        const [contact,setContact] = useState('')
        const [serviceName,setServiceName] = useState('')
        const [serviceCategory,setServiceCategory] = useState('')
        const [serviceDescription,setServiceDescription] = useState('')
        const [serviceDeliver,setServicerDeliver] = useState('')
        const [servicePrice,setServicePrice] = useState('') 
        const [serviceImage,setServiceImage] = useState('')
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
        const navigate = useNavigate('services')
        const handleFileChange = (event) => {
            setServiceImage(event.target.files[0]);
        }
        const handleUpload = (e) => {
            e.preventDefault()
            const formData = new FormData();
            formData.append('name', freelancername)
            formData.append('contact', contact)
            formData.append('sname', serviceName)
            formData.append('scat', serviceCategory)
            formData.append('sdesc', serviceDescription)
            formData.append('sdeliver', serviceDeliver)
            formData.append('sprice', servicePrice)
            formData.append('file', serviceImage);
            axios.post('http://localhost:5000/uploadservice', formData)
                .then((response) => {
                    console.log(response.data);
                    alert("submitted Successfully")
                    navigate('/services')
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        useEffect(() => {
            getservice()
        }, [])
    return (
        <div className="container">
            <form action="" enctype="multipart/form-data">
                <div className="form-div">
                    <label className="form-label">Freelancer Name</label>
                    <input type="text" name="category" id="" className="form-control" onChange={(e) => {
                        setFreelancername(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Enter Your Email</label>
                    <input type="email" name="category" id="" placeholder="Email can user Use it to connect With You" className="form-control" onChange={(e) => {
                        setContact(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Service Name</label>
                    <input type="text" name="category" id="" className="form-control" onChange={(e) => {
                        setServiceName(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Service Category</label>
                    <select className="form-select" onChange={(e)=>{
                        setServiceCategory(e.target.value)
                    }}>
                        <option selected>Please Select Category</option>
                        {
                            data && data.map((item)=>(
                                <option>{item.category}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-div">
                    <label className="form-label">Service description</label>
                    <input type="text" name="category" id="" className="form-control" onChange={(e) => {
                        setServiceDescription(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Service Deliver in</label>
                    <input type="text" name="category" id="" className="form-control" onChange={(e) => {
                        setServicerDeliver(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Service Price</label>
                    <input type="number" name="category" id="" className="form-control" onChange={(e) => {
                        setServicePrice(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Course Image</label>
                    <input type="file" name="file" id="" className="form-control" onChange={
                        handleFileChange} />
                </div>
                <div className=" text-center">
                    <button className="btn btn-primary w-50 mt-3" onClick={handleUpload}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Addservice;