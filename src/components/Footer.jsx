import React from "react";
import logo from "../assets/logo.png";
import fb from "../assets/icon-facebook.png";
import twit from "../assets/icon-twitter.png";
import utube from "../assets/icon-youtube.png";
import link from "../assets/icon-linkedin.png";

function Footer() {
  return (
    <div>
      <footer className=" bg-slate-900 text-slate-300">
        <div className="max-w-7xl container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="logo" className="w-20 h-20" />
              <div>
                <div className="font-bold text-[30px] text-white">Life Flow</div>
                <div className="text-sm text-slate-400">
                  <p>
                    Be grateful and donate blood. <br /> Give blood save lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-white mb-2">Quick Links</div>
            <ul className="space-y-1">
              <li className="hover:text-white">Home</li>
              <li className="hover:text-white">Details</li>
              <li className="hover:text-white">About Campaign</li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-white mb-2">Follow</div>
            <div className="flex justify-between text-slate-400">
  <span>Facebook</span>
  <span>Twitter</span>
  <span>LinkedIn</span>
  <span>Youtube</span>
</div>


            <div className="flex justify-between mt-4 gap-2">
            <img src={fb} alt="" />
            <img src={twit} alt="" />
            <img src={link} alt="" />
            <img src={utube} alt="" />
          </div>
          </div>
          
        
        </div>
        <div className="bg-slate-800 text-slate-500 text-xs py-3 text-center">
          © {new Date().getFullYear()} Life Flow All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;



