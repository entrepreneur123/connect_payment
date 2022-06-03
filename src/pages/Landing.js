import React from "react";
import Content from "../components/Content";
import Payment from "../components/Payment";
import Reporting from "../components/Reporting";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <Content />
      <Payment />
      <Reporting />
    </div>
  );
};

export default Landing;
