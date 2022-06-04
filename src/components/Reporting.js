import React from "react";
import Button from "./Button";
import Customer from "./Customer";
import Operations from "./Operations";
import path1 from "../assets/p4.png";
import "../styles/Reporting.css";

const Reporting = () => {
  return (
    <>
      <div className="reporting">
        <Button
          heading="Reporting & Analytics"
          image={path1}
          colorName="yellow"
        />
        <ul className="answerlist__container">
          <li className="answer-list">Reporting and Analytics Overview</li>
          <li className="answer-list">Reports</li>
          <li className="answer-list">Scheduled Reporting</li>
          <li className="answer-list">Transaction history</li>
          <li className="answer-list">Bank Reconciliation</li>
        </ul>
        <Operations />
        <Customer />
      </div>
    </>
  );
};

export default Reporting;
