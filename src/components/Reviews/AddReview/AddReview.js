import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/authContexts/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const addReview = (e) => {
    e.preventDefault();
    const reviewText = e.target.text.value;
    const review = {
      user,
      review: reviewText,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <div>
        {user?.uid ? (
          <>
            <form onSubmit={addReview}>
              <label htmlFor="">
                <p className="font-bold">Add Your Review:</p>
                <textarea
                  className="textarea textarea-secondary h-36 w-full"
                  placeholder="review"
                  name="text"
                ></textarea>
              </label>
              <input
                className="btn bg-red-500 hover:bg-red-700 border-none px-8"
                type="submit"
                value="Add"
              />
            </form>
          </>
        ) : (
          <div className="h-60 flex justify-center items-center">
            <h2 className="text-3xl font-bold ">Login For Add a Review</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddReview;
