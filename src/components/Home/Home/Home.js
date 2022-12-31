import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import CustomerReview from '../customerReview/CustomerReview';
import Electricians from '../Electricians/Electricians';
import ServiceHome from '../Service/ServiceHome';

const Home = () => {
    useTitle('Home')
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <Electricians/>
            <Appointment></Appointment>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;