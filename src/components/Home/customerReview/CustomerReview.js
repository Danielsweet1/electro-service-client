import React from "react";
import man from "../../../images/man.webp";
import women from "../../../images/women.jpg";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const CustomerReview = () => {
  return (
    <div className="my-20 text-center max-w-screen-xl">
      <p className="text-red-500 font-bold">Our Happy Customer</p>
      <h2 className="text-4xl font-bold my-5">What My Customer Says</h2>
      <p>
        We handle a full range of repairing and maintenance of air conditioning
        systems and use of  professional equipment and best <br /> materials in lower
        price so our clients satisfied.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
        <div className="w-80 border p-5 mx-auto">
          <div className="flex items-center mb-5">
            <div className="border mr-5">
              <img className="w-20 h-20" src={man} alt="" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Jordon</h2>
              <p className="font-bold text-sm">Customer</p>
              <div className="flex text-orange-400 mt-3">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
            </div>
          </div>
          <p>
          We have had good experience with him. And i had retaining wall
          lighting fixtures replace system with new , morden and efficient
          system and it worked fine.
        </p>
        </div>
        <div className="w-80 border p-5 mx-auto">
          <div className="flex items-center mb-5">
            <div className="border mr-5">
              <img className="w-20 h-20" src={women} alt="" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Elizabeth</h2>
              <p className="font-bold text-sm">Customer</p>
              <div className="flex text-orange-400 mt-3">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalfAlt></FaStarHalfAlt>
              </div>
            </div>
          </div>
          <p>
          We have worked with him a while ago. he is very dedicated to his work , I am really satisfied with his service
        </p>
        </div>
        

        
      </div>
    </div>
  );
};

export default CustomerReview;
