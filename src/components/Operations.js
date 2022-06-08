import React from "react";
import "../styles/Operations.css";
import Button from "./Button";
import path3 from "../assets/p1.png";
import { ELEMENT } from "../utils/mockdata/Data";
import Answermap from "./Answermap";
const Operations = () => {
  return (
    <>
      <div className="operation">
        <Button heading="Payment Operations" image={path3} colorName="green" />
        <div className="answerlist__container">
          {/* <li className="answer-list">What's included in account management</li> */}
          {ELEMENT[6].map((val, key) => (
            <Answermap key={key} Answer={val} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Operations;
