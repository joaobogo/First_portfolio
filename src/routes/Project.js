import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Heroimg2 from '../components/flexcomponents/Heroimg2';
import Work from '../components/Work';
import WhatsappBtn from '../components/WhatsappBtn';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="Some of my most recent work."/>
      <Work/>
      <Footer/>
      <WhatsappBtn/>
      </div>
      
  )
}

export default Project