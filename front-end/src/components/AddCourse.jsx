import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddCourse = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [available, setAvailable] = useState('')
    const [file, setFile] = useState('')
    const [link, setLink] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate('/Dashboard')
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }
    const handleUpload = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('courseName', name);
        formData.append('description', description)
        formData.append('category', category)
        formData.append('availability', available);
        formData.append('file', file);
        formData.append('link', link);

        axios.post('http://localhost:5000/upload', formData)
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
                    <label className="form-label">Course Name</label>
                    <input type="text" name="name" id="" className="form-control" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Course Description</label>
                    <input type="text" name="description" id="" className="form-control" onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Course category</label>
                    <input type="text" name="category" id="" className="form-control" onChange={(e) => {
                        setCategory(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Course Availability</label>
                    <input type="text" name="availability" id="" className="form-control" onChange={(e) => {
                        setAvailable(e.target.value)
                    }} />
                </div>
                <div className="form-div">
                    <label className="form-label">Course Link Name</label>
                    <input type="text" name="link" id="" className="form-control" onChange={(e) => {
                        setLink(e.target.value)
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

export default AddCourse;