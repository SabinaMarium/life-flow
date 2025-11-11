import React from 'react';
import donor from "../assets/donor.png";

const Donors = () => {
    return (
        <div>
          <section id="donors" className="bg-[#F0F9FF] py-16">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
          <img src={donor} alt="Donors" className="rounded-2xl w-full md:w-1/2 shadow" />
          <div className=" md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Donors 🩸</h2>
            <p className="mb-4 text-slate-600">
              Our donors are the heroes who make blood donation drives possible.
            </p>
            <ul className="list-none list-inside space-y-2 text-slate-600">
              <li>🩺 Healthy Volunteers: Ensuring donor safety before every donation.</li>
              <li>📅 Regular Donors: Encouraging periodic donations to maintain blood supply.</li>
              <li>🎯 Goal-Oriented: Targeting specific blood types needed by hospitals.</li>
              <li>🌟 Recognition: Appreciating donors for their life-saving contribution.</li>
            </ul>
          </div>
        </div>
      </section>   
        </div>
    );
};

export default Donors;