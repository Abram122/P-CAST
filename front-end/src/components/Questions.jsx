import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Questions = () => {
    const [question,setQuestion] = useState('') 
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const navigate = useNavigate('Dashboard')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/addquestion", {
            name, email, question
        }).then(res => {
            if (res.data == 'done') {
                alert("Submitted Successfully")
                setQuestion('')
            }
        })
    }
    return (
        <div className="container">
            <h3 className="text-question">Contact with us</h3>
            <hr />
            <div>
                <p className="text2-question">If you have any question please leave it down</p>
                <form >
                    <textarea className="form-control" value={question} cols="60" rows="10" onChange={(e)=>{
                        setQuestion(e.target.value)
                    }}></textarea>
                    <div className="text-end mt-4">
                        <input type="submit" className="btn question-btn" value={"Submit"} onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Questions;