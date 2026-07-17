import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8 sticky top-0 z-50">
      {/* Search */}
      <div className="relative w-96">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500 text-lg" />
          ) : (
            <FaMoon className="text-slate-700 text-lg" />
          )}
        </button>

        {/* Notifications */}
        <button className="relative w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
          <FaBell className="text-lg text-gray-700" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-4xl text-indigo-600" />

          <div>
            <h3 className="font-semibold text-gray-800">
              John Doe
            </h3>

            <p className="text-sm text-gray-500">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;