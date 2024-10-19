import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="containers">
        <Title subtitle="Our Programs" title="WHAT WE OFFER" />
        <Programs />
      </div>
    </div>
  );
};

export default App;
