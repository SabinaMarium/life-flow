import React from 'react';
import hospital from "../assets/hospital.png";

const Hospitals = () => {
    return (
        <div>
         <section id="hospital" className="bg-[#ECFDF5] py-16 mt-15">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <img src={hospital} alt="Hospitals" className="rounded-2xl w-full md:w-1/2 shadow" />
          <div className=" md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Hospitals 🏥</h2>
            <p className="mb-4 text-slate-600">
              Hospitals are vital partners in ensuring blood reaches patients in need.
            </p>
            <ul className="list-none list-inside space-y-2 text-slate-600">
              <li>⚕️ Efficient Supply Chain: Managing collected blood to patients efficiently.</li>
              <li>📋 Safe Handling: Following strict medical protocols for storage and transfusion.</li>
              <li>👨‍⚕️ Patient Care: Ensuring availability of rare blood types for emergencies.</li>
            </ul>
          </div>
        </div>
      </section>
   
        </div>
    );
};

export default Hospitals;