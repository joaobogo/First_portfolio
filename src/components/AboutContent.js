import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react';
import luta from "../assets/luta.jpg";
import landingpage from "../assets/landingpage.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>
                    My name is João Bogo, I am a graduate from Western Carolina University, where I studied Business Marketing Administration. After my college experience I started getting familiar with the IT industry, which lead me to study front-end development, with a focus on HTML, CSS, JS and React.js. Now I seek new challenges where I can showcase my knowledge but also learn from experienced professionals in the industry.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={luta} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={landingpage} className="img" alt="true" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutContent