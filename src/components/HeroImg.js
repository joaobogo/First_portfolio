import "./HeroImgStyles.css";
import IntroImg from "../assets/background.jpg";
import React from 'react';
import { Link } from "react-router-dom";



const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src=
                    {IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>Hi, I'm João Bogo.</p>
                <h1>Jr Front End Developer</h1>
                <div className="maindiv">
                    <Link to='/project' className="btn mediabtn">Projects</Link>
                    <Link to='/contact' className="btn-light mediabtn">Contact</Link>
                    <a download="CVH2022SEPT.pdf" href="CVH2022SEPT.pdf" className="btn mediabtn">Download CV</a>
                </div>
            </div>

        </div>
    );
};

export default Heroimg