import { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const QuestionsManagement = () => {
    const [data,setData] = useState('')
    const [counter ,setCounter] = useState(0)
    const navigate = useNavigate("/Dashboard")
    const getdata = ()=>{
        axios.get('http://localhost:5000/getquestions').then((res)=>{
            setData(res.data)
            console.log(res.data)
        })}
        useEffect(()=>{
            if (!sessionStorage.getItem("adminName")) {
                navigate('/Admin')
            }
            getdata()
        },[counter])
        const makeasdone = (status,id)=>{
            axios.post('http://localhost:5000/makeasdone',{
                status,id
            }).then((res)=>{
                console.log(res.data)
                setCounter(counter+1)
            }).catch((err)=>{
                console.log(err)
            })
        }
    return (
        <div className="container-fluid">
            <table className=" table table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Question</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.filter((item)=>item.done == 0).map((item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.question}</td>
                                <td>
                                    <button className="btn btn-success" onClick={()=>{
                                        makeasdone(((item.done)+1),item.id)
                                    }}>Make as Done</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default QuestionsManagement;