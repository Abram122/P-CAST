import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddService = () => {
    const [category,setCategory] = useState('')
    const [file,setFile] = useState('')
    const navigate = useNavigate('Dashboard')
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }
    const handleUpload = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('category', category)
        formData.append('file', file);
        axios.post('http://localhost:5000/uploadcategory', formData)
            .then((response) => {
                console.log(response.data);
                navigate('/Dashboard')
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(()=>{
        if (!sessionStorage.getItem("adminName")) {
            navigate('/Admin')
        }
    },[])
    return (
        <div className="container">
            <form action="" enctype="multipart/form-data">
                <div className="form-div">
                    <label className="form-label">Service category</label>
                    <input type="text" name="category" id="" className="form-control" onChange={(e) => {
                        setCategory(e.target.value)
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

export default AddService;