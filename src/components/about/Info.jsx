import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1.5 Years</span>
      </div>
      <div className="about__box">
      <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20+ Projects</span>
      </div>
      <div className="about__box">
      <i className="bx bx-laptop about__icon"></i>
        <h3 className="about__title">Service</h3>
        <span className="about__subtitle">Website Development</span>
      </div>
    </div>
  );
};

export default Info;
