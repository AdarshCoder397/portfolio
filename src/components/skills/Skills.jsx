import React from "react";
import Dev from "./Dev";
import Eq from "./Eq";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">What do i know?</span>
      <div className="skills__container container grid">
      <Dev />
      <Eq />
      </div>
    </section>
  );
};

export default Skills;
