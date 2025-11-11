import React from 'react';
import hospital from "../assets/hospital.png";

const Hospitals = () => {
    return (
        <section id="hospital" className="bg-[#ECFDF5] py-16">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row gap-8 items-center">

                {/* Hospital Image */}
                <img 
                    src={hospital} 
                    alt="Hospitals" 
                    className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow object-cover"
                />

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hospitals 🏥</h2>
                    <p className="mb-4 text-base sm:text-lg text-slate-600">
                        Hospitals are vital partners in ensuring blood reaches patients in need.
                    </p>
                    <ul className="list-none list-inside space-y-2 text-sm sm:text-base text-slate-600">
                        <li>⚕️ <b>Efficient Supply Chain:</b> Managing collected blood to patients efficiently.</li>
                        <li>📋 <b>Safe Handling:</b> Following strict medical protocols for storage and transfusion.</li>
                        <li>👨‍⚕️ <b>Patient Care:</b> Ensuring availability of rare blood types for emergencies.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Hospitals;
