import React from "react";
import logo from './logoCarticss.png'

const Footer = () => {
    return (
        <div className="footClass">
            <p>Developed By</p>
            <a href="https://github.com/Carticss" className="link">
                <img src={logo} alt="logo-builder"/>
            </a>
            
        </div>
    )
}

export default Footer;