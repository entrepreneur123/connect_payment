import React from "react";
import Button from "./Button";
import Customer from "./Customer";
import Operations from "./Operations";
import path1 from "../assets/p4.png";

const Reporting = () => {
  return (
    <>
      <div className="reporting">
        <Button heading="Reporting & Analytics" image={path1} color="#FFAF27" />
        <ul>
          <li>Reporting and Analytics Overview</li>
          <li>Reports</li>
          <li>Scheduled Reporting</li>
          <li>Transaction history</li>
          <li>Bank Reconciliation</li>
        </ul>
        <Operations />
        <Customer />
      </div>
    </>
  );
};

export default Reporting;
