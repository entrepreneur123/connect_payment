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
              <ul>
                <li>Blink Overview</li>
                <li>What is Blink</li>
                <li>The Story of payments</li>
              </ul>
            </div>

            <div className="which">
              <h1 className="heading">Which Payment Rails?</h1>
              <ul>
                <li>Open Banking </li>
                <li>Credit/Debit Card</li>
                <li>Direct Debit</li>
              </ul>
            </div>

            <div className="Where">
              <h1 className="heading">Where can I Take Payments?</h1>
              <ul>
                <li>Physical Terminal</li>
                <li>Take a payment</li>
                <li>iframes/Gateways</li>
                <li>Blink Pages</li>
                <li>Blink Mobile App</li>
                <li>Management Systems</li>
              </ul>
            </div>
          </div>
          <div className="payments__second">
            <div className="action">
              <h1 className="heading">Which Action can I take?</h1>
              <ul>
                <li>processing sales</li>
                <li>Request a payment</li>
                <li>Pre-Authorization</li>
                <li>verify</li>
                <li>Delayed Capture</li>
                <li>Batch payments</li>
              </ul>
            </div>
            <div className="howmuch">
              <h1 className="heading">How much can I charge?</h1>
              <ul>
                <li>Repeat payments</li>
                <li>Gift Aids</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
