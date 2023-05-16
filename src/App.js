import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Provider from "./context/Provider";
import Header from "./components/newport/Header/Header";
import Projects from "./components/newport/Projects/Projects";
import Footer from "./components/newport/Footer/Footer";
import About from "./components/newport/About/About";
import Contact from "./components/newport/Contact/Contact";

function App() {
  return (
    <Provider>
        <Header />
        <About/>
        <Projects />
        <Contact/>
        <Footer />
    </Provider>
  );
}

export default App;
