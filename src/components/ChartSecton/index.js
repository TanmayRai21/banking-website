import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import ChartStats from "./ChartStats";
import Button from "../Button";
import { chart } from "../../assets/Images";
import "./styles.scss";
import { Bounce, Flip } from "react-reveal";

export const ChartSection = () => {
  return (
    <InnerLayout>
      <div className="chart-section">
        <Bounce left>
          <div className="chart-section__left">
            <div className="stats">
              <ChartStats name="Balance Amount" amount="₹ 9,354" />
              <ChartStats name="Last Transaction" amount="₹ 257" />
            </div>
            <img src={chart} alt="" />
          </div>
        </Bounce>

        <Flip right>
          <div className="chart-section__right">
            <h2 className="secondary-heading">Manage your finances</h2>
            <p>
              <ul>
                <li>Track monthly usage</li>
                <li>Money Transfer</li>
                <li>Track usage pattern</li>
                <li>Freelance/Business Payment</li>
                <li>Pay Credit card bills</li>
                <li>NFC Payments</li>
                <li>Smart over-expense notification</li>
              </ul>
            </p>
            <Button animated={true} name="Learn More" />
          </div>
        </Flip> 
      </div>
    </InnerLayout>
  );
};
