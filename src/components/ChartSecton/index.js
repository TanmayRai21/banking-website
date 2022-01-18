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
              <ChartStats name="Balance Amount" amount="$ 10" />
              <ChartStats name="Last Transaction" amount="$ 120" />
            </div>
            <img src={chart} alt="" />
          </div>
        </Bounce>

        <Flip right>
          <div className="chart-section__right">
            <h2 className="secondary-heading">Manage your finances</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
              libero fugiat possimus voluptatum incidunt voluptate amet laborum
              placeat ullam natus quae id minima, repellat ex?
            </p>
            <Button animated={true} name="Learn More" />
          </div>
        </Flip> 
      </div>
    </InnerLayout>
  );
};
