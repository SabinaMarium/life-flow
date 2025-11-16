import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button className="flex items-center gap-3" onClick={() => navigate("/home")}>
            <img src={logo} alt="Life Flow" className="w-12 h-12 sm:w-14 sm:h-14" />
            <span className="font-bold text-[24px] sm:text-[30px] text-indigo-600">Life Flow</span>
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            <button onClick={() => navigate("/home")} className="font-bold px-2 py-1 rounded hover:bg-green-100">Home</button>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="font-bold px-2 py-1 rounded hover:bg-green-100"
              >
                Details
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded min-w-[150px] z-50">
                  <li><a href="#donors" className="block px-4 py-2">Donors</a></li>
                  <li><a href="#hospital" className="block px-4 py-2">Hospitals</a></li>
                  <li><a href="#bloodbank" className="block px-4 py-2">Blood Banks</a></li>
                  <li><a href="#patients" className="block px-4 py-2">Patients</a></li>
                </ul>
              )}
            </div>

            <button onClick={() => navigate("/home")} className="font-bold px-2 py-1 rounded hover:bg-green-100">About Campaign</button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-600"
            >
              Sign Up
            </button>

            <button
              onClick={() => navigate("/")}
              className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-600"
            >
              Log In
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(v => !v)} className="text-2xl">
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <button className="block w-full text-left px-4 py-3" onClick={() => { navigate("/home"); setIsMobileMenuOpen(false); }}>Home</button>
          <button className="block w-full text-left px-4 py-3" onClick={() => { navigate("/signup"); setIsMobileMenuOpen(false); }}>Sign Up</button>
          <button className="block w-full text-left px-4 py-3" onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }}>Log In</button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
