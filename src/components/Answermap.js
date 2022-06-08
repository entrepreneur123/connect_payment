import React from "react";
import image from "../assets/image/ellipse1.png";

const Answermap = (props) => {
  return (
    <div className="answer-list">
      <div className="image">
        <img src={image} />
      </div>

      <div>{props.Answer}</div>
    </div>
  );
};

export default Answermap;
