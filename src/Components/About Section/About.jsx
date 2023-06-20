import React from "react";
import "./about.css";
import img from "../../Assets/linkedin.png";
import { VscCloudDownload } from "react-icons/vsc";
// import cvv from '../../Assets/FRONTEND DEVELOPER.pdf'

const About = () => {
  return (
    <section id="about" className="about section container">
      <div class="sectionTitle">
        <span class="titleNumber">01 . </span>
        <h5 class="titleText">
          About Me{" "}
          <div class="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I am a passionate developer who loves to code, and find solutions to
            complicated problems. I am a graduate from Western Carolina
            University, where I studied Business Marketing Administration. After
            my college experience, I fell in love with programming, which lead
            me to focus my time on web development, I am now proficient in React.js, Node.js, SQL and Mongo. Now I am a freelancer,
            but seeking new challenges where I can showcase my knowledge but
            also learn from experienced professionals in the industry.
          </h4>

          <div className="aboutBtn">
          <a  href="1KASPRZAKJOAOCVEnglish.pdf" download="1KASPRZAKJOAOCVEnglish.pdf">
              Download CV <VscCloudDownload />
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img className="aboutImg" src={img} alt="João Bogo" />
        </div>
      </div>
    </section>
  );
};

export default About;
