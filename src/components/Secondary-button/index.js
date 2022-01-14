import React from "react";
import "./styles.scss";
import arrow from '../../img/arrow.svg'

const SecondaryButton = (props) => {

    const { name } = props;
  
    return (
        <div className="secondary-btn">
            {name}
            <img src={arrow} alt="" />
        </div>
    );
};

export default SecondaryButton;