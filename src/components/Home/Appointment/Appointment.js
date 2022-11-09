import React from 'react';
import electrician from '../../../images/electrician.jpg'

const Appointment = () => {
    return (
        <div className='my-16'>
            <div className='grid grid-cold-1 md:grid-cols-2 '>
                <div className=' bg-blue-900 p-5 py-10 rounded-md'>
                    <h2 className='text-4xl font-bold text-center text-white mb-12'>SHEDULE APPOINTMENT</h2>
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Street" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <input className='btn bg-red-500 hover:bg-red-700' type="submit" value="Submit Now" />
                    </form>
                </div>
                <div>
                    <img className='w-full h-full' src={electrician} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Appointment;