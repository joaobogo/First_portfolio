import React from 'react'
import './home.css'
import {TbArrowBigRightLines, TbBrandLinkedin, TbBrandWhatsapp, TbBrandWindows} from 'react-icons/tb'
import {TbChevronsDown} from 'react-icons/tb'
import {AiFillGithub} from 'react-icons/ai'
import {TbBrandTwitter} from 'react-icons/tb'
import {AiFillYoutube} from 'react-icons/ai'

const Home = () => {
  return (
    <section id='home' className='home section'>
      <div className="leftIcons">
        <div className="socials grid">
            <a href="https://github.com/joaobogo" target="_blank"><AiFillGithub className="icon" /></a>
            <a href="https://www.linkedin.com/in/joaobogoprofessional/" target="_blank"><TbBrandLinkedin className="icon"/></a>
            <a href="https://api.whatsapp.com/send/?phone=5541996284949&text&type=phone_number&app_absent=0" target="_blank"><TbBrandWhatsapp className="icon"/></a>
           <div className="line"></div>
        </div>
      </div>
      
      <div className="container homeContent">
        <span className="introText">
          Hi my name is,
        </span>
        <h1 className="title">
          João Bogo
        </h1>
        <span className="subTitle">
          I am a Jr Fullstack Developer, I develop scalable web based applications and softwares.
        </span>
        <p className="homeParagraph">
        I code within required coding standards and styles to fit my customers needs.
        </p>

        <div className="lowerHomeSection">
          <button className='contactBtn '>
            <a className='flex'  href="#contact">
            Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>

          <div class="scrollDiv">
              <a href="#about" className='flex'> <h6 class="scroll">Scroll Down <TbChevronsDown className='icon'/></h6></a>   
           </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className='emailAddress'>
            <a href="https://mailto:kasprzakjoao@protonmail.com" target="_blank">kasprzakjoao@protonmail.com</a>
          </div>
           <div className="line"></div>
        </div>
      </div>

    </section>
  )
}

export default Home