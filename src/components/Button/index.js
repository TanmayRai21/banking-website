import React from "react";
import { arrow, blobTop, blobBottom } from "../../assets/Images";

import './styles.scss';

const Button = (props) => {

    const { name, animated } = props;

    return (
      <div className={animated ? "button animated" : "button primary"}>
        {name}
        {animated && (
          <>
            <img src={arrow} alt="" className="arrow" />
            <img src={blobTop} alt="" className="blob1" />
            <img src={blobBottom} alt="" className="blob2" />
          </>
        )}
      </div>
    );
};

export default Button;

