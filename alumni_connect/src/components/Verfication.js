import React,{useState} from "react";
import "./Verification.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
function Verify(){
    const navigate = useNavigate();

    const [userName,setUserName] = useState("")
    const [branch,setBranch] = useState("")
    const [year,setYear] = useState("")
    const [email,setEmail] = useState("")
    const [contact,setContact] = useState("")

    const handleSubmit = async  (e) =>{
        e.preventDefault()
    try{
    const response = await axios.post(`http://localhost:5000/verify`,{
    userName,branch,year,email,contact
    });
    
    if(response.data.success)
    { 
      navigate(`/Registration?userName=${userName}`);
      console.log("Verify Successfully")
    }
    }
    catch(error) {
    console.log("this is error",error)
    }
    }
    return(
     <div className="verification">

    <div className="container">
        <div className="left-container">
            <div className="login-image" >
            </div>
        </div>
        <div className="right-container">
            <div className="login-form">

                <div className="logo">
                </div>
                <h1>Alumni Connect</h1>
                <h2>Verification</h2>
    
                <div className="form">
                    <div className="username margin-10">
                        <label for="username">Username:</label>
                        <input
                        onChange={(e) =>{
                            setUserName(e.target.value)
                        }
                        }
                         type="text" name="username" id="username" placeholder="Enter College PRN" className="full-width" />
                    </div>
                   <div className="align-together">
                      <div className="choice">
                        <label for="">Branch</label>
                        <select
                        onChange={(e) =>{
                            setBranch(e.target.value)
                        }
                        }
                         name="branch" id="branch">
                            <option value="Select Branch">--Select Branch --</option>
                            <option value="CSE">CSE</option>
                            <option value="AIML">AIML</option>
                            <option value="ETC">E&TC</option>
                        </select>
                      </div>
                      <div className="choice">
                        <label for="">Passing Year</label>
                        <select
                         onChange={(e) =>{
                            setYear(e.target.value)
                        }
                        }
                         name="passing-year" id="passing-year">
                            <option value="Select Year">-- Select Year --</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                      </div>
                   </div>
                   <div className="email margin-10">
                        <label for="email">email:</label>
                        <input
                         onChange={(e) =>{
                            setEmail(e.target.value)
                        }
                        }
                         type="text" name="email" id="email" placeholder="Email" className="full-width" />
                    </div>
                    <div className="contact margin-10">
                        <label for="contact">Contact Number:</label>
                        <input 
                         onChange={(e) =>{
                            setContact(e.target.value)
                        }
                        }
                        type="number" name="contact" id="contact" placeholder="contact" className="full-width" />
                    </div>
                    <button
                        onClick={(e) =>{
                            handleSubmit(e)
                        }}
                    className="verify-btn full-width" id="signin"> Verify</button>
                     <p> <span>Note: </span>This website is for DIETMS students only</p>
                </div>
            </div>
        </div>
    </div>
     </div>
    );

}

export default Verify;