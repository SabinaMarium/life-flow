import React from 'react';
import blood from "../assets/blood.png";

const BloodBanks = () => {
    return (
        <div>
          <section id="bloodbank" className="bg-[#F0F9FF] py-16 mt-15">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
          <img src={blood} alt="Blood Banks" className="rounded-2xl w-full md:w-1/2 shadow" />
          <div className=" md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Blood Banks 🧬</h2>
            <p className="mb-4 text-slate-600">
              Blood banks store and manage blood to ensure availability for hospitals and patients.
            </p>
            <ul className="list-none list-inside space-y-2 text-slate-600">
              <li>❄️ Proper Storage: Maintaining temperature and quality of blood.</li>
              <li>📦 Inventory Management: Tracking available blood types.</li>
              <li>🚑 Rapid Distribution: Delivering blood to hospitals in emergencies.</li>
            </ul>
          </div>
        </div>
      </section>   
        </div>
    );
};

export default BloodBanks;