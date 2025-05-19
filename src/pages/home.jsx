import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Services from "../components/services";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      {" "}
      <Hero />
      <About />
      <Contact />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
