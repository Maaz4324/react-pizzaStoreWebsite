import React from "react";
import { Link } from "react-router-dom";
import "../style/About.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            illo blanditiis rerum vitae incidunt?
          </p>
          <Link to="/contact" className="btn btn-about-to-cont">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
