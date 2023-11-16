import React from 'react';
import "../styles/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <footer>

            <a href="#" className='footer__logo'>EGATOR</a>

            <ul className='permalinks'>

                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#testimonials">testimonials</a></li>
                <li><a href="#contact">contact</a></li>

            </ul>

            <div className='footer__socials'>
                <a href="https://facebook.com"  target="_blank"><FaFacebook /></a>
                <a href="https://instagram.com" target="_blank"><FiInstagram /></a>
                <a href="https://twitter.com" target="_blank"><IoLogoTwitter /></a>
            </div >

            <div className="footer__copyr">
                <small>&copy; EGATOR Tutorials. All rights reserved</small>
            </div>

        </footer >
    )
}

export default Footer