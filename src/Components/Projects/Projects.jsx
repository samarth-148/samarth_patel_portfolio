/** @format */

import React from "react";
import "./Projects.css";
import IMG1 from "../../assets/Blogify2.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/url-shortner.png";
import IMG4 from "../../assets/denso.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Blogify",
    github: "https://github.com/samarth-148/Blogify",
    demo: "https://react-blogging-website.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React Myntra",
    github: "https://github.com/samarth-148/myntra-clone",
    demo: "https://myntra-shopping-app-clone.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "URL Shortner",
    github: "https://github.com/samarth-148/url-shortner",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Denso Transport",
    github: "https://github.com/samarth-148/Denso-transport",
    demo: "https://densotransport.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container projects_container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="projects_item">
            <div className="projects_item-image">
              <img src={image} alt={title} />
            </div>

            <div className="project_item-cta">
              <h3>{title}</h3>
              <a href={github} className="btn projectbtn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live-Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
