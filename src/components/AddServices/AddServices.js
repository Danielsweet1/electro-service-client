import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/authContexts/AuthProvider";
import { useTitle } from "../../hooks/useTitle";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  useTitle('Add Service')

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.name.value;
    const photo = form.photo.value;
    const rating = form.rating.value
    const email = user?.email;
    const description = form.description.value;
    const price = form.price.value;
    const service = {
      serviceName,
      photo,
      price,
      rating,
      description,
    };
    fetch("https://electro-service-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service Added Successfullly");
          form.reset()
        } else {
          toast.error("service add failed");
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto my-16 font-bold">
      <div>
        <h2 className="text-5xl text-red-500 text-center font-bold mb-5">
          Add Service
        </h2>
      </div>
      <form
        className="bg-slate-100 py-12 p-5 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <label>
            Service Name:
            <input
              type="text"
              placeholder="service name"
              name="name"
              className="input input-bordered input-primary w-full "
              required
            />
          </label>
          <label htmlFor="">
            Photo Url:
            <input
              type="text"
              placeholder="service image"
              name="photo"
              className="input input-bordered input-primary w-full "
              required
            />
          </label>
          <label htmlFor="">
            Service Price:
            <input
              type="text"
              placeholder="price"
              name="price"
              className="input input-bordered input-primary w-full"
              required
            />
          </label>
          <label htmlFor="">
            Email:
            <input
              type="email"
              placeholder="Type here"
              readOnly
              defaultValue={user?.email}
              className="input input-bordered input-primary w-full "
            />
          </label>
          <label htmlFor="">
            Rating:
            <input
              type="text"
              placeholder="rating"
              name="rating"
              className="input input-bordered input-primary w-full block "
              required
            />
          </label>
        </div>
        <div className="my-5">
          <label htmlFor="" >
            Service Description:
            <textarea
              name="description"
              className="textarea textarea-primary w-full h-20"
              placeholder="description"
              required
            ></textarea>
          </label>
        </div>
        <input
          className="btn bg-red-500 hover:bg-red-700 w-28 my-5"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddServices;
