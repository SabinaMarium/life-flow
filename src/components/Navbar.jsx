import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 500); 
  };

  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <button className="flex items-center gap-3">
            <img src={logo} alt="Life Flow" className="w-18 h-18" />
            <span className="font-bold text-[30px] text-indigo-600">Life Flow</span>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#"
              className="font-bold text-slate-700 hover:bg-green-300 px-2 py-1 rounded"
            >
              Home
            </a>

            {/* Dropdown Section */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-bold text-slate-700 px-2 py-1 rounded hover:bg-green-300">
                Details
              </button>

              {showDropdown && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded list-none min-w-[150px] transition-all duration-300 ease-in-out">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-green-100">
                      Donors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-green-100">
                      Hospital
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-green-100">
                      Blood Bank
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-green-100">
                      Patients
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <a
              href="#"
              className="font-bold text-slate-700 hover:bg-green-300 px-2 py-1 rounded"
            >
              About Campaign
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-400 transition">
              Sign Up
            </button>
            <button className="flex items-center gap-2 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-400 transition">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
