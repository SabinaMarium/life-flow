import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar({ onSignUpClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
              href="#banner"
              className="font-bold text-slate-700 hover:bg-green-300 px-2 py-1 rounded cursor-pointer"
            >
              Home
            </a>

            
            {/* Dropdown Section */}
                        <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="font-bold text-slate-700 px-2 py-1 rounded hover:bg-green-300 cursor-pointer">
                Details
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded list-none min-w-[150px] z-50">
                  <li>
                    <a
                      href="/donors"
                      className="block px-4 py-2 hover:bg-green-100 cursor-pointer"
                    >
                      Donors
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hospital"
                      className="block px-4 py-2 hover:bg-green-100 cursor-pointer"
                    >
                      Hospital
                    </a>
                  </li>
                  <li>
                    <a
                      href="/bloodbank"
                      className="block px-4 py-2 hover:bg-green-100 cursor-pointer"
                    >
                      Blood Bank
                    </a>
                  </li>
                  <li>
                    <a
                      href="/patients"
                      className="block px-4 py-2 hover:bg-green-100 cursor-pointer"
                    >
                      Patients
                    </a>
                  </li>
                </ul>
              )}
            </div>


            
            <a
              href="#campaign"
              className="font-bold text-slate-700 hover:bg-green-300 px-2 py-1 rounded cursor-pointer"
            >
              About Campaign
            </a>
          </nav>

          {/* Sign Up Button */}
          <div className="flex items-center gap-6">
            <button
              className="flex items-center gap-4 bg-purple-700 text-white px-8 py-2 rounded-lg hover:bg-purple-400 transition cursor-pointer"
              onClick={onSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
