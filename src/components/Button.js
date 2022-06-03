import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  return (
    <div className="payments">
      <img src={props.image} className="path1" alt="icon" />
      <div>{props.heading}</div>
    </div>
  );
};

export default Button;
