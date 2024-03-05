/** @format */

import React from "react";
import "./footer.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaHackerrank } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/samarth-patel-8572a0232">
          <FaHackerrank />
        </a>
        <a href="https://www.linkedin.com/in/samarth-patel-8572a0232">
          <FaLinkedin />
        </a>
        <a href="https://github.com/samarth-148">
          <FaGithub />
        </a>
        <a href="mailto:samarth.patel1408@gmail.com">
          <MdEmail />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Samarth Patel. All rights reserved. </small>
      </div>
    </footer>
  );
}

export default Footer;
