import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { serviceName, price, rating, img, description, _id } = service;
  return (
    <div>
      <div className="card card-compact rounded-xl w-full bg-base-100 border shadow-xl">
        <figure>
          <img className="h-60 w-80 rounded-xl mt-5" src={img} alt="Services" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold ">{serviceName}</h2>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">
              Price: <span className="text-red-500">${price}</span>
            </p>
            <p className="font-bold">
              Rating: <span className="text-orange-500">{rating}</span>
            </p>
          </div>
          <p>{description?.slice(0, 100) + "...."}</p>
          <div className="">
            <Link to={`/services/${_id}`}> 
              <button className="btn bg-red-500 hover:bg-red-700 border-none my-3">
                Check Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
