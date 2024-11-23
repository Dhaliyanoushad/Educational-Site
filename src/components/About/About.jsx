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
        <h3>About University</h3>
        <h2>Nurturing tomorrows leaders today</h2>
        <p>
          "At our core, we believe in nurturing tomorrow's leaders today. By
          providing a supportive and enriching environment, we aim to empower
          students with the knowledge, skills, and confidence they need to
          thrive. Our approach focuses not just on academic excellence, but also
          on developing critical thinking, creativity, and leadership qualities.
          With personalized guidance and a commitment to every student's growth,
          we are dedicated to shaping the next generation of leaders who will
          make a positive impact on the world."
        </p>
        <p>
          Our mission is to nurture the leaders of tomorrow by providing a
          strong foundation today. Through a blend of innovative teaching
          methods, mentorship, and a focus on holistic growth, we help students
          develop the skills and character needed to thrive in a rapidly
          changing world. We believe that every child has the potential to lead,
          and with the right support, they can achieve their dreams and make a
          positive impact on society.
        </p>
      </div>
    </div>
  );
};

export default About;
