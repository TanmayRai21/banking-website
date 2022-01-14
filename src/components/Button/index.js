import React from "react";

import arrow from "../../img/arrow.svg";
import blob1 from "../../img/blob_top.svg";
import blob2 from "../../img/blob_bottom.svg";

import './styles.scss';

const Button = (props) => {

    const { name, animated } = props;

    return (
      <div className={animated ? "button animated" : "button primary"}>
        {name}
        {animated && (
          <>
            <img src={arrow} alt="" className="arrow" />
            <img src={blob1} alt="" className="blob1" />
            <img src={blob2} alt="" className="blob2" />
          </>
        )}
      </div>
    );
};

export default Button;

