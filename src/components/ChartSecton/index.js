import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import ChartStats from "./ChartStats";
import AnimatedButton from "../AnimatedButton";
import chart from "../../img/chart.svg";
import "./styles.scss";

export const ChartSection = () => {
  return (
    <InnerLayout>
      <div className="chart-section">
        <div className="chart-section__left">
          <div className="stats">
            <ChartStats name="Balance Amount" amount="$ 10" />
            <ChartStats name="Last Transaction" amount="$ 120" />
          </div>
          <img src={chart} alt="" />
        </div>
        <div className="chart-section__right">
          <h2 className="secondary-heading">Manage your finances</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            libero fugiat possimus voluptatum incidunt voluptate amet laborum
            placeat ullam natus quae id minima, repellat ex?
          </p>
          <AnimatedButton name='Learn More' />
        </div>
      </div>
    </InnerLayout>
  );
};
