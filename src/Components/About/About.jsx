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
            👋 Hi there ! I'm Samarth patel. With over two years of software
            engineering experience, I specialize in designing, developing, and
            optimizing web applications within large enterprise environments.
            Skilled in working with both brownfield and greenfield projects,
            including migrating legacy monolithic applications to
            microservice-based architecture. Proficient in building applications
            using JavaScript and Python. Possess excellent communication skills
            to understand customer pain points and analyze complex problems,
            with a focus on delivering effective solutions.
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
