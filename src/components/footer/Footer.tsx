import React from "react";
import './Footer.css'
import {FaFacebook} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {FaTwitter} from "react-icons/fa";


const Footer = () => {
   return  (<footer id="footer">
       <a href="#" className="footer_logo">VM</a>

       <ul className='permalink'>
           <li><a href="#">Home</a></li>
           <li><a href="#about">about</a></li>
           <li><a href="#experience">experience</a></li>
           <li><a href="#contact">contact</a></li>
       </ul>
       <div className="footer_social">
           <a href="www.facebook.com"><FaFacebook /></a>
           <a href="www.instagram.com"><FiInstagram /></a>
           <a href="www.twitter.com"><FaTwitter /></a>
       </div>

       <div className="footer_copyright">
           <small>&copy;VM . All Rights reserved</small>
       </div>
   </footer>)
}

export default Footer;