import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const Comments = () => {
    const { id } = useParams()
    const [data2, setData2] = useState('')
    const [data, setData] = useState('')
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
    useEffect(() => {
        getData()
        getData2()
    }, [])
    return (
        <div>
            <Navbar/>
        <div className="container">
            <p className="text-secondary text-center">This Page is still Under Work</p>
            {
                data && data.filter((items) => items.id == id).map((item)=>(
                    <div>
                        <div className="d-flex justify-content-between">
                            <h3>{item.name}</h3>
                            <h3>{item.title}</h3>
                        </div>
                        <div>
                            <h3>{item.body}</h3>
                        </div>
                    </div>
                ))
            }
            {
                data2 && data2.filter((items) => items.id == id).map((item) => (
                    <div>
                        <div className="mt-3">
                        <h1>{item.name}</h1>
                        <h1>{item.message}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
}

export default Comments;