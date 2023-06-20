import React from 'react'
import './app.css'
import About from './Components/About Section/About'
import Contact from './Components/Contact Section/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home Section/Home'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects Section/Project'
import Skills from './Components/Skills Section/Skills'


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App