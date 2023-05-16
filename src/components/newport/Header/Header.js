import React, { useEffect, useState } from "react";
import HeaderContainer from "./Header.styles";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  const [firstclass, setFirstClass] = useState("firstone");
  const [secondclass, setSecondClass] = useState("secondone");
  const [thirdclass, setThirdClass] = useState("thirdone");

  useEffect(() => {
    setTimeout(()=>setFirstClass("active"), 2500)
    setTimeout(()=>setSecondClass("active2"), 5500)
    setTimeout(()=>setThirdClass("active3"), 7700)
   ;
  }, []);


  return (
    <HeaderContainer id="home">
      <div className="nav">
        <a href="/">  <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link></a>

        <a href="/"><Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About Me
          </Link></a>

        <a href="/"><Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link></a>

        <a href="/"><Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Let's Talk
          </Link></a>
        
        <div className="social">
          <a href="https://www.linkedin.com/in/joaobogoprofessional/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/joaobogo">
            <FaGithub />
          </a>
          <a href="https://wa.me/5541996284949">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className='typewriter'>
        <h1 className={firstclass}>Nice to meet you!</h1>
        <h1 className={secondclass}> I'm João Bogo, </h1>
        <h1 className={thirdclass}>Jr Frontend Developer</h1>
      </div>
    </HeaderContainer>
  );
}

export default Header;
