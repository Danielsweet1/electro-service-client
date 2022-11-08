import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/home/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return <div>
    <h1 className="font-bold text-5xl text-center">Popular Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
        {
            services.map(service=> <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
    </div>
    <Link className="" to='/services'><button className="btn btn-outline btn-warning">See All</button></Link>

  </div>;
};

export default Service;
