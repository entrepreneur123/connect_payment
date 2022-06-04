import React from "react";
import "../styles/Payment.css";
import path2 from "../assets/p2.png";

import Button from "./Button";

const Payment = () => {
  return (
    <>
      <div className="payments__zero">
        {/* <button className="payments">
            <img src={path1} className="path1" />
            Payments
          </button> */}
        <Button heading="payments" image={path2} color="#1CC984" />
        <div className="payment__container">
          <div className="payments__first">
            <div className="everything">
              <h1 className="heading">Everything Payments Platform</h1>
              <ul className="answerlist__container">
                <li className="answer-list">Blink Overview</li>
                <li className="answer-list">What is Blink</li>
                <li className="answer-list">The Story of payments</li>
              </ul>
            </div>

            <div className="which">
              <h1 className="heading">Which Payment Rails?</h1>
              <ul className="answerlist__container">
                <li className="answer-list">Open Banking </li>
                <li className="answer-list">Credit/Debit Card</li>
                <li className="answer-list">Direct Debit</li>
              </ul>
            </div>

            <div className="Where">
              <h1 className="heading">Where can I Take Payments?</h1>
              <ul className="answerlist__container">
                <li className="answer-list">Physical Terminal</li>
                <li className="answer-list">Take a payment</li>
                <li className="answer-list">iframes/Gateways</li>
                <li className="answer-list">Blink Pages</li>
                <li className="answer-list">Blink Mobile App</li>
                <li className="answer-list">Management Systems</li>
              </ul>
            </div>
          </div>
          <div className="payments__second">
            <div className="action">
              <h1 className="heading">Which Action can I take?</h1>
              <ul className="answerlist__container">
                <li className="answer-list">processing sales</li>
                <li className="answer-list">Request a payment</li>
                <li className="answer-list">Pre-Authorization</li>
                <li className="answer-list">verify</li>
                <li className="answer-list">Delayed Capture</li>
                <li className="answer-list">Batch payments</li>
              </ul>
            </div>
            <div className="howmuch">
              <h1 className="heading">How much can I charge?</h1>
              <ul className="answerlist__container">
                <li className="answer-list">Repeat payments</li>
                <li className="answer-list">Gift Aids</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
