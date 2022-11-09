import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContexts/AuthProvider";
import login from "../../../images/login.jpg";
import toast from 'react-hot-toast';
import { useTitle } from "../../../hooks/useTitle";


const Login = () => {
  const [err, setErr] = useState('')
  const {logIn, googleLogin} = useContext(AuthContext)
  useTitle('Login')

const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/'
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
    .then(result=> {
      const user = result.user;
      const currentUser = {
        email: user?.email
      }
      fetch('http://localhost:5000/jwt',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        localStorage.setItem('electro-token', data.token)
      })
      toast.success('Successfully Logged In')
      setErr('')
      form.reset()
      navigate(from,{replace: true})
    })
    .catch(e=> {
      toast.error(e.message)
      setErr(e.message)
    })
  };

  const handleGoogle = () =>{
      googleLogin()
      .then(()=>{
        toast.success('Google Login Successful')
        navigate(from,{replace: true})
      })
      .catch(e=>setErr(e.message))
  }

  return (
    <div className="my-12">
      <div className="hero ">
        <div className="hero-content w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-center">
            <img className="w-full" src={login} alt="" />
          </div>
          <div className="card mx-auto w-full shadow-2xl bg-base-100">
            <h2 className="text-5xl text-center font-bold m-5 text-red-500">
              Please Login
            </h2>
            <form onSubmit={handleLogin} className="card-body">
            <p className="text-center text-red-500 my-2"><small>{err}</small></p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
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
            <button onClick={handleGoogle} className="btn btn-outline w-2/3 mx-auto mb-3">Google</button>
            <p className="mb-5 text-center"><Link to='/signup'>Create New Account? <span className="text-red-500">Signup</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
