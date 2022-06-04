import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  return (
    <div className={`payments ${props.colorName}`}>
      <div className="image__section">
        <img src={props.image} className="path1" alt="icon" />
      </div>

      <div>{props.heading}</div>
    </div>
  );
};

export default Button;
