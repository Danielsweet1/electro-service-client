import React from 'react';
import Banner from '../Banner/Banner';
import ServiceHome from '../Service/ServiceHome';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
        </div>
    );
};

export default Home;