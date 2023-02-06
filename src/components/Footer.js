import "./FooterStyles.css";

import React from 'react'

import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Curitiba, PR, Brazil</p>
                    </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +55 41 99628-4949</h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            kasprzakjoao@protonmail.com</h4>
                    </div>

                </div>
                <div className="right">
                <h4>About</h4>
                <p> This is me, João Bogo. Jr Front End Developer, I am a graduate from Western Carolina University in Business Marketing Administration. Now, I seek to pursue new goals within the IT Industry where I expect to learn and push myself to new limits.</p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/joaobogoprofessional/"><FaLinkedin  size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    <a href="https://github.com/joaobogo"><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer