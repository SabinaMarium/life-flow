import React from 'react';
import patient from "../assets/patient.png";

const Patients = () => {
    return (
        <section id="patients" className="bg-[#ECFDF5] py-16">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row gap-8 items-center">

                {/* Patient Image */}
                <img 
                    src={patient} 
                    alt="Patients" 
                    className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow object-cover"
                />

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Patients 💖</h2>
                    <p className="mb-4 text-base sm:text-lg text-slate-600">
                        Patients benefit directly from donations and community awareness.
                    </p>
                    <ul className="list-none list-inside space-y-2 text-sm sm:text-base text-slate-600">
                        <li>🏥 <b>Emergency Care:</b> Ensuring blood is available for urgent cases.</li>
                        <li>💉 <b>Treatment Support:</b> Helping patients with chronic conditions.</li>
                        <li>🌍 <b>Awareness & Education:</b> Teaching the public about safe donation practices.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Patients;
