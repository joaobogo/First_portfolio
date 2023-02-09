import React from 'react'
import WhatsApp from '../assets/WhatsApp.jpg'
import './WhatsappBtnStyles.css'


function WhatsappBtn() {
  return (

  <a href='https://wa.me/5541996284949' className='whatsappbtn'>
    <img src={WhatsApp}/>
  </a>

  )
}

export default WhatsappBtn