import React from "react";
import Button from '../Button';
import { phone, ringOrange, messageBlue, messagePink } from "../../assets/Images";

import './styles.scss';

export const HeaderContent = () => {
  return (
    <div className="content">
      <div className="content__left">
        <div className="left-text-container">
          <h1>Smart banking for freelancers</h1>
          <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            molestiae minus dicta ipsum atque est qui vel illo magni voluptates
            esse, e x commodi corporis quos odio libero temporibus, eveniet
            nisi.
          </p>
          <Button animated={true} name="Register Now" />
        </div>
      </div>
      <div className="content__right">
        <img src={phone} alt="" className="phone" />
        <img src={ringOrange} alt="" className="ring1" />
        <img src={messagePink} alt="" className="message1" />
        <img src={messageBlue} alt="" className="message2" />
      </div>
    </div>
  );
}
