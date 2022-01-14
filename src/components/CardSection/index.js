import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import card from "../../img/creditcard.svg";
import "./styles.scss";

export const CardSection = () => {
  return (
    <InnerLayout>
      <div className="card-section">
        <div className="card-section__left">
          <h2 className="secondary-heading">One Card for all payments</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam
            praesentium, id at blanditiis quibusdam illum? Dignissimos vero
            repellat consectetur tenetur quae omnis repudiandae illo.
          </p>
        </div>
        <div className="card-section__right">
          <img src={card} alt="" />
        </div>
      </div>
    </InnerLayout>
  );
};
