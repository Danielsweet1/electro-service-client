import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/authContexts/AuthProvider";
import { useTitle } from "../../hooks/useTitle";
import MyReviewTable from "./MyReviewTable/MyReviewTable";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useTitle('My Reviews')

  
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are You Sure To Delete?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = myReviews.filter(rw=>rw._id !== _id)
            setMyReviews(remaining)
            toast.success("Delete Successful");
          }
        })
        .catch((e) => toast.error(e.message));
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem('electro-token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          logOut()
        }
        return res.json()
      })
      .then((data) => {
          setMyReviews(data);
      })
      .catch((e) => toast.error(e.message));
  }, [user?.email, logOut]);

  return (
    <div className="my-16">
      <div className=" w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Service Name</th>
        <th>review</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
           myReviews.length > 0 ?
           myReviews.map(r=><MyReviewTable
             key={r._id}
              r={r}
              handleDelete={handleDelete}></MyReviewTable>)
           :
           <tr className=" h-40 ">
            <td className="text-3xl font-bold text-center">No reviews were added</td>
           </tr>
        }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyReviews;
