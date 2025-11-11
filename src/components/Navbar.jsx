import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar({ onSignUpClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Life Flow" className="w-12 h-12 sm:w-14 sm:h-14" />
            <span className="font-bold text-[24px] sm:text-[30px] text-indigo-600">Life Flow</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#banner" className="font-bold text-slate-700 hover:bg-green-300 px-2 py-1 rounded cursor-pointer">
              Home
            </a>

            {/* Details Dropdown */}
            <div className="relative">
              <button
                className="font-bold text-slate-700 px-2 py-1 rounded hover:bg-green-300 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Details
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded list-none min-w-[150px] z-50">
                  <li>
                    <a href="#donors" className="block px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => setIsDropdownOpen(false)}>Donors</a>
                  </li>
                  <li>
                    <a href="#hospital" className="block px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => setIsDropdownOpen(false)}>Hospitals</a>
                  </li>
                  <li>
                    <a href="#bloodbank" className="block px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => setIsDropdownOpen(false)}>Blood Banks</a>
                  </li>
                  <li>
                    <a href="#patients" className="block px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => setIsDropdownOpen(false)}>Patients</a>
                  </li>
                </ul>
              )}
            </div>

            <a href="#campaign" className="font-bold text-slate-700 hover:bg-green-300 px-2 py-1 rounded cursor-pointer">
              About Campaign
            </a>
          </nav>

          {/* Sign Up Button */}
          <div className="hidden md:flex items-center gap-6">
            <button
              className="flex items-center gap-4 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-400 transition cursor-pointer"
              onClick={onSignUpClick}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl">✕</span> // Close icon
              ) : (
                <span className="text-2xl">☰</span> // Hamburger icon
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <a href="#banner" className="block px-4 py-3 font-bold hover:bg-green-100" onClick={() => setIsMobileMenuOpen(false)}>Home</a>

          {/* Mobile Details Dropdown */}
          <div>
            <button
              className="w-full text-left px-4 py-3 font-bold hover:bg-green-100 flex justify-between items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Details
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <ul className="bg-white text-black list-none pl-4">
                <li>
                  <a href="#donors" className="block px-4 py-2 hover:bg-green-100" onClick={() => setIsMobileMenuOpen(false)}>Donors</a>
                </li>
                <li>
                  <a href="#hospital" className="block px-4 py-2 hover:bg-green-100" onClick={() => setIsMobileMenuOpen(false)}>Hospitals</a>
                </li>
                <li>
                  <a href="#bloodbank" className="block px-4 py-2 hover:bg-green-100" onClick={() => setIsMobileMenuOpen(false)}>Blood Banks</a>
                </li>
                <li>
                  <a href="#patients" className="block px-4 py-2 hover:bg-green-100" onClick={() => setIsMobileMenuOpen(false)}>Patients</a>
                </li>
              </ul>
            )}
          </div>

          <a href="#campaign" className="block px-4 py-3 font-bold hover:bg-green-100" onClick={() => setIsMobileMenuOpen(false)}>About Campaign</a>
          <button
            className="block w-full text-left px-4 py-3 bg-purple-700 text-white font-bold rounded-lg my-2 hover:bg-purple-400"
            onClick={() => {
              onSignUpClick();
              setIsMobileMenuOpen(false);
            }}
          >
            Sign Up
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
