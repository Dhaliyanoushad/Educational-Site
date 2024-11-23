import React, { useRef } from "react";
import "./Testi.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import u1 from "../../assets/user-1.png";
import u2 from "../../assets/user-2.png";
import u3 from "../../assets/user-3.png";
import u4 from "../../assets/user-4.png";

const Testi = () => {
  const slider = useRef();
  let tx = 0;
  const slideforw = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideback = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testi">
      <img src={next_icon} alt="" className="next-btn" onClick={slideforw} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideback} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u1} alt="" />
                <div>
                  <h3>Maya S.</h3>
                  <span>EduFy Vadakara</span>
                </div>
              </div>
              <div>
                <p>
                  "The teachers here are truly dedicated to every student's
                  success. They made difficult topics easy to understand and
                  always encouraged me to do my best!"
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>EduFy Vadakara</span>
                </div>
              </div>
              <div>
                <p>
                  "The friendly and motivating environment made learning
                  enjoyable. I felt more prepared and confident for my exams
                  than ever before!"
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u3} alt="" />
                <div>
                  <h3> Emily R.</h3>
                  <span>EduFy Vadakara</span>
                </div>
              </div>
              <div>
                <p>
                  "I used to struggle with math, but the patient guidance I
                  received here made a world of difference. Now, it's one of my
                  favorite subjects!"
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u4} alt="" />
                <div>
                  <h3>Michael T.</h3>
                  <span>EduFy Vadakara</span>
                </div>
              </div>
              <div>
                <p>
                  "The clarity and depth of the lessons were amazing. I feel so
                  much more confident in my skills now!"
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testi;
