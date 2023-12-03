import React, { useState } from "react";
import "./Registration.css";
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import { useAuth } from "../auth.js";
function useQuery(){
  return new URLSearchParams(useLocation().search)
}
function Registration() {
  const {handleLogStatusChange, changeUserData} = useAuth()
  const navigate = useNavigate();
  const query = useQuery()
  const userName= query.get("userName")

  const [desg,setDesg] = useState("")
  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName] = useState("")
  const [domain,setDomain] = useState("")
  const [course,setCourse] = useState("")
  const [gender,setGender] = useState("")
  const [dob,setDob] = useState("")
  const [password,setPassword] = useState("")
  const [cPassword,setCPassword] = useState("")

  
const handleSubmit = async  (e) =>{
    e.preventDefault()
try{
  if(cPassword !== password) return
const response = await axios.post(`http://localhost:5000/signup`,{
userName:userName,
designation: desg,
firstName,
lastName,
domain,
course,
gender,
dob,
password
});
console.log(response.data)
if(response.data.success)
{
  changeUserData({
    userName:userName,
designation: desg,
firstName,
lastName,
domain,
course,
gender,
dob,
  })
  handleLogStatusChange()
  navigate(`/`);
  console.log("successfully logged In")
}
}
catch(error) {
console.log("this is error",error)
}
}


  return(
    <div className="registration">
    <div class="container">
        <div class="left-container">
            <div class="login-image" >
            </div>
        </div>
        <div class="right-container">
            <div class="login-form">

                <div class="logo">
                </div>
                <h1>Alumni Connect</h1>
                <h2>Registration</h2>
    
                <div class="form">
                    <div class="margin-10 ">
                        <label for="designation">Designation:<sup>*</sup></label>
                        <input 
                        onChange={(e) =>{
                          setDesg(e.target.value)
                        }}
                        type="text" id="designation" name="designation" className="designation" placeholder="Enter designation" />
                    </div>
                   <div class="align-together">
                      <div class="input1">
                        <label for="">Firstname<sup>*</sup></label>
                        <input
                         onChange={(e) =>{
                         setFirstName(e.target.value)
                        }}
                         type="text" id="firstname" placeholder="Enter Name"/>
                      </div>
                      <div class="input2">
                        <label for="">Lastname<sup>*</sup></label>
                        <input 
                        onChange={(e) =>{
                          setLastName(e.target.value)
                        }}
                        type="text" id="lastname" placeholder="Enter Lastname"/>
                      </div>
                   </div>
                 <div class="align-together">
                    <div>
                      <label for="">Domain<sup>*</sup></label>
                      <input
                       onChange={(e) =>{
                        setDomain(e.target.value)
                      }}
                       type="text" id="firstname" placeholder="E.g software developer"/>
                    </div>
                    <div>
                      <label for="">Course<sup>*</sup></label>
                      <select
                       onChange={(e) =>{
                        setCourse(e.target.value)
                      }}
                      name="course" id="course" >
                        <option value="Select Course">-- Select Course --</option>
                        <option value="BTECH">B.TECH</option>
                        <option value="MTECH">M.TECH</option>
                      </select>
                    </div>
                 </div>
                 <div class="align-together">
                    <div>
                      <label for="">Gender<sup>*</sup></label>
                      <select 
                       onChange={(e) =>{
                        setGender(e.target.value)
                      }}
                      name="gender" id="gender" >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label for="">DateOfBirth<sup>*</sup></label>
                      <input
                      onChange={(e) =>{
                        setDob(e.target.value)
                      }}
                       type="date" />
                    </div>
                 </div>

                <div class="align-together">
                    <div>
                      <label for="">Password<sup>*</sup></label>
                      <input 
                      onChange={(e) =>{
                        setPassword(e.target.value)
                      }}
                      type="password" placeholder="Enter Password"/>
                    </div>
                    <div>
                      <label for="">Confirm Password<sup>*</sup></label>
                      <input 
                      onChange={(e) =>{
                        setCPassword(e.target.value)
                      }}
                      type="password" placeholder="Confirm Password"/>
                    </div>
                 </div>


                    <button
                      onClick={(e) =>{
                        handleSubmit(e)
                      }}
                    className="register-btn full-width" id="signin"> Register Now</button>
                     <p> <span>Note:</span>This website is for DIETMS students only</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Registration;