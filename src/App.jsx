import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testi from "./components/Testimonials/Testi";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="containers">
        <Title subtitle="Our Programs" title="WHAT WE OFFER" />
        <Programs />
        <About />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="Testimonials" title="What Student Says" />
        <Testi />
        <Title subtitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
