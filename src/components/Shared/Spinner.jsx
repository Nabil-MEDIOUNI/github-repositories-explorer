import React, { Fragment } from "react";
import Spin from "../../assets/loading.gif";

const Spinnerx = () => {
  return (
    <Fragment>
      <img src={Spin} className="spinner" alt="Loading" />
    </Fragment>
  );
};

export default Spinnerx;
