import React from "react";
import { Link } from "react-router-dom";
import footer from '../../../images/Electro icon.jpg'

const Footer = () => {
  return (
    <div className=" bg-red-700 py-3">
      <footer className="footer p-10 text-white">
        <div>
          <img className="w-16 rounded-full" src={footer} alt="" />
          <p>
          Electro Service Ltd
            <br />
            Providing reliable service since 2010
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Electric Maintaince</Link>
          <Link className="link link-hover">Shortcircuit Repair</Link>
          <Link className="link link-hover">Faulty and old Wiring</Link>
          <Link className="link link-hover">Etc</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
        <p className="text-white font-semibold text-center text-sm">Copyright || Daniel Sweet 2022</p>
    </div>
  );
};

export default Footer;
