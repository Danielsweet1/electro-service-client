import React, { useEffect } from 'react';

const Reviews = ({reviews, setReviews}) => {

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=> setReviews(data))
        .catch(e=>console.log(e.message))
    },[setReviews])
    return (
        <div>
            <h2 className='text-xl font-bold text-center'>Reviews</h2>

            {
                reviews.map(review=> <div className='border p-4 m-4' key={review._id}>

                    <div className='flex justify-start items-center mb-8'>
                        <img className='w-16 rounded-full' src={review.userImage} alt="" />
                        <h3 className='font-bold text-2xl ml-8'>{review.userName}</h3>
                    </div>
                    <p className='ml-5'>{review.review}</p>
                </div>)
            }
        </div>
    );
};

export default Reviews;