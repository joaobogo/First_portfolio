import React from "react";
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import {Route, Routes} from "react-router-dom"
import Project2 from "./routes/Project2";
import Provider from "./context/Provider";
import Flexpage from "./routes/Flexpage";

function App() {
  return (
    <Provider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/project2' element={<Project2/>}/>
      <Route path='/flexpage' element={<Flexpage/>}/>
    </Routes>
    </Provider>
  );
}

export default App;
