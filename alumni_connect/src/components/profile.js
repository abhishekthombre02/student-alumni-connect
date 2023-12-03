import React,{useState,useEffect} from 'react';
import "./Profile.css";
import { useNavigate} from "react-router-dom/dist/umd/react-router-dom.development";
import axios from 'axios'
import { useAuth } from '../auth';
import { Link } from 'react-router-dom';
function Profile() {
    const navigate = useNavigate();
    const {userData,handleLogStatusChange,changeUserData,loggedIn} = useAuth()
    const [isEdit,setIsEdit] = useState(false)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [domain, setDomain] = useState("")
    const [course,setCourse] = useState("")
    const [dob,setDob] = useState("")
    const [designation, setDesignation] = useState("")
    const [gender, setGender] = useState("")

    useEffect(() =>{
        if(!loggedIn) navigate("/Login")
    },[loggedIn])

    const handleSubmit = async  (e) =>{
        e.preventDefault()
    try{
    const response = await axios.post(`http://localhost:5000/signup`,{
        ...userData,
        firstName,lastName,
        course,domain,dob,designation,gender
      });
    console.log(response.data)
    if(response.data.success)
    {
        setIsEdit(false)
      changeUserData({
        ...userData,
        firstName,lastName,
        course,domain,dob,designation,gender
      })
    //  handleLogStatusChange()
     // navigate(`/`);
      console.log("successfully logged In")
    }
    }
    catch(error) {
    console.log("this is error",error)
    }
    }
  return (
    <div className='profile-page'>

        <div className="container">
         <div className="card-1">
            <button className="btn profile-btn">Profile</button>
            <div className="menu">
                <div className="menu-icon div-flex">
                    
                </div>
                <div className="menu-list div-flex">
                    <ul>
                        <li>My Profile</li>
                        <li
                        className='profile-pointer'
                        onClick= {
                            () =>{
                                setIsEdit(true)
                            }
                        }
                        >Edit Profile</li>
                       <Link to = "/Editor"> <li>Write Experience</li> </Link>
                    </ul>
                </div>
            </div>     
         </div>
         <div className="card-2">
            <div className="subcard-1 subcard">
                <button 
                onClick={() =>{
                    handleLogStatusChange()
                    navigate("/")
                }}
                className="btn logout-btn">Log Out</button>
                <div className="content">   
                <div className="top-content">
                    <div className="profile-photo">
                       
                    </div>
                    <div className="college-name">
                        <h5>Institute</h5>
                        <h4>Deogiri Institute Of Engineering and Management Studies Aurangabad</h4>
                    </div>
                </div>

                <div className="bottom-content">

                     <table>
                     <tr>
                           <th>First Name</th>
                        {
                            isEdit ? 
                            <input
                         onChange={(e) =>{
                         setFirstName(e.target.value)
                        }}
                         type="text" id="firstname" placeholder="Enter Name"/>
                         
                         :
                         <td>{userData?.firstName}</td>
                        }
                        </tr>

                         <tr>
                           <th>Last Name</th>
                        {
                            isEdit ? 
                            <input
                         onChange={(e) =>{
                         setLastName(e.target.value)
                        }}
                         type="text" id="firstname" placeholder="Enter Name"/>
                         
                         :
                         <td>{userData?.lastName}</td>
                        }
                        </tr>
                        <tr>
                           <th>Designation</th>
                        {
                            isEdit ? 
                            <input
                         onChange={(e) =>{
                         setDesignation(e.target.value)
                        }}
                         type="text" id="firstname" placeholder="Designation"/>
                         
                         :
                         <td>{userData?.designation}</td>
                        }
                        </tr>
                        
                        <tr>
                            <th>DOB</th>
                            {
                                isEdit ?
                                <input
                                onChange={(e) =>{
                                  setDob(e.target.value)
                                }}
                                 type="date" />:

                                 <td>{userData?.dob}</td>

                            }
                        </tr>

                        <tr>
                            <th>Email</th>
                            <td>{userData?.email}</td>
                        </tr>
                        <tr>
                            <th>Passing Year</th>
                            <td>{userData?.year}</td>
                        </tr>   
                     </table>
                     <table>
                        <tr>
                           <th>PRN</th>
                           <td>{userData?.userName}</td>
                        </tr>
                        <tr>
                            <th>Mobile No</th>
                           <td>{userData?.contact}</td>
                        </tr>
                        <tr>
                            <th>Branch</th>
                            <td>{userData?.branch}</td>
                        </tr>
                        <tr>
                           <th>Gender</th>
                        {
                            isEdit ? 
                            <input
                         onChange={(e) =>{
                         setGender(e.target.value)
                        }}
                         type="text" id="firstname" placeholder="Gender"/>
                         
                         :
                         <td>{userData?.gender}</td>
                        }
                        </tr>
                        
                        <tr>
                            <th>Course</th>
                           {
                            isEdit ?
                            <input 
                            onChange={(e) =>{
                              setCourse(e.target.value)
                            }}
                            type="test" placeholder="course"/>
                            :
                            <td>{userData?.course}</td>

                           }
                        </tr>  

                        <tr>
                            <th>Domain</th>
                           {
                            isEdit ?
                            <input 
                            onChange={(e) =>{
                              setDomain(e.target.value)
                            }}
                            type="test" placeholder="Domain"/>
                            :
                            <td>{userData?.domain}</td>

                           }
                        </tr>     
                     </table>

                          
                </div>
                </div >
                
               <div className="profile-submit-button-cont">
               {
                            isEdit ?
                            <button className='submit'
                            onClick={(e) =>{
                               handleSubmit(e)
                            }}
                            >
                            Submit
                            </button>
                            :""
                           }
               </div>
            </div>
          
            </div>
         </div>
      </div>

  );
}

export default Profile;
