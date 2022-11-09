import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const ServiceHome = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/home/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="font-bold text-red-500 text-2xl">Services</h2>
        <h1 className="font-bold text-5xl mb-5">Browse Popular Services</h1>
        <p >
          We have many electronic services. here are the most popular services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-5 my-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center my-5">
        <Link className="" to="/services">
          <button className="btn border-none  bg-red-500 hover:bg-red-700">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceHome;
