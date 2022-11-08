import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceName, img, price, rating, description } = useLoaderData();
  return (
    <div className="my-12">
      <div className="card max-w-screen-lg border mx-auto  bg-base-100 shadow-xl">
        <figure>
          <img className="w-2/3 mt-10 rounded-xl" src={img} alt="Service" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{serviceName}</h2>
          <div className="flex justify-evenly">
          <p className="text-xl font-bold">Price: <span className="text-red-500">${price}</span></p>
          <p className="font-bold">Rating: <span className="text-orange-500">{rating}</span></p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
