import React, { Fragment } from 'react';
import Spin from '../../assets/loading.gif';

const Spinnerx = () => {
  return (
    <>
      <img src={Spin} className="spinner" alt="Loading" />
    </>
  );
};

export default Spinnerx;
