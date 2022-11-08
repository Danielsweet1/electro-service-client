import React from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "../../Reviews/AddReview/AddReview";
import Reviews from "../../Reviews/Reviews";

const ServiceDetails = () => {
  const { serviceName, img, price, rating, description } = useLoaderData();
  return (
    <div className="my-12 max-w-screen-xl">
      <div className="card max-w-screen-lg border mx-auto  bg-base-100 shadow-xl">
        <figure>
          <img className="w-2/3 mt-10 rounded-xl" src={img} alt="Service" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{serviceName}</h2>
          <div className="flex justify-evenly">
            <p className="text-xl font-bold">
              Price: <span className="text-red-500">${price}</span>
            </p>
            <p className="font-bold">
              Rating: <span className="text-orange-500">{rating}</span>
            </p>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <h2 className="text-center text-red-500 text-4xl my-6 font-bold">
          Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-8">
          <AddReview></AddReview>
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
