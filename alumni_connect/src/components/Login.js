import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../auth.js";

import axios from 'axios'
import { useNavigate} from "react-router-dom/dist/umd/react-router-dom.development";
function Login(){
  const {handleLogStatusChange, changeUserData} = useAuth()
  const navigate = useNavigate();

  const [userName,setuserName] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = async  (e) =>{
    e.preventDefault()
try{
const response = await axios.post(`http://localhost:5000/login`,{
userName:userName,
password
});
console.log(response.data)
if(response.data.success)
{
  changeUserData(response.data.data)
  handleLogStatusChange()
  navigate(`/`);
  console.log("successfully logged In")
}
}
catch(error) {
console.log("this is error",error)
}
}
  return (
    <div className="login-page">

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
                <h2>Log in</h2>
    
                <div className="form">
                    <div className="username margin-10">
                        <label for="username">Username:</label>
                        <input 
                        onChange={(e) =>{
                            setuserName(e.target.value)
                        }}
                        type="text" name="username" id="username" placeholder="College PRN" className="full-width" />
                    </div>
                    <div className="password margin-10">
                        <label for="password">Password:</label>
                        <input 
                        onChange={(e) =>{
                          setPassword(e.target.value)
                        }}
                        type="password" name="password" id="password" placeholder="Enter Password" className="full-width " />
                    </div>

                    <button
                    onClick={(e) =>{
                      handleSubmit(e)
                    }}
                     className="login-btn full-width" id="signin">Sign In </button>
                     <p>Haven't register yet. Register here!!</p>
                    <button className="btn full-width"><Link to="/Verification">Register Now </Link> </button>
                </div>
            </div>
        </div>
    </div>
        
    </div>

  );
}
export default Login;