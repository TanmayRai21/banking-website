import React from "react";
import Button from '../Button';
import { phone, ringOrange, messageBlue, messagePink } from "../../assets/Images";
import './styles.scss';
import { Fade, Flip } from "react-reveal";

export const HeaderContent = () => {
  return (
    <div className="content">
      <Fade left cascade>
        <div className="content__left">
          <div className="content__left--content">
            <h1>Ultimate Finance Management Solution</h1>
            <p className="white">
              Future is now. Manage all your payment, wallet, finance usage using Unipay.
              Make business payments online and streamline your company budget management with easy to 
              use virtual and physical card ai in one tool.
            </p>
          </div>
        </div>
      </Fade>

      <Flip right >
        <div className="content__right">
          <img src={phone} alt="" className="phone" />
          <img src={ringOrange} alt="" className="ring1" />
          <img src={messagePink} alt="" className="message1" />
          <img src={messageBlue} alt="" className="message2" />
        </div>
      </Flip>     
    </div>
  );
}
