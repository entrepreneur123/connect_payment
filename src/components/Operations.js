import React from "react";
import "../styles/Operations.css";
import Button from "./Button";
import path3 from "../assets/p1.png";
const Operations = () => {
  return (
    <>
      <Button heading="Payment Operations" image={path3} color="#1CC984" />
      <ul>
        <li>What's included in account management</li>
      </ul>
    </>
  );
};

export default Operations;
