import React, { Fragment } from 'react';
import '../404.css';

const NotFound = () => {
  return (
    <>
      <section>
        <div className="ufo-container">
          <div className="lifting-ray-container">
            <div className="lifting-ray" />
            <div className="lifting-ray-overlay" />
          </div>
          <div className="ufo">
            <div className="ufo-glass">
              <div className="alien">
                <div className="alien-eye alien-eye-left" />
                <div className="alien-eye alien-eye-right" />
                <div className="alien-mouth" />
              </div>
            </div>
            <div className="ufo-bottom" />
            <div className="ufo-ring">
              <div className="ufo-ring-light" />
              <div className="ufo-ring-light" />
              <div className="ufo-ring-light" />
              <div className="ufo-ring-light" />
              <div className="ufo-ring-light" />
              <div className="ufo-ring-light" />
              <div className="ufo-ring-light" />
              <div className="ufo-ring-light" />
            </div>
          </div>
        </div>

        <h1> The page is out there </h1>

        <div className="number number-left"> 4 </div>
        <div className="number number-right"> 4 </div>

        <div className="my-planet">
          <div className="my-planet-rings my-planet-rings-back" />
          <div className="my-planet-ellipsis-container">
            <div className="my-planet-counter-rotation-container">
              <div className="my-planet-planet">
                <div className="my-planet-face">
                  <div className="my-planet-eye my-planet-eye-left" />
                  <div className="my-planet-eye my-planet-eye-right" />
                  <div className="my-planet-mouth" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-planet-rings my-planet-rings-front" />
        </div>
      </section>
      <div className="stars" />
      <div className="twinkling" />
    </>
  );
};

export default NotFound;
