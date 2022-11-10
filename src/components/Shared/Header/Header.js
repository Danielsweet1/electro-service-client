import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {} from "react-icons/ai";
import icon from "../../../images/Electro icon.jpg";
import { AuthContext } from "../../../contexts/authContexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>

        {user?.email && (
          <>
            <Link to='/reviews'>My Reviews</Link>
            <Link to="/addservices">Add Service</Link>
          </>
        )}
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-White  px-5 mb-12 shadow-lg  font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className="flex justify-center items-center ml-10">
            <img className="w-16 rounded-full" src={icon} alt="" />
            <Link to="/" className="btn btn-ghost   normal-case text-xl">
              <p className="md:block hidden">Electro</p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end"></div>
        {user?.email ? (
          <>
          <img className="rounded-full h-12 w-12 mr-5" src={user?.photoURL} alt="img" />
          <Link className="btn bg-red-400 hover:red-700" onClick={logOut}>Logout</Link>
          </>
        ) : (
          <Link className="btn bg-red-400 hover:red-700" to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
