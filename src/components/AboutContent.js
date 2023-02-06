import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react';
import bankaccount from "../assets/bankaccount.jpg";
import landingpage from "../assets/landingpage.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>
                    I am React Jr Front-End Developer. I create responsive, secure websites for my clients.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={bankaccount} className="img" alt="true" />
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