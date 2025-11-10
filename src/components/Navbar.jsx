import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button className="flex items-center gap-3">
            <img src={logo} alt="Life Flow" className="w-18 h-18" />
            <span className="font-bold text-[30px] text-indigo-600">Life Flow</span>
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            <a className="font-bold text-slate-700 hover:bg-green-300">Home </a>
            <a className="font-bold text-slate-700 position relative hover:bg-green-300">Details
              <ul className="list-none position absolute transition 0.5s">
                <li><a href=""> Donors</a></li>
                <li><a href="">Hospital</a></li>
                <li><a href="">Blood Bank</a></li>
                <li><a href="">Patients</a></li>
                </ul> 
              </a>
            <a className="font-bold text-slate-700  hover:bg-green-300">About Campaign </a>
          </nav>

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
