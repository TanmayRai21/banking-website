import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import { creditcard } from "../../assets/Images";
import "./styles.scss";
import { Fade } from "react-reveal";

export const CardSection = () => {
  return (
    <InnerLayout>
      <div className="card-section">
        <Fade left cascade>
          <div className="card-section__left">
            <h2 className="secondary-heading">One Card for all payments</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam
              praesentium, id at blanditiis quibusdam illum? Dignissimos vero
              repellat consectetur tenetur quae omnis repudiandae illo.
            </p>
          </div>
        </Fade>

        <Fade right>
          <div className="card-section__right">
            <img src={creditcard} alt="" />
          </div>
        </Fade>        
      </div>
    </InnerLayout>
  );
};
