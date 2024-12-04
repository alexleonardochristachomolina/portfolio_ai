import React from "react";
import AboutSVG from "../../assets/images/about.jpg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
                        Hello! I'm a passionate Generative AI Developer with a strong background in machine learning, natural language processing, and computer vision. My journey in the tech world began with a fascination for how algorithms can mimic human creativity, and over the years, I've honed my skills in developing innovative solutions that leverage the power of AI.
          </p>

          <p>
            I spend my time learning on technology especially AI I consistently learn the concepts and tools behind and
            building projects around it.
          </p>

          
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
