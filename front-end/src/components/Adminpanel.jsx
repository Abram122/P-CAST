import axios from "axios";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const AdminPanel = ()=>{
    const [data,setData] = useState('')
    const [service,setService] = useState('')
    const [counter,setCounter] = useState(0)
    const [status,setStatus] = useState(false)
    const get = ()=>{
        axios.get('http://localhost:5000/getservice').then((res)=>{
            setData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    const approved = (id)=>{
        setCounter(counter+1)
        setStatus(1)
        axios.post(`http://localhost:5000/approve`,{
            status,id
        })
    }
    const navigate = useNavigate('/Admin')
    useEffect(()=>{
        if (!sessionStorage.getItem("adminName")) {
            navigate('/Admin')
        }
        get()
    },[counter])
    return(
      <div>
        <h4>Search By Service name</h4> 
        <input type="text" name="" id="" className="form-control w-50" placeholder="Enter Service Name" onChange={(e)=>{
            setService(e.target.value)
        }}/>
        {
            data && data.filter((freelancername)=> freelancername.freelancername== service ).map((items)=>(
                <table className="table   table-responsive">
            <tr>
                <th>Freelancer Name</th>
                <th>Service Name</th>
                <th>Service Category</th>
                <th>Service deliver in</th>
                <th>Service Price</th>
                <th>Service img</th>
                <th>Status</th>
                <th>Actino</th>
                <th>Details</th>
            </tr>
                    <tr>
                        <td>{items.freelancername}</td>
                        <td>{items.servicename}</td>
                        <td>{items.servicecategory}</td>
                        <td>{items.servicedeliver}</td>
                        <td>{items.serviceprice}</td>
                        <td>{items.serviceimage}</td>
                        <td>{items.status}</td>
                        <td>
                            <button className="btn btn-success" onClick={()=>{
                                approved(items.id)
                            }}> Approve</button>
                        
                        </td>
                        <td>Details</td>
                    </tr>            
        </table>
            ))
        }
        <table className="table  mt-5 table-responsive">
            <tr>
                <th>Freelancer Name</th>
                <th>Service Name</th>
                <th>Service Category</th>
                <th>Service deliver in</th>
                <th>Service Price</th>
                <th>Service img</th>
                <th>Status</th>
                <th>Actino</th>
                <th>Details</th>
            </tr>
            {
                data && data.map((items)=>(
                    <tr>
                        <td>{items.freelancername}</td>
                        <td>{items.servicename}</td>
                        <td>{items.servicecategory}</td>
                        <td>{items.servicedeliver}</td>
                        <td>{items.serviceprice}</td>
                        <td>{items.serviceimage}</td>
                        <td>{items.status}</td>
                        <td>
                            <button className="btn btn-success" onClick={()=>{
                                approved(items.id)
                            }}> Approve</button>
                          
                        </td>
                        <td>Details</td>
                    </tr>      
                ))
            }
        </table>
        
      </div>
    )
  }
  export default AdminPanel;