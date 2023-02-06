import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work"
import WhatsappBtn from '../components/WhatsappBtn';


const Home = () => {
  return (
    <div className='home'>
     <Navbar/>
     <HeroImg/>
     <Work/>
     <Footer/>
     <WhatsappBtn/>
    </div>
  );
};

export default Home