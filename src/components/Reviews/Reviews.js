import React, { useEffect } from "react";

const Reviews = ({ reviews, setReviews, _id }) => {
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((e) => console.log(e.message));
  }, );
  return (
    <div>
      <h2 className="text-xl font-bold text-center">Reviews</h2>

      {reviews.map((review) => (
        <div className="border p-4  my-8" key={review._id}>
          <div className="mb-12">
            <div className="flex justify-start items-center relative ">
              <div className="border p-1 rounded-md absolute left-1 bg-white">
                <img
                  className="w-20 h-20 rounded-full   bg-slate-200 p-1"
                  src={review.userImage}
                  alt="userImage"
                />
              </div>
              <h3 className="font-bold text-xl ml-28">{review.userName}</h3>
            </div>
            <p className="text-sm ml-28">9 May 2022 08:20</p>
          </div>
          <p className="ml-5">{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
