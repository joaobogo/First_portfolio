import "./Navbar2Styles.css"

import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

import lua from '../../assets/lua.jpg'
import sol from "../../assets/sol.jpg"
import lapis from "../../assets/lapis.jpg"
import Context from "../../context/Context";


const Navbar2 = () => {
    const globalState = useContext(Context)
    const [theme, setTheme] = useState('dark')

    function changeTheme() {
        if (theme === 'dark') {
            setTheme('light')
            document.documentElement.style.setProperty('--primary', 'white');
            document.documentElement.style.setProperty('--secondary', 'black');
            document.documentElement.style.setProperty('--tertiary', 'cyan');
            document.documentElement.style.setProperty('--quaternary', 'beige');
        }
        else {
            setTheme('dark')
            document.documentElement.style.setProperty('--primary', 'black');
            document.documentElement.style.setProperty('--secondary', 'white');
            document.documentElement.style.setProperty('--tertiary', 'rgb(68, 145, 218)');
            document.documentElement.style.setProperty('--quaternary', '#222');
        }
    }
    const [username, setUsername] = useState('João Bogo')

    const [isMenuActive, setIsMenuActive] = useState(false);
    const togglemenu = () => setIsMenuActive(!isMenuActive);

    const [color, setColor] = useState(false);


    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    const handleEdit = () => {
        globalState.setChangeInputs([{
            label: 'username',
            value: username,
            type:'text',
            setter: setUsername,
        }])
        globalState.setIsMenuActive(true)
    }


    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to='/'>
                <h1>{username}</h1>
            </Link>
            <button className="botaoeditar" onClick={handleEdit}><img src={lapis}></img></button>
            <ul className={isMenuActive ? "nav-menu active" : "nav-menu"}>
                <li>
                    <button onClick={changeTheme}><img src={theme === 'dark' ? sol : lua}></img></button>
                </li>

                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/project'>Projects</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className="hamburguer" onClick={togglemenu}>
                {isMenuActive ? (<FaTimes size={20} style={{ color: '#fff' }} />
                ) : (<FaBars size={20} style={{ color: '#fff' }} />)}


            </div>
        </div >
    )
}

export default Navbar2