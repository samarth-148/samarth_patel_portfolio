/** @format */

import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/samarth.png";
import HeaderSocials from "./HeaderSocials";
import { FaArrowAltCircleDown } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Samarth Patel</h1>
        <h5 className="text-light"> Full Stack Developer</h5>
        <CTA />
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll_down">
          <FaArrowAltCircleDown />
        </a>
      </div>
    </header>
  );
}

export default Header;
