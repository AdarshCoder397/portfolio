import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Offerings</h2>
      <span className="section__subtitle">
        What Value can i add to your life?
      </span>
      <div className="services__container container grid">
        <div className="services__content">
          <div className="parent">
            <div className="services__content-info">
              <h2 className="w1">Website Development</h2>
              <span className="section__subtitle">
                Hello there! If you're looking for top-notch web development
                services, you've come to the right place. I offer a wide range
                of website building options to cater to all your needs. Whether
                you need an online store, a professional business site, a
                personal portfolio, or anything else, I've got it covered. My
                goal is to make your website not only look fantastic but also
                help your business thrive. With user-friendly design and the
                latest tech, I'll help you attract more customers, increase
                conversions, and boost your overall success. Let's build
                something amazing together!
              </span>
              <a href="https://calendly.com/adarsh397k/1-1-consultation" target={"_blank"} className="button button-flex">
                Get a Quote
              </a>
            </div>
            <div className="services__content-img">
              <img
                src="https://www.webodesk.com/themes/demo/assets/img/responsive-animation.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
