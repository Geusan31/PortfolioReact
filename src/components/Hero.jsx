import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <span>I'm a</span>
      <h1>Web <br /> Developer.</h1>
      <Link to="#contact">Contact Me</Link>
    </section>
  )
}

export default Hero;