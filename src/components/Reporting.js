import React from "react";
import Button from "./Button";
import Customer from "./Customer";
import Operations from "./Operations";
import path1 from "../assets/p4.png";
import "../styles/Reporting.css";
import { ELEMENT } from "../utils/mockdata/Data";
import Answermap from "./Answermap";

const Reporting = () => {
  return (
    <>
      <div className="reporting">
        <Button
          heading="Reporting & Analytics"
          image={path1}
          colorName="yellow"
        />
        <div className="answerlist__container">
          {ELEMENT[5].map((val, key) => (
            <Answermap key={key} Answer={val} />
          ))}
        </div>
        <Operations />
        <Customer />
      </div>
    </>
  );
};

export default Reporting;
