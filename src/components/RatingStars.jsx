import React, { useState, useRef } from "react";
import { gsap } from "gsap";

// Single Star Component
const Star = ({ filled, onMouseEnter, onClick }) => (
  <svg
    onMouseEnter={onMouseEnter}
    onClick={onClick}
    className="w-12 h-12 cursor-pointer"
    viewBox="0 0 24 24"
    fill={filled ? "#FACC15" : "none"}
    stroke="#FACC15"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15 9 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 9" />
  </svg>
);

function RatingStars() {
  const [rating, setRating] = useState(0); // start empty
  const [hovered, setHovered] = useState(0);
  const starsRef = useRef([]);

  const handleMouseEnter = (index) => {
    setHovered(index + 1);

    // small pop animation on hover
    gsap.to(starsRef.current[index], {
      scale: 1.3,
      duration: 0.2,
      ease: "back.out(2)",
    });
  };

  const handleMouseLeave = (index) => {
    setHovered(0);
    gsap.to(starsRef.current[index], {
      scale: 1,
      duration: 0.2,
      ease: "back.out(2)",
    });
  };

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <section className="bg-[#ECFDF5] py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Rate This</h2>

      <div className="flex gap-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (starsRef.current[index] = el)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Star
              filled={hovered ? index < hovered : index < rating} // fill on hover or click
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </div>

      <p className="mt-4 text-lg">
        Your Rating: {rating} / 5
      </p>
    </section>
  );
}

export default RatingStars;
