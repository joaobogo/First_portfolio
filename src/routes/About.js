import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Heroimg2 from '../components/flexcomponents/Heroimg2';
import AboutContent from '../components/AboutContent';
import WhatsappBtn from '../components/WhatsappBtn';

const About = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Heroimg2 heading="ABOUT" text="I'm a Front End Developer" />
      <AboutContent />
      <Footer />
      <WhatsappBtn />
    </div>
  )
}

export default About