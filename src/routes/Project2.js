import React from "react";
import image from "../assets/background.jpg"
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Work2 from "../components/flexcomponents/Work2";



function Project2() {
  return (
    <div>
        <Navbar/>
        <Title title="Projects" subtitle="Some of my most recent work." image={image}></Title>
        <Work2/>
        <Footer/>
    </div>
  )
}

export default Project2