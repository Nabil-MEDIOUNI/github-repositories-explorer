import React, { Fragment } from "react";
import '../404.css'
const NotFound = () => {
  return (
    <Fragment>
      <section>
        <div class="ufo-container">
          <div class="lifting-ray-container">
            <div class="lifting-ray"></div>
            <div class="lifting-ray-overlay"></div>
          </div>
          <div class="ufo">
            <div class="ufo-glass">
              <div class="alien">
                <div class="alien-eye alien-eye-left"></div>
                <div class="alien-eye alien-eye-right"></div>
                <div class="alien-mouth"></div>
              </div>
            </div>
            <div class="ufo-bottom"></div>
            <div class="ufo-ring">
              <div class="ufo-ring-light"></div>
              <div class="ufo-ring-light"></div>
              <div class="ufo-ring-light"></div>
              <div class="ufo-ring-light"></div>
              <div class="ufo-ring-light"></div>
              <div class="ufo-ring-light"></div>
              <div class="ufo-ring-light"></div>
              <div class="ufo-ring-light"></div>
            </div>
          </div>
        </div>

        <h1> The page is out there </h1>

        <div class="number number-left"> 4 </div>
        <div class="number number-right"> 4 </div>

        <div class="my-planet">
          <div class="my-planet-rings my-planet-rings-back"></div>
          <div class="my-planet-ellipsis-container">
            <div class="my-planet-counter-rotation-container">
              <div class="my-planet-planet">
                <div class="my-planet-face">
                  <div class="my-planet-eye my-planet-eye-left"></div>
                  <div class="my-planet-eye my-planet-eye-right"></div>
                  <div class="my-planet-mouth"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-planet-rings my-planet-rings-front"></div>
        </div>
      </section>
      <div class="stars"></div>
      <div class="twinkling"></div>
    </Fragment>
  );
};

export default NotFound;
