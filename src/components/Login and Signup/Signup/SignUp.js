import React from "react";

const SignUp = () => {

    const handleSignUp = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
    
        
      }
    
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content  grid grid-cols-1 md:grid-cols-2 ">
          <div className="card  w-96 shadow-2xl bg-base-100">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
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
          <div className="text-center">
            <h2>hello</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
