import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.scss";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components";

const App = () => {
  //aos initialization
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
