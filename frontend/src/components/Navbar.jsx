import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const auth = localStorage.getItem("user");
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <Link to={"/"}>
        <div className="flex items-center" >
          <img src={logo} alt="Logo" className="h-[150px] w-[150px]"/>
        </div>
        </Link>
        {/* Signup/Login Button */}
        <ul className="hidden md:flex space-x-4">
          <Link
            to="/createarticle"
            className="hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Create Article
          </Link>
          { !auth? <li>
            <Link
              to="/signin"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200 ease-in-out"
            >
              Signup/Login
            </Link>
          </li> : <h1>Hello, Author</h1> }
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="text-gray-400 hover:text-white focus:outline-none focus:text-white md:hidden"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 py-4 px-4">
            <li>
              <Link
                to="/"
                className="block text-gray-200 hover:text-white transition duration-200"
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                to="/magazines"
                className="block text-gray-200 hover:text-white transition duration-200"
              >
                Magazines
              </Link>
            </li>
            <li>
              <Link
                to="/achievements"
                className="block text-gray-200 hover:text-white transition duration-200"
              >
                VC Exclusives
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
