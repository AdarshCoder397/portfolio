import React from "react";
import "./portfolio.css";
import gpt3 from "../../assets/gpt3.gif";
import pizzaHolic from "../../assets/pizza.mp4";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Previous Results</h2>
      <span className="section__subtitle">What can I get you?</span>
      <div className="portfolio__container container grid">
        <div className="portfolio__content"> 
          <div className="parentPortfolio">
            <div className="portfolio__content-img">
              
              <img src={gpt3} className="gptImg" alt="" />
            </div>
            <div className="portfolio__content-info">
              <h2 className="w1">GPT-3 Based SAAS</h2>
              <span className="section__subtitle">
                It is a website that empowers you to leverage the unparalleled
                potential of GPT-3 in crafting truly amazing creations. Unleash
                your creativity and harness the transformative capabilities of
                GPT-3 to build innovative solutions that push boundaries,
                redefine industries, and unlock new realms of possibility. Step
                into a realm of limitless imagination and turn your visionary
                concepts into reality on a platform that harnesses the true
                magic of GPT-3. Welcome to a world where your ideas come to life
                in remarkable ways.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="services__container container grid"
        style={{ marginTop: "2rem" }}
      >
        <div className="services__content">
          <div className="parent">
            <div className="services__content-info">
              <h2 className="w1">Pizza Holic Outlet</h2>
              <span className="section__subtitle">
                It is a website for a pizza outlet called "Pizza Holic,"
                perfectly nestled in the heart of Muzaffarpur, Bihar.A sleek
                navbar for effortless navigation, an insightful "About Us"
                section, and a page dedicated to exciting franchise
                possibilities. Embrace flavor, convenience, and opportunity all
                in one place.
              </span>
            </div>
            <div className="services__content-img">
            {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7013750804939464704?compact=1" height="196" width="360" frameborder="0" allowfullscreen="" title="Embedded post" style={{borderRadius:"1rem",marginLeft:"2rem"}}></iframe> */}
            <video src={pizzaHolic} className="pizzaVid" loop onLoadStart={true}></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
