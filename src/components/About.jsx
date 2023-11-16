import React from 'react';
import "../styles/about.css";
import ME from "../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>   

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ clients world wide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div>

                    <p>Dedicated and results-driven technology professional with a passion for innovation and problem-solving. Leveraging a strong foundation in software development, web development, I am committed to driving excellence in every project I undertake. I am eager to contribute my expertise to a dynamic team and help shape the future of technology. Seeking a challenging role where my technical skills, creative thinking, and commitment to continuous learning can make a significant impact.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>   
                </div>

            </div>
        </section>
    )
}

export default About;
