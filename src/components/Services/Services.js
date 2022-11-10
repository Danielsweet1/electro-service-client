import React, {  useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true)
  useTitle("Services");

 
  useEffect(() => {
  
    fetch("https://electro-service-server.vercel.app/services")
      .then((res) => {
        return res.json()
    })
      .then((data) => {
          if(data.length > 0){
              setServices(data);
              setLoader(false)
        }
        else{
            setLoader(true)
        }
      });
  }, []);

  if (loader) {
    return (
      <div className="w-full flex justify-center h-60 items-center">
        <button className="btn loading btn-outline border border-red-500">
          loading....
        </button>
      </div>
    );
  }

  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-red-500 text-center">
        All Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
