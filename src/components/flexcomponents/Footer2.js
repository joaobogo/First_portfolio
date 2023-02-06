import "./Footer2Styles.css";
import lapis from '../../assets/lapis.jpg'
import React, { useState, useContext } from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import Context from "../../context/Context";


const Footer2 = () => {
    const globalState = useContext(Context)
    const [city, setCity] = useState("Curitiba, PR, Brazil")
    const [email, setEmail] = useState("kasprzakjoao@protonmail.com")
    const [phone, setPhone] = useState('+55 41 99628-4949')

    const handleEdit = () => {
        globalState.setChangeInputs([{
            label: 'city',
            value: city,
            type: 'text',
            setter: setCity,
        }, {
            label: 'phone',
            value: phone,
            type: 'tel',
            setter: setPhone,
        }, {
            label: 'email',
            value: email,
            type: 'email',
            setter: setEmail,
        }])
        globalState.setIsMenuActive(true)
    }





    return (
        <div className="footer">
            <button className="botaoeditar" onClick={handleEdit}><img src={lapis}></img></button>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>{city}</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            {phone}</h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            {email}</h4>
                    </div>

                </div>
                <div className="right">
                    <h4>About</h4>
                    <p> This is me, João Bogo. Jr Front End Developer, I am a graduate from Western Carolina University in Business Marketing Administration. Now, I seek to pursue new goals within the IT Industry where I expect to learn and push myself to new limits.</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/joaobogoprofessional/"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://github.com/joaobogo"><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2