/** @format */

import React from "react";
import "./about.css";
import ME from "../../assets/img_sam.jpg";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <p>
            👋 Hi there ! I'm Samarth patel. As a Full Stack Developer, I
            specialize in designing dynamic and responsive web apps that make a
            lasting impression. With a good understanding of modern frontend
            technologies such as React.js, I successfully manage state with
            Redux and Recoil, ensuring smooth data flow. My backend expertise in
            Node.js and Express.js enables me to smoothly combine robust
            functionality and elegant design. I pay close attention to detail
            and create interesting user interfaces with HTML, CSS, and
            JavaScript. I prioritize performance and security when maintaining
            databases using MySQL, MongoDB, and PostgreSQL, as well as providing
            secure authentication with JWT. Passionate in system design, agile
            approaches, and continuous improvement, I thrive in collaborative
            contexts and strive for perfection. Let's work together to build
            something extraordinary.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
