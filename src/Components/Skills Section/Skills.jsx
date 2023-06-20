import React from 'react'
import './skill.css'
import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {SiAmazonaws, SiCss3, SiExpress} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {DiMysql, DiPhp, DiSqllite} from 'react-icons/di'
import {CgFigma} from 'react-icons/cg'
import {SiAdobexd} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {FaGitSquare} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsWordpress} from 'react-icons/bs'
import {SiMysql} from 'react-icons/si'

const Skills = () => {
  return (
    <section id='skills' className='skills container section'>
       <div class="sectionTitle">
      <span class="titleNumber">02 . </span>  
      <h5 class="titleText">Skills <div class="underline"><span></span></div></h5>
      </div>

      {/* skillContainer */}
      <div className="skillsContainer grid">

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
           <div className="singleSkill">
           <div className="iconBox flex">
            <TbBrandReactNative className='icon'/>
            </div>
            <span className='skillName'>React</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <IoLogoJavascript className='icon'/>
            </div>
            <span className='skillName'>JavaScript</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <IoLogoSass className='icon'/>
            </div>
            <span className='skillName'>Sass</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <SiCss3 className='icon'/>
            </div>
            <span className='skillName'>CSS</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <FaHtml5 className='icon'/>
            </div>
            <span className='skillName'>HTML</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <IoLogoNodejs className='icon'/>
            </div>
            <span className='skillName'>Node</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <SiExpress className='icon'/>
            </div>
            <span className='skillName'>Express</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <DiSqllite className='icon'/>
            </div>
            <span className='skillName'>SQL</span>
           </div>
 
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
           <div className="iconBox flex">
            <CgFigma className='icon'/>
            </div>
            <span className='skillName'>Figma</span>
           </div>
           <div className="singleSkill">
           <div className="iconBox flex">
            <SiAdobephotoshop className='icon'/>
            </div>
            <span className='skillName'>Photoshop</span>
           </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
          </div>
          <div className="generalSkills">
            {/* Single skill div */}
           <div className="singleSkill">
            <div className="iconBox flex">
            <FaGitSquare className='icon'/>
            </div>
            <span className='skillName'>Git</span>
           </div>
           <div className="singleSkill">
            <div className="iconBox flex">
            <AiOutlineGithub className='icon'/>
            </div>
            <span className='skillName'>Github</span>
           </div>
           <div className="singleSkill">
            <div className="iconBox flex">
            <SiAmazonaws className='icon'/>
            </div>
            <span className='skillName'>AWS</span>
           </div>
           <div className="singleSkill">
            <div className="iconBox flex">
            <SiMysql className='icon'/>
            </div>
            <span className='skillName'>MySQL</span>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills