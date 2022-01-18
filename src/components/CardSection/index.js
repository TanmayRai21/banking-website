import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import { payment } from "../../assets/Images";
import "./styles.scss";
import { Fade } from "react-reveal";

export const CardSection = () => {
  return (
    <InnerLayout>
      <div className="card-section">
        <Fade left cascade>
          <div className="card-section__left">
            <h2 className="secondary-heading">Unipay for all payments</h2>
            <p>Why should you use Unipay ?
              <ul>
                <li>Easy to use</li>
                <li>Faster Payment</li>
                <li>Lower</li>
                <li>100% secure and trustworthy</li>
              </ul>
              Forget the past. Embrace digitalized future. 
            </p>
          </div>
        </Fade>

        <Fade right>
          <div className="card-section__right">
            <img src={payment} alt="" />
          </div>
        </Fade>        
      </div>
    </InnerLayout>
  );
};
