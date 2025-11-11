import React from "react";
import logo from "../assets/logo.png";
import fb from "../assets/icon-facebook.png";
import twit from "../assets/icon-twitter.png";
import utube from "../assets/icon-youtube.png";
import link from "../assets/icon-linkedin.png";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img src={logo} alt="logo" className="w-16 h-16 sm:w-20 sm:h-20" />
          <div className="text-center sm:text-left">
            <div className="font-bold text-2xl sm:text-[30px] text-white">Life Flow</div>
            <div className="text-sm sm:text-base text-slate-400 mt-1">
              Be grateful and donate blood. <br /> Give blood, save lives.
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <div className="font-semibold text-white mb-2 text-lg">Quick Links</div>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Details</li>
            <li className="hover:text-white cursor-pointer">About Campaign</li>
          </ul>
        </div>

        {/* Social Follow */}
        <div className="text-center sm:text-left">
          <div className="font-semibold text-white mb-2 text-lg">Follow</div>
          <div className="flex justify-center sm:justify-start text-slate-400 gap-4 text-sm flex-wrap">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Youtube</span>
          </div>

          <div className="flex justify-center sm:justify-start mt-4 gap-4 flex-wrap">
            <img src={fb} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={twit} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={link} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={utube} alt="Youtube" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="bg-slate-800 text-slate-500 text-xs sm:text-sm py-3 text-center">
        © {new Date().getFullYear()} Life Flow. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
