import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = ({ footerRef }) => {
  // manage the state of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[rgb(5,5,5)] px-4 py-2 flex items-center justify-between h-16 relative">
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

      {/* Search bar for large devices */}
      <div className="hidden sm:flex justify-center w-1/2 max-w-md">
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

      {/* Nav links for medium and large screens */}
      <nav className="hidden sm:flex space-x-6 text-white">
        <Link to="/" className="hover:text-[#E8BA00]">
          Home
        </Link>
        <div className="relative group">
          <button className="hover:text-[#E8BA00]">Categories</button>
          <div className="dropdown-content hidden absolute bg-white text-black shadow-md rounded w-48 group-hover:block z-10">
            {[
              "Tech",
              "Design",
              "Artificial Intelligence",
              "Innovation",
              "Cloud",
              "Technology",
              "Entrepreneurship",
              "Business",
            ].map((category, index) => (
              <div
                key={index}
                className="block px-4 py-2 hover:bg-gray-200 cursor-default"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollToFooter}
          className="hover:text-[#E8BA00]"
        >
          Contact Us
        </button>
      </nav>

      {/* Hamburger icon on small screens */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white text-black shadow-lg rounded-lg py-2 px-4 z-50 sm:hidden">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 hover:text-[#E8BA00]"
          >
            Home
          </Link>
          <div className="py-2">Categories</div>
          <button
            onClick={scrollToFooter}
            className="block py-2 hover:text-[#E8BA00]"
          >
            Contact Us
          </button>
          <button className="block py-2 text-left">
            <FaSearch className="inline-block mr-2" />
            Search
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
