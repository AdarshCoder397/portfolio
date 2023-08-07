import React from "react";
import './home.css'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/adarsh.code/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/adarsh397k/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/AdarshCoder397"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
