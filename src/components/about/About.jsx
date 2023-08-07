import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.jpg'
import Info from './Info'
 

const About = () => {
  return (
    <section className="about section" id="about">
         <h2 className="section__title">
        About me
         </h2>
         <span className="section__subtitle">
            Who am i?
         </span>
         <div className="about__container container grid">
          <img src={AboutImg} alt="" className='about__img'/>
          <div className="about__data">
            <Info />
            <p className='about__description'>I am a passionate and dedicated web developer. Through impactful websites, I strive to revolutionize online experiences, leaving a positive mark on countless lives. I believe in inspiring change, one website at a time, using technology for the greater good.</p>
            <a target={"_blank"} href={'https://linkedin.com/'} className="button button--flex">Book a call</a>
          </div>
         </div>
    </section>
  )
}

export default About