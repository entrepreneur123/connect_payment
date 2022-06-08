import React from "react";
import "../styles/Customer.css";
import Button from "./Button";
import path4 from "../assets/p5.png";
import group from "../assets/group.png";
import { ELEMENT } from "../utils/mockdata/Data";
import Answermap from "./Answermap";

const Customer = () => {
  return (
    <>
      <div className="customer">
        <Button heading="Customer Center" image={path4} color="#1690F8" />
        <div className="answerlist__container">
          {/* <li className="answer-list">What can merchant customize?</li> */}
          {ELEMENT[7].map((val, key) => (
            <Answermap key={key} Answer={val} />
          ))}
        </div>
        <img src={group} alt="here" />
      </div>
    </>
  );
};

export default Customer;
