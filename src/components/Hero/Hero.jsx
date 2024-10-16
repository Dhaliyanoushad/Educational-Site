import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero containers flex items-center justify-center">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ut
          iste reiciendis facilis maiores consequuntur provident quibusdam aut
          sint saepe?
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" className="w-[20px] ml-4" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
