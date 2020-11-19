import React from "react";
import FooterForm from "../FooterForm/FooterForm";
import "./Footer.css";
import logo from "../../../images/logo.png";
import facebook from "../../../images/social/facebook.png";
import linkedIn from "../../../images/social/linkedIn.png";
import twitter from "../../../images/social/twitter.png";
import dribble from "../../../images/social/dribble.png";
import be from "../../../images/social/be.png";
const Footer = () => {
    return (
        <footer>
            <FooterForm></FooterForm>
            <div className="row main-footer">
                <div className="offset-xl-2  col-xl-2 col-md-2 d-flex flex-column align-items-center">
                    <img className="img-fluid w-50 mb-4" src={logo} alt="" />
                    <div className="social-icon">
                        <img src={facebook} alt="" className="img-fluid" />
                        <img src={twitter} alt="" className="img-fluid" />
                        <img src={linkedIn} alt="" className="img-fluid" />
                        <img src={dribble} alt="" className="img-fluid" />
                        <img src={be} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="offset-xl-2 col-xl-2 col-md-2">
                    <ul>
                        <li>Features</li>
                        <li>Enterprise</li>
                        <li>pricing</li>
                    </ul>
                </div>
                <div className="col-md-2 col-xl-2">
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="col-md-2 col-xl-2">
                    <ul>
                        <li>About Us</li>
                        <li>Terms of Services</li>
                        <li>Security</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
