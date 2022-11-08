import React from "react";
import banner from "../../../images/banner.jpeg";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="hero min-h-screen bg-base-200 rounded-md">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src={banner} className=" rounded-lg h-96 shadow-2xl" alt="banner"/>
          </div>
          <div className="text-center md:text-start">
            <h1 className="text-5xl font-bold">
              <span className="text-4xl">FAST AND RELIABLE</span> <br />
              <span className="text-red-500 font-bolder">
                ELECTRICAL SERVICES
              </span>
            </h1>
            <p className="py-6">
              Looking for the best electrical service at home near you?
              Electro has trusted & skilled electrician.
              Satisfaction guaranteed.
            </p>
            <button className="btn bg-red-500 text-white hover:bg-red-700 border-none">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
