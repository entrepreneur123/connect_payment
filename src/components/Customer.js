import React from "react";
import "../styles/Customer.css";
import Button from "./Button";
import path4 from "../assets/p5.png";
import group from "../assets/group.png";

const Customer = () => {
  return (
    <>
      <Button heading="Customer Center" image={path4} color="#1690F8" />
      <ul>
        <li>What can merchant customize?</li>
      </ul>
      <img src={group} alt="here" />
    </>
  );
};

export default Customer;
