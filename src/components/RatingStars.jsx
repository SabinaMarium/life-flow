import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function RatingStars() {
  const starsRef = useRef([]);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Only run after DOM is ready
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "back.out(1.7)" } });

      tl.from(titleRef.current, { y: -50, opacity: 0 }) // title slides in
        .from(starsRef.current, {
          scale: 0,
          opacity: 0,
          stagger: 0.2,
          delay: 0.2,
        });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#ECFDF5] py-16 mt-10 overflow-hidden">
      <div className="max-w-7xl mt-12 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-2xl font-bold text-center">
          Ratings
        </h2>

        <div className="flex justify-center mt-8">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <input
                key={num}
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label={`${num} star`}
                defaultChecked={num === 2}
                ref={(el) => (starsRef.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RatingStars;
