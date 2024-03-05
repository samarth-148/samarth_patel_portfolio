/** @format */

import React from "react";
import { FaLinkedin, FaHackerrank } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function HeaderSocials() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/samarth-patel-8572a0232"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/samarth-148" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.hackerrank.com/profile/samarth_patel141"
        target="_blank"
      >
        <FaHackerrank />
      </a>
      <a href="mailto:samarth.patel1408@gmail.com" target="_blank">
        <SiGmail />
      </a>
    </div>
  );
}

export default HeaderSocials;
