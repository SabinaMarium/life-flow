import React from 'react';
import banner from "../assets/banner.jpg";

const Banner = () => {
    return (
        <div>
       <img src={banner} alt="banner image" id="banner" className=" mt-10 container mx-auto h-160" /> 
        </div>
    );
};
export default Banner;