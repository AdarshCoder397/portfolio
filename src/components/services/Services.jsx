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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nobis non pariatur magnam dicta molestiae recusandae beatae
                soluta quisquam rem! Quisquam repellendus, velit dolorem
                doloremque sapiente commodi nisi, fugiat veniam a ad corrupti
                totam odio reiciendis! Consectetur consequatur soluta tempore
                excepturi alias vel omnis at amet, libero nostrum atque quam
                architecto. Ad distinctio ratione ipsam molestias praesentium,
                odio fugit illo ea fuga quibusdam pariatur? Fugit repellat
                incidunt doloremque.
              </span>
            </div>
            <div className="services__content-img"></div>
          </div>
          {/* buto */}
        </div>
      </div>
    </section>
  );
};

export default Services;
