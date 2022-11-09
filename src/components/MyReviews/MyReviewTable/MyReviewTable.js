import React from "react";

const MyReviewTable = ({ r, handleDelete }) => {
  const { userName, userImage, review, _id ,serviceName} = r;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={userImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{userName}</div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>
        <p>{review}</p>
      </td>
      <td>
        <button className="btn btn-outline btn-primary">Edit</button>
      </td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default MyReviewTable;
