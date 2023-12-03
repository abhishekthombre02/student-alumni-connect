import React from "react";
import './navbar.css';
import Navlogo from './Images/DIEMS Logo.svg';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { useAuth } from "../auth.js";
export const Navbar = () => {
    const {loggedIn,userData} = useAuth()
    return(
    
        <nav className="navbar">
            <div className="nav-logo"> <Link to = "/"> <img src={Navlogo} alt="DIEMS logo" /> </Link>
            </div>
            <div className="nav-menu">
                <ul>
                    <li>
                         <Link to="/"> Home </Link>
                    </li>
                    <li>
                         <Link to="/ProfileSecond"> Alumni </Link>
                    </li>
                    <li>
                         <Link to="/Blogpage"> Blog </Link>
                    </li>
                    <li>
                         <a href={`http://localhost:3001/`} target="blank"> Forum </a>
                    </li>
                </ul>
            </div>
            <div className="login">
               {
                loggedIn ? 
                <>
                <Link to = "/Profile"><Avatar>{userData && userData.firstName ?userData.firstName[0]: "p"}</Avatar> </Link>
                </>:
                <button className="nav-btn"> <Link to="/Login"> Login </Link> </button>
               }
            </div>
        </nav>
        
    )
}

export default Navbar;