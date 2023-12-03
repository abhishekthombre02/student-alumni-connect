
import React,{useEffect,useState} from 'react';
import './blogmain.css';
import './footer.js';
import BlogImage from './Images/BlogImage.svg';
import Navbar from './navbar.js';
import { Link } from 'react-router-dom';
import axios from 'axios'
import parse from 'html-react-parser';

const Blogpage = () => {
  const [blogs,setBlogs] = useState([])

  useEffect(() =>{
    handleSubmit()
  })
  const handleSubmit = async  () =>{
  
try{
const response = await axios.get(`http://localhost:5000/getBlogs`);

if(response.data.success)
{
    setBlogs(response.data.response)
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
    <div></div>
      <div className="page">
      {/* <div className="colortext"><h1>Featured Blog</h1></div>  */}
       {/* <div className="blogcontainer">   
        <img src={BlogImage}  alt="Rahul image" />
        <h4 className='name'>Rahul Yadav</h4>
        <p>Lorem ipsum dolor sit amet consectetur. Auctor purus odio aliquam integer morbi.</p>    
       </div> */}


       <h1 class="headline">Recent Blog</h1>
      {
        blogs.map(blog =>{
          return (
            <div>
              <div class="student-box">
      <img  className="student-photos" src={BlogImage}  alt="Rahul image" />
      <div class="student-info">     
        <div class="view-count">{parse(blog.data.slice(0,60))}</div>
      <Link to ={ `/Blog?id=${blog._id}`}>  <button className="btn">See more</button> </Link>
      </div>

      
    </div>  
            </div>
          )
        })
      }
    </div> 
    </>   
  );
};

export default Blogpage;
