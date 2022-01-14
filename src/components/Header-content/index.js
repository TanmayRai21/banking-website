import React from "react";
import Button from '../Button';
import phone from "../../img/phone.svg";
import ring1 from "../../img/ring_orange.svg";
import message1 from "../../img/message_pink.svg";
import message2 from "../../img/message_blue.svg";

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
        <img src={ring1} alt="" className="ring1" />
        <img src={message1} alt="" className="message1" />
        <img src={message2} alt="" className="message2" />
      </div>
    </div>
  );
}
