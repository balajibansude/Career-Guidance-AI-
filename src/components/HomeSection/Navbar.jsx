import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-white shadow-sm border-b border-gray-100">
      {/* 🔥 Clickable Logo */}
      <Link to="/">
        <h4 className="bg-black text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition">
          Career Pilot
        </h4>
      </Link>

      {/* Links */}
      <div className="flex gap-10 items-center">
        <Link to="/">
          <button
            className="px-7 py-2 rounded-full bg-gray-100 
          hover:bg-[#5B6FFF] hover:text-white transition-all duration-300"
          >
            Home
          </button>
        </Link>

        <Link to="/about">
          <button
            className="px-7 py-2 rounded-full bg-gray-100 
          hover:bg-[#5B6FFF] hover:text-white transition-all duration-300"
          >
            About
          </button>
        </Link>

        <Link to="/tutorial">
          <button
            className="px-7 py-2 rounded-full bg-gray-100 
          hover:bg-[#5B6FFF] hover:text-white transition-all duration-300"
          >
            Tutorial
          </button>
        </Link>

        <Link to="/test">
          <button
            className="px-7 py-2 rounded-full bg-gray-100 
          hover:bg-[#5B6FFF] hover:text-white transition-all duration-300"
          >
            Test
          </button>
        </Link>

        <Link to="/chat">
          <button
            className="px-5 py-2 rounded-full bg-gray-100 
  hover:bg-[#5B6FFF] hover:text-white transition-all duration-300"
          >
            Chat
          </button>
        </Link>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-7 py-2 rounded-full 
          hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
