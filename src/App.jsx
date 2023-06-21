import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Navbar, Hero, About, Project, Services} from "./components";
import './assets/css/App.css';
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Hero />
        <About/>
        <Project/>
        <Services/>
        <Experience/>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App;