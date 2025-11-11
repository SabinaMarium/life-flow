import React from 'react';
import donor from "../assets/donor.png";

const Donors = () => {
    return (
        <section id="donors" className="bg-[#F0F9FF] py-16">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
                
                {/* Donor Image */}
                <img 
                    src={donor} 
                    alt="Donors" 
                    className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow object-cover"
                />

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Donors 🩸</h2>
                    <p className="mb-4 text-base sm:text-lg text-slate-600">
                        Our donors are the heroes who make blood donation drives possible.
                    </p>
                    <ul className="list-none list-inside space-y-2 text-sm sm:text-base text-slate-600">
                        <li>🩺 <b>Healthy Volunteers:</b> Ensuring donor safety before every donation.</li>
                        <li>📅 <b>Regular Donors:</b> Encouraging periodic donations to maintain blood supply.</li>
                        <li>🎯 <b>Goal-Oriented:</b> Targeting specific blood types needed by hospitals.</li>
                        <li>🌟 <b>Recognition:</b> Appreciating donors for their life-saving contribution.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Donors;
