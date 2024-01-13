import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>KHATEEB AHMAD</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><BsTwitterX/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Khateeb Ahmad. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer