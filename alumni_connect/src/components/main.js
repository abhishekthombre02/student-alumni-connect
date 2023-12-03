import React from "react";
import "./main.css"
import homeIcon from './Images/HOME ICON.svg'
import About from './Images/about-us.svg'
import Mission from './Images/Mission.svg'
import Vision from './Images/Vision.svg'
import Student from './Images/Total-Student.svg'
import PlacedStudent from './Images/placed-student.svg'
import AvgPackage from './Images/average package.svg'
import { Link } from "react-router-dom";

export const Main = () => {
    return (
        <div className="main">
            <div className="main-head">
                <div className="main-left-container">
                    <h2 className="main-heading">Alumini Connect</h2>
                    <p className="main-para">Connect with your alumini and seek guidance</p>
                   <Link to ="/ProfileSecond"> <button className="main-header-btn">Connect with Alumni</button> </Link>
                </div>
                <div  className="main-right-container">
                    <div className="alumini">
                        <img className="main-header-img" src={homeIcon} alt="home icon"/>
                    </div>
                </div>
            </div>


            {/* About us section start here */}
            <div className="main-title-container">
                <div className="main-title">
                    About Us
                    <div className="title-line">
                    </div>
                </div>
            </div>
            <div className="about-us">
                <div className="about-left-container">
                    <img className="about-img" src = {About} alt="about-us" /> 
                </div>
                <div className="about-right-container">
                <p className= "about-info">In pursuance with the policies of the Government of India to start Engineering 
                colleges in emerging technologies, Deogiri Institute of Engineering and Management Studies is established 
                at Aurangabad during the academic year 2009-10.Deogiri Institute of Engineering and Management Studies is 
                affiliated to the Dr. Babasaheb Ambedkar Technological University, Lonere and is developed as per the norms 
                of the All India Council of Technical Education (A.I.C.T.E.), Government of India.The Institute is consistently
                 among the top institutes of Dr. B.A.M. University in examination results. The student-centric teaching learning 
                 environment, state of the art infrastructure, well-equipped laboratories, library stacked with good number of 
                 books, experienced and dedicated team of faculties are the key features of the Institute.</p>
                </div>
            </div>

 
            {/* Vision Section Start here  */}       
            <div className="vision-title-container">
                <div className="vision-title">
                    Vision
                    <div className="title-line">
                    </div>
                </div>
            </div>
            <div className="vision">
                <div className="vision-left-container">
                <p className= "about-info">In pursuance with the policies of the Government of India to start Engineering 
                colleges in emerging technologies, Deogiri Institute of Engineering and Management Studies is established 
                at Aurangabad during the academic year 2009-10.Deogiri Institute of Engineering and Management Studies is 
                affiliated to the Dr. Babasaheb Ambedkar Technological University, Lonere and is developed as per the norms 
                of the All India Council of Technical Education (A.I.C.T.E.), Government of India.The Institute is consistently
                 among the top institutes of Dr. B.A.M. University in examination results. The student-centric teaching learning 
                 environment, state of the art infrastructure, well-equipped laboratories, library stacked with good number of 
                 books, experienced and dedicated team of faculties are the key features of the Institute.</p>
                    </div>
                    <div className="vision-right-container">
                    <img className="about-img" src = {Vision} alt="Vision" /> 
                </div>
            </div>



            {/* Mission Section Start here  */}       
            <div className="main-title-container">
                <div className="main-title">
                    Mission
                    <div className="title-line">
                    </div>
                </div>
            </div>
            <div className="about-us">
                <div className="about-left-container">
                    <img className="about-img" src = {Mission} alt="Mission" /> 
                </div>
                <div className="about-right-container">
                <p className= "about-info">In pursuance with the policies of the Government of India to start Engineering 
                colleges in emerging technologies, Deogiri Institute of Engineering and Management Studies is established 
                at Aurangabad during the academic year 2009-10.Deogiri Institute of Engineering and Management Studies is 
                affiliated to the Dr. Babasaheb Ambedkar Technological University, Lonere and is developed as per the norms 
                of the All India Council of Technical Education (A.I.C.T.E.), Government of India.The Institute is consistently
                 among the top institutes of Dr. B.A.M. University in examination results. The student-centric teaching learning 
                 environment, state of the art infrastructure, well-equipped laboratories, library stacked with good number of 
                 books, experienced and dedicated team of faculties are the key features of the Institute.</p>
                </div>
            </div>

        {/* Statics Section start here */}

        <div className="stats-title-container">
                <div className="vision-title">
                    Past Stats
                    <div className="title-line">
                    </div>
                </div>
            </div>

        <div className="stats-container">
            
            <div className="circle">
                <div className="main-stats">
                    <img src = {Student} alt="total students" />
                    <h2> 5000+ </h2>
                </div>

                <h2 className="stats-head"> Total Students </h2>
            </div>
            <div className="circle">
            <div className="main-stats">
                    <img src = {PlacedStudent} alt="Placed Student" />
                    <h2> 4000+ </h2>
                </div>

                <h2 className="stats-head"> Placed Students </h2>
            </div>
            <div className="circle">
            <div className="main-stats">
                    <img src = {AvgPackage} alt="Average Package" />
                    <h2> 3.5 LPA </h2>
                </div>

                <h2 className="stats-head"> Average Package </h2>
            </div>
            <div className="circle">
            <div className="main-stats">
                    <img src = {PlacedStudent} alt="Highest Package" />
                    <h2> 12+ LPA </h2>
                </div>

                <h2 className="stats-head"> Highest Package </h2>
            </div>
        </div> 
        </div>
    )
}

export default Main;