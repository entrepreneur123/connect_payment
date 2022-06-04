import React from "react";
import "../styles/Operations.css";
import Button from "./Button";
import path3 from "../assets/p1.png";
const Operations = () => {
  return (
    <>
      <div className="operation">
        <Button heading="Payment Operations" image={path3} colorName="green" />
        <ul className="answerlist__container">
          <li className="answer-list">What's included in account management</li>
        </ul>
      </div>
    </>
  );
};

export default Operations;
