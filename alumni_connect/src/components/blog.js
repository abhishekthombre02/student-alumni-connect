
import React,{useEffect,useState} from 'react';
import './blog.css';
import image3 from './Images/BlogImage.svg';
import mayuri from './Images/profile.svg';
import like from './Images/Like.svg';
import Navbar from './navbar';
import axios from 'axios'
import parse from 'html-react-parser';

import { useNavigate, useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import { useAuth } from "../auth.js";
function useQuery(){
  return new URLSearchParams(useLocation().search)
}
const Blog = () => {
  const {userData} = useAuth()
  const [blog,setBlog] = useState({})
  const query = useQuery()
  const id= query.get("id")
  useEffect(() =>{
    if(id.length>0)
    handleSubmit()
  },[id])
  const handleSubmit = async  () =>{
  
    try{
    const response = await axios.get(`http://localhost:5000/getBlog/${id}`);
    console.log(response.data)
    if(response.data.success)
    {
      console.log(response)
      setBlog(response.data.response)
      //  setBlogs(response.data.response)
      console.log("successfully logged In")
    }
    }
    catch(error) {
    console.log("this is error",error)
    }
    }


    const addLikes = async  () =>{
  
      try{
      const response = await axios.post(`http://localhost:5000/like/${id}`,{
        userName: userData.userName
      });
      console.log(response.data)
      if(response.data.success)
      {
        handleSubmit()
        //  setBlogs(response.data.response)
        console.log("successfully logged In")
      }
      }
      catch(error) {
      console.log("this is error",error)
      }
      }
  return (
    <>
    <div className="navbar">
    <Navbar /> 
    </div>
      


      <div className="page">

      <div><h1>Welcome to Alumni Connect</h1></div>

      <div className="main-container">
      <div className="user-section">
        <img className="profile-image" src={mayuri} alt="Profile Image" />
        <div className="username">{blog?.user?.firstName} {blog?.user?.lastName}</div>
      </div>
      
      <div className="logo-section">
        <img className="like" src={like} alt="Like" />
        <div 
        onClick={() =>{
          addLikes()
        }}
        className="like">Like : {blog?.likes}</div>
      </div>
         </div>

      <img src={image3}  alt="Alumni" />
      
          
      <p>
        {blog && blog.data ? parse(blog.data) : ""}
       </p>

      

    
    </div>
     
    </>
  );
};

export default Blog;
