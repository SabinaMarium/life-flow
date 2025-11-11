import React from 'react';
import banner from "../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="mt-10">
            <img
                src={banner}
                alt="banner image"
                id="banner"
                className="w-full h-auto max-h-[600px] object-cover rounded-lg"
            />
        </div>
    );
};

export default Banner;
