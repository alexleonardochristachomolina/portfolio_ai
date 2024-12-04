import React from "react";
import Connection from "../../assets/images/connections.svg";

import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me.
          </p>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Cennections" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
