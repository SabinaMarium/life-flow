import React from 'react';
import blood from "../assets/blood.png";

const BloodBanks = () => {
    return (
        <section id="bloodbank" className="bg-[#F0F9FF] py-16">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">

                {/* Blood Bank Image */}
                <img 
                    src={blood} 
                    alt="Blood Banks" 
                    className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow object-cover"
                />

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Blood Banks 🧬</h2>
                    <p className="mb-4 text-base sm:text-lg text-slate-600">
                        Blood banks store and manage blood to ensure availability for hospitals and patients.
                    </p>
                    <ul className="list-none list-inside space-y-2 text-sm sm:text-base text-slate-600">
                        <li>❄️ <b>Proper Storage:</b> Maintaining temperature and quality of blood.</li>
                        <li>📦 <b>Inventory Management:</b> Tracking available blood types.</li>
                        <li>🚑 <b>Rapid Distribution:</b> Delivering blood to hospitals in emergencies.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default BloodBanks;
