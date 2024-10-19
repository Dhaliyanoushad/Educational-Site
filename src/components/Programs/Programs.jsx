import React from "react";
import "./Programs.css";
import p1 from "../../assets/program-1.png";
import p2 from "../../assets/program-2.png";
import p3 from "../../assets/program-3.png";
import d1 from "../../assets/program-icon-3.png";
import d2 from "../../assets/program-icon-2.png";
import d3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={p1} alt="" />
        <div className="caption absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center flex-col text-white cursor-pointer opacity-0">
          <img src={d1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p2} alt="" />
        <div className="caption absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center flex-col text-white cursor-pointer opacity-0">
          <img src={d2} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p3} alt="" />
        <div className="caption absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center flex-col text-white cursor-pointer opacity-0">
          <img src={d3} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
