import React from 'react';

const Impact = () => {
    return (
        <section className="bg-[#D1FADF] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12">
                    Our Impact
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    
                    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-md text-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">50K+</p>
                        <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-2">Blood Donated</p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-md text-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">100+</p>
                        <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-2">Communities Involved</p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-md text-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">30+</p>
                        <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-2">Hospitals Reached</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
