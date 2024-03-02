import { useState , useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const Profile = () => {
    const [data,setData] = useState('')
    const [nationalId,setNationalId] = useState('') 
    const [profileimg,setProfileImg] = useState('') 
    const check2 =localStorage.getItem("email")
    const handleFileChange = (event) => {
        setProfileImg(event.target.files[0]);
    }
    const handleUpload = (id,e) => {
        // e.preventDefault()
        const formData = new FormData();
        formData.append('id', id)
        formData.append('nationalid', nationalId)
        formData.append('file', profileimg);
        axios.post('http://localhost:5000/uploaduserdata', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const fetchData = async () => {
        const response = await axios
            .get("http://localhost:5000/getuser")
            .catch((err) => {
                console.log("Err", err);
            })
        let products = response.data;
        setData(products);
            console.log(data)
    }    
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            <Navbar/>
        <div className="container">
            <div class="container-pro  rounded bg-white mt-5 mb-5">
        <div class="row">
            <div class="col-md-4 border-right">
                {
                    data && data.filter((item)=>item.email == check2).map(item=>(
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={`http://localhost:5000/images/` + item.profileimg}/>
                        <span class="font-weight-bold">NAME</span><span class="text-black-50">Rank:</span><span> </span></div>
                    ))
                }
            </div>
            <div class="col-md-8 border-right ">
                    <div class="d-flex justify-content-between align-items-center mb-3 ">
                        <h3 >User Profile </h3>
                    </div>
                {
                    data && data.filter((item)=>item.email == check2).map((items)=>(
                        <div>
                        <div class="row mt-2">
                            <div class="col-md-12"><label class="labels">Full Name</label>
                            <input type="text" readOnly  class="form-control" placeholder="Enter your full name" style={{borderColor: "cornflower blue"}} value={items.user_name}/></div>
                        </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Phone Number</label>
                        <input type="text" readOnly class="form-control" placeholder="Enter your phone number" style={{borderColor: "cornflower blue"}} value={items.phone}/></div>
                        <div class="col-md-12"><label class="labels">Email</label>
                        <input type="email" readOnly class="form-control" placeholder="Enter your email" style={{borderColor: "cornflower blue"}} value={items.email}/></div>
                        <div class="col-md-12"><label class="labels">National ID</label><input type="text" class="form-control" placeholder="Enter your National ID" style={{borderColor: "cornflower blue"}} value={items.nationalid} onChange={(e)=>{
                            setNationalId(e.target.value)
                        }}/></div>
                    </div>
                <div className="form-group mt-3">
                    <label>Upload Your Photo</label>
                    <input type="file" name="" id="" className="form-control"   onChange={
                        handleFileChange}/>
                </div>
                    <div class="tex">
                        <p className="text-danger mt-3">Note this data is aptionally if you donot upload it now (Image and Nationa Id)</p>
                    <div class="mt-2 text-center">
                        <input type="submit" className="btn btn-success" value={"Apply Changes"} onClick={()=>{
                            handleUpload(items.id)
                        }} />
                    </div>
                </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
    </div>
    </div>
    );
}

export default Profile;