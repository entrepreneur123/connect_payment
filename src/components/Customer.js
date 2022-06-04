import React from "react";
import "../styles/Customer.css";
import Button from "./Button";
import path4 from "../assets/p5.png";
import group from "../assets/group.png";

const Customer = () => {
  return (
    <>
      <div className="customer">
        <Button heading="Customer Center" image={path4} color="#1690F8" />
        <ul className="answerlist__container">
          <li className="answer-list">What can merchant customize?</li>
        </ul>
        <img src={group} alt="here" />
      </div>
    </>
  );
};

export default Customer;
