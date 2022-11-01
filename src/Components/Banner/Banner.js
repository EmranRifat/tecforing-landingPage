import React from "react";
import banner from "../../assets/images/header.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="" />
      <div className="absolute  text-white">
        <p className="font-semibold">TURN YOUR PASSION INTO A CAREER</p>
        <h1 className="font-bold text-3xl">WORK AT TECHFORING LIMITED</h1>
        <p>Learn About Us.</p>
      </div>
    </div>
  );
};

export default Banner;
