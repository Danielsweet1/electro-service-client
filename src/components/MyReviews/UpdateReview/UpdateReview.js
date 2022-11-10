import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContexts/AuthProvider";
import { useTitle } from "../../../hooks/useTitle";

const UpdateReview = () => {
    const storedReview = useLoaderData()
    const {user} = useContext(AuthContext)
    const [review, setReview] = useState({})
    useTitle('update review')



    const handleSubmit = (e)=>{
        e.preventDefault()

        fetch(`http://localhost:5000/reviews/${storedReview._id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Updated Successfully')
            }
        })
        .catch(e=>toast.error(e.message))

    }
   
  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = {...review}
    newReview[field] = value;
    setReview(newReview)
  }
  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold mx-8">
        Hello <span className="text-red-500">{user.displayName}</span> .You Can
        Update Your Review here
      </h2>
      <form onSubmit={handleSubmit} className="my-8 mx-3">
        <label>
          <p className="font-semibold">Update Review</p>
          <textarea
            onChange={handleInputChange}
            name="comment"
            defaultValue={storedReview?.review}
            className=" w-1/2 h-36 textarea textarea-secondary block"
            placeholder="Bio"
          ></textarea>
        </label>
        <input
          className="btn bg-red-500 hover:bg-red-700 my-5"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default UpdateReview;
