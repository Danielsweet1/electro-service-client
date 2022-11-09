import React, {  useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useTitle('Services')

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='my-20 max-w-screen-xl mx-auto'>
            <h1 className='text-5xl font-bold mb-6 text-red-500 text-center'>All Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
                {
                    services.map(service=> <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;