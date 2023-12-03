import React from "react";
import logo from './Images/DIEMS Logo.svg'
import './footer.css'
import facebook from './Images/facebook.svg'
import Instagram from './Images/Instagram.svg'
import twitter from './Images/twitter.svg'
import LinkedIn from './Images/LinkedIn.svg'

export const Footer = () => {
    return(
        <div className="footer">
            <div className="main-footer">
                <div className="left-footer-container">
                    <img className="footer-logo" src={logo} alt="Diems Logo" /> 
                    <div className="Social-media-icons">
                        <img className="icon" src = {facebook} alt="facebook"/>
                        <img className="icon" src = {Instagram} alt="Instagram"/>
                        <img className="icon" src = {twitter} alt="twitter"/>
                        <img className="icon" src = {LinkedIn} alt="LinkedIn"/>
                    </div>

                </div>
                <div className="right-footer-container">
                     <h3>Contact</h3>
                     <p>Deogiri Institute of Engineering and Management Studies, 
                        Railway Station Road, Aurangabad – 431005.</p>
                   
                     <h3>Email - <span>admin@dietms.org</span></h3>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© Copyright <span> DIETMS. </span>  All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;