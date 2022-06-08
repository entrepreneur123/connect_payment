import React from "react";
import "../styles/Payment.css";
import path2 from "../assets/p2.png";
import { ELEMENT } from "../utils/mockdata/Data";
import Answermap from "./Answermap";

import Button from "./Button";

const Payment = () => {
  console.log(ELEMENT);
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
              <div className="answerlist__container">
                {ELEMENT[0].map((val, key) => (
                  <Answermap key={key} Answer={val} />
                ))}
              </div>
            </div>

            <div className="which">
              <h1 className="heading">Which Payment Rails?</h1>
              <div className="answerlist__container">
                {ELEMENT[1].map((val, key) => (
                  <Answermap key={key} Answer={val} />
                ))}
              </div>
            </div>

            <div className="Where">
              <h1 className="heading">Where can I Take Payments?</h1>
              <div className="answerlist__container">
                {ELEMENT[2].map((val, key) => (
                  <Answermap key={key} Answer={val} />
                ))}
              </div>
            </div>
          </div>
          <div className="payments__second">
            <div className="action">
              <h1 className="heading">Which Action can I take?</h1>
              <div className="answerlist__container">
                {ELEMENT[3].map((val, key) => (
                  <Answermap key={key} Answer={val} />
                ))}
              </div>
            </div>
            <div className="howmuch">
              <h1 className="heading">How much can I charge?</h1>
              <div className="answerlist__container">
                {ELEMENT[4].map((val, key) => (
                  <Answermap key={key} Answer={val} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
