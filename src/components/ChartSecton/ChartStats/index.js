import React from "react";
import './styles.scss';

const ChartStats = (props) => {

    const { name, amount } = props;

    return (
        <div className="charts-stats">
            <p>{name}</p>
            <h4>{amount}</h4>
        </div>
    );
}

export default ChartStats;