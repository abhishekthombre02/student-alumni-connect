import React,{useState,useEffect} from "react";
import "./ProfileSecond.css";
import profile from './Images/profile.svg'
import { useAuth } from '../auth';
import axios from 'axios'
const ProfileSecond=()=>{
    const {userData} = useAuth()
    const [allUsers,setAllUsers] = useState([])

    useEffect(() =>{
        handleSubmit()
    },[])
    const handleSubmit = async  (e) =>{
      //  e.preventDefault()
    try{
    const response = await axios.get(`http://localhost:5000/getUser`);
        setAllUsers(response.data.response)

    if(response.data.success)
    {
     
    console.log(response.data)
      console.log("successfully logged In")
    }
    }
    catch(error) {
    console.log("this is error",error)
    }
    }
    return(

        <div className="profilesecond">
            <div className="containerbox">
                   {
                    allUsers.filter(currUser => currUser?.firstName?.length>0 ).map(currUser =>{
                        return (
                            <div
                            key={currUser._id}
                             className="card">
                            <div className="cardtop">
                                <div className="profilephoto">
                                    <img src={profile} alt="" />
                                </div>
                                <div className="details">
                                <h3>{currUser?.firstName} {currUser?.lastName}</h3>
                                <p>{currUser?.designation}</p>
                                </div>        
                            </div> 
                            <div className="cardbottom">
                                <div className="chat">
                                    <p>chat</p>
                                </div>
                            </div>
                        </div> 
                        )
                    })
                   } 
                    
            </div>
        </div>
    );
}

export default ProfileSecond;