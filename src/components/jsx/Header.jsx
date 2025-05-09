import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[rgb(5,5,5)] px-4 py-2 flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Tech Blog Logo"
            className="h-full max-h-24 object-contain"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center w-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full px-4 py-2 w-full text-black"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-white">
        <Link to="/" className="hover:text-[#E8BA00]">
          Home
        </Link>

        {/* Categories Dropdown */}
        <div className="relative group">
  <button className="hover:text-[#E8BA00]">Categories</button>
  <div className="dropdown-content hidden absolute bg-white text-black shadow-md rounded w-40 group-hover:block">
    <Link
      to="/category/tech"
      className="block px-4 py-2 hover:bg-gray-200"
    >
      Tech
    </Link>
    <Link
      to="/category/design"
      className="block px-4 py-2 hover:bg-gray-200"
    >
      Design
    </Link>
    <Link
      to="/category/business"
      className="block px-4 py-2 hover:bg-gray-200"
    >
      Business
    </Link>
  </div>
</div>
        <Link to="#contact" className="hover:text-[#E8BA00]">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
