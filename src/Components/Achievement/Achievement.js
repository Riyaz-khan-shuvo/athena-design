import React from "react";
import happy from "../../images/happy.png";
import marketing from "../../images/marketing@2x.png";
import "./Achievement.css";
const Achievement = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-5">
          <h1>Our Achievements</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </p>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-6 left">
                <img src={marketing} alt="happy" />
              </div>
              <div className=" col-md-6 right">
                <h1>700+</h1>
                <h5>Happy clients</h5>
              </div>
            </div>
            <div className="col-md-6">
            <div className="col-md-6 left">
                <img src={marketing} alt="happy" />
              </div>
              <div className=" col-md-6 right">
                <h1>700+</h1>
                <h5>Happy clients</h5>
              </div>
            </div>
            <div className="col-md-6">
            <div className="col-md-6 left">
                <img src={marketing} alt="happy" />
              </div>
              <div className=" col-md-6 right">
                <h1>700+</h1>
                <h5>Happy clients</h5>
              </div>
            </div>
            <div className="col-md-6">
            <div className="col-md-6 left">
                <img src={marketing} alt="happy" />
              </div>
              <div className=" col-md-6 right">
                <h1>700+</h1>
                <h5>Happy clients</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
