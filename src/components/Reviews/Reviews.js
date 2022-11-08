import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=> setReviews(data))
        .catch(e=>console.log(e.message))
    },[])
    return (
        <div>
            reviews{}
        </div>
    );
};

export default Reviews;