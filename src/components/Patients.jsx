import React from 'react';
import patient from "../assets/patient.png";

const Patients = () => {
    return (
        <div>
         <section id="patients" className="bg-[#ECFDF5] py-16 mt-15">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <img src={patient} alt="Patients" className="rounded-2xl w-full md:w-1/2 shadow" />
          <div className=" md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Patients 💖</h2>
            <p className="mb-4 text-slate-600">
              Patients benefit directly from donations and community awareness.
            </p>
            <ul className="list-none list-inside space-y-2 text-slate-600">
              <li>🏥 Emergency Care: Ensuring blood is available for urgent cases.</li>
              <li>💉 Treatment Support: Helping patients with chronic conditions.</li>
              <li>🌍 Awareness & Education: Teaching the public about safe donation practices.</li>
            </ul>
          </div>
        </div>
      </section>   
        </div>
    );
};

export default Patients;