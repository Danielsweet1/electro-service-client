import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContexts/AuthProvider";
import signup from "../../../images/signup.webp";
import toast from "react-hot-toast";
import { useTitle } from "../../../hooks/useTitle";

const SignUp = () => {
  const [err, setErr] = useState("");
  useTitle('Signup')
  const { createUser, updateUser, googleLogin,loading } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-full flex justify-center h-60 items-center">
        <button className="btn loading btn-outline border border-red-500">
          loading....
        </button>
      </div>
    );
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const password = form.password.value;
    createUser(email, password)
      .then(() => {
        setErr("");
        updateProfile(name, photo);
        toast.success("User Created Successfully");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => setErr(error.message));
  };

  const updateProfile = (name, photo) => {
    return updateUser(name, photo)
      .then(() => {})
      .catch((e) => console.log(e));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful");
        navigate(from, { replace: true });
      })
      .catch((e) => setErr(e.message));
  };

  return (
    <div className="my-12">
      <div className="hero">
        <div className="hero-content w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 ">
          <div className="text-center">
            <img className="w-full" src={signup} alt="" />
          </div>
          <div className="card mx-auto  w-full shadow-lg bg-base-100">
            <h2 className="text-5xl text-center font-bold mt-5 text-red-500">
              Sign Up
            </h2>
            <form onSubmit={handleSignUp} className="card-body">
              <p className="text-center text-red-500 my-2">
                <small>{err}</small>
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
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
                  required
                />
                <p>
                  <small>
                    <Link to="/login">Already Have an Account?</Link>
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-red-500 hover:bg-red-700 border-none"
                >
                  SignUp
                </button>
              </div>
            </form>
            <button onClick={handleGoogle} className="btn btn-outline w-2/3 mx-auto mb-5">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
