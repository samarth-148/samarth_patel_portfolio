/** @format */

import React from "react";
import CV from "../../assets/Samarth_Patel_Resume.pdf";
import "./header.css";
function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
