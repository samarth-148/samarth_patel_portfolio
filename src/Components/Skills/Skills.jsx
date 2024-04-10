/** @format */

import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
  return (
    <section className="skills">
      <h5>What skills I have </h5>
      <h2>My Experiance</h2>
      <div className="container skills_container ">
        <div className="skills_frontend">
          <h3>Frontend</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>React.js</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Javascript</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Tailwind CSS</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Redux.js</h4>
            </article>
          </div>
        </div>
        <div className="skills_backend">
          <h3>Backend</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Python</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Django</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Flask</h4>
            </article>
          </div>
        </div>
        <div className="skills-database">
          <h3>Database</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>My SQL</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Microsoft SQL Server</h4>
            </article>
          </div>
        </div>
        <div className="skills_cloud">
          <h3>Cloud</h3>
          <div className="skills_cloud">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Amazon Web Services</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>MicroSoft Azure</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Google Cloud Platform</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Docker</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Kubernetes</h4>
            </article>
          </div>
        </div>
        <div className="skills_other">
          <h3>Other skills</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>System Designing</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>C++</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>SQL</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Agile methodologies</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Linux</h4>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Git, Git Hub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
