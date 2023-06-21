import React from "react";
import { profile } from '../assets'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={profile} alt="https://unsplash.com/@24ameer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"/>
      </div>
      <div className="desc">
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ullam vero numquam modi quidem quae, dolor sint laborum consectetur delectus magnam, accusantium itaque debitis est! Dolorum, accusantium eius! Corporis, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat dicta dignissimos laudantium quo nulla tenetur assumenda! Quam illum, veniam sequi repellendus voluptatum debitis est, ab quia magnam, tempora iusto?</p>
        <div className="btn">
          <button>Hire Me</button>
          <button>Resume</button>
        </div>
      </div>
    </section>
  )
}

export default About;