import React from 'react'
import Navbar2 from '../components/flexcomponents/Navbar2'
import HeroImg2 from '../components/flexcomponents/Heroimg2'
import Work2 from '../components/flexcomponents/Work2'
import Footer2 from '../components/flexcomponents/Footer2'
import Whatsappbtn from '../components/flexcomponents/Whatsappbtn'
import Menu from '../components/flexcomponents/Menu'



function Flexpage() {
  return (
    <div className='flex'><Menu/>
    <div className='home flexpage'>
    <Navbar2/>
    <HeroImg2/>
    <Work2/>
    <Footer2/>
    <Whatsappbtn/>
   </div>
   </div>
   )
}

export default Flexpage