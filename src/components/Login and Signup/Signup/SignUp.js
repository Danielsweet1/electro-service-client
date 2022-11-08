import React from "react";
import { Link } from "react-router-dom";
import signup from "../../../images/signup.webp";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="my-12">
      <div className="hero">
        <div className="hero-content  grid grid-cols-1 md:grid-cols-2 ">
          <div className="text-center">
            <img src={signup} alt="" />
          </div>
          <div className="card mx-auto  w-96 shadow-2xl bg-base-100">
            <h2 className="text-5xl text-center font-bold m-5 text-red-500">
              Please Sign Up
            </h2>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p><small><Link to='/login'>Already Have an Account?</Link></small></p>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-red-500 hover:bg-red-700 border-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
