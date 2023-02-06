import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Heroimg2 from '../components/flexcomponents/Heroimg2';
import Form from '../components/Form';
import WhatsappBtn from '../components/WhatsappBtn';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT" text="Let's Chat!"/>
      <Form/>
      <Footer />
      <WhatsappBtn/>
    </div>
  )
}

export default Contact