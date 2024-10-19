import React from "react";
import "./About.css";
import aboutimg from "../../assets/about.png";
import play from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutimg} alt="" className="aboutimg" />
        <img src={play} alt="" className="play" />
      </div>
      <div className="about-right">
        <h3>About UNIVErsity</h3>
        <h2>nurturing tomorrows leaders today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus tenetur id, quibusdam facilis maxime eligendi illo
          officiis corporis? Culpa, reprehenderit magni. Sunt quod dicta,
          molestiae cum vel mollitia quas provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo
          optio sapiente, eos cum magni voluptatum tempore assumenda rerum
          consequatur libero dolorem et atque perferendis distinctio at
          doloribus. Omnis, tempora.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo
          optio sapiente, eos cum magni voluptatum tempore assumenda rerum
          consequatur libero dolorem et atque perferendis distinctio at
          doloribus. Omnis, tempora.
        </p>
      </div>
    </div>
  );
};

export default About;
