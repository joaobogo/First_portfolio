import React,{useEffect} from "react";
import AboutContainer from "./About.styles";
import me from "../../../assets/me.jpg";
import aws from '../../../assets/aws.png'
import css from '../../../assets/css.png'
import git from '../../../assets/git.png'
import html from '../../../assets/html.png'
import js from '../../../assets/js.png'
import nodejs from '../../../assets/nodejs.png'
import photoshop from '../../../assets/photoshop.png'
import react from '../../../assets/react.png'
import 'aos/dist/aos.css';
import Aos from 'aos';

function About() {

  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  return (
    <AboutContainer id="about">
      <h2 className="desktop">Learn More About Me</h2>

      <div className="aboutmain">
        <div className="left">
        <h2 className="mobile">Learn More About Me</h2>
          <img  className="me" src={me}></img>
        </div>

        <div data-aos='fade-up' className="right">
          <p data-aos='fade-up' className="mainp">
            I am a passionate developer who loves to code, and find solutions to
            complicated problems. I am a graduate from Western Carolina
            University, where I studied Business Marketing Administration. After
            my college experience, I fell in love with programming, which lead
            me to focus my time on front-end development. Now I am a freelancer,
            but seeking new challenges where I can showcase my knowledge but
            also learn from experienced professionals in the industry.
          </p>
          <div className="buttoncontainer">
            <a download="CV2022IT.pdf" href="CV2022IT.pdf" className="cvbutton">
              Resume
            </a>
            <a href="https://wa.me/5541996284949">Hire Me</a>
          </div>
          <h3 data-aos='fade-up'>Experienced with:</h3>
          <div data-aos='fade-up' className="logos">
            <img src={html}></img>
            <img src={css}></img>
            <img src={js}></img>
            <img src={react}></img>
            <img src={nodejs}></img>
            <img src={aws}></img>
            <img src={git}></img>
            <img src={photoshop}></img>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
}

export default About;
