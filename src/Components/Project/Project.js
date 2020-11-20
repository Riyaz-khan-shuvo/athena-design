import React from "react";
import img1 from "../../images/img1.png";
import './Project.css'
const Project = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={img1} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 right bg-image">
          <h1> Stay Running & Project </h1>
          <p>
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </p>
          <button className="btn">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
