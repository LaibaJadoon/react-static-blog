import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ footerRef }) => {
  // Function to handle the scroll to the footer
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
        <form className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-full text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#E8BA00] text-black px-4 py-2 hover:bg-yellow-400"
          >
            Search
          </button>
        </form>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-white">
        <Link to="/" className="hover:text-[#E8BA00]">
          Home
        </Link>

        {/* Categories Dropdown (non-functional items) */}
        <div className="relative group">
          <button className="hover:text-[#E8BA00]">Categories</button>
          <div className=" hidden absolute bg-white text-black shadow-md rounded w-48 group-hover:block z-10">
            <div className="block px-4 py-2 hover:bg-gray-200 cursor-default">Tech</div>
            <div className="block px-4 py-2 hover:bg-gray-200 cursor-default">Design</div>
            <div className="block px-4 py-2 hover:bg-gray-200 cursor-default">Artificial Intelligence</div>
            <div className="block px-4 py-2 hover:bg-gray-200 cursor-default">Innovation</div>
            <div className="block px-4 py-2 hover:bg-gray-200 cursor-default">Cloud</div>
            <div className="block px-4 py-2 hover:bg-gray-200 cursor-default">Technology</div>
            <div className="block px-4 py-2 hover:bg-gray-200 cursor-default">Entrepreneurship</div>
            <div className="block px-4 py-2 hover:bg-gray-200 cursor-default">Business</div>
          </div>
        </div>

        <button onClick={scrollToFooter} className="hover:text-[#E8BA00]">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
