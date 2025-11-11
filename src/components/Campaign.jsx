import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import campaign from "../assets/campaign.png";
import badge from "../assets/badge.png";

const Campaign = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const badgeRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for image and text animation
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

      tl.from(imageRef.current, { x: -100, opacity: 0 })
        .from(textRef.current, { x: 100, opacity: 0 }, "-=0.6");

      // Continuous anticlockwise rotation for the badge
      gsap.to(badgeRef.current, {
        rotation: 360, // negative for anticlockwise
        repeat: -1,
        duration: 8,
        ease: "linear",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="campaign" ref={sectionRef} className="bg-[#ECFDF5] py-16 overflow-hidden">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">
          About the Campaign🩸
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          {/* Image Section with Badge Overlay */}
          <div className="relative inline-block" ref={imageRef}>
            {/* Main Campaign Image */}
            <img
              src={campaign}
              alt="About the Campaign"
              className="rounded-2xl w-full max-w-md shadow-soft"
            />

            {/* Rotating Badge Image (Top-Left Corner) */}
            <img
              ref={badgeRef}
              src={badge}
              alt="Badge"
              className="absolute top-[-30px] left-[-30px] w-28 h-28" // increased size
            />
          </div>

          {/* Text Section */}
          <div ref={textRef} className="text-slate-600 md:w-1/2">
            <p className="mb-4">
              Our Blood Donation Campaign is a community-driven initiative aimed
              at saving lives through the simple yet powerful act of donating
              blood. Every drop counts — and your contribution can make the
              difference between life and death for patients in urgent need. We
              organize regular donation drives, awareness programs, and
              collaborations with hospitals to ensure a safe and steady blood
              supply. Through this campaign, we seek to inspire compassion,
              promote voluntary blood donation, and create a culture of care
              where everyone plays a role in giving others a second chance at
              life.
            </p>

            <ul className="list-none list-inside space-y-2">
              <li>
                🤝 <b>Community Involvement:</b> Encourage volunteers, students,
                and organizations to take part.
              </li>
              <li>
                ❤️ <b>Raise Awareness:</b> Educate communities about the
                importance of regular blood donation.
              </li>
              <li>
                🏥 <b>Safe & Secure Process:</b> All donations are collected
                following strict medical safety standards.
              </li>
              <li>
                🌍 <b>Promote Humanity:</b> Spreading kindness, compassion, and
                unity through giving.
              </li>
              <li>
                📣 <b>Join the Movement:</b> Become a donor, volunteer, or
                ambassador for the cause.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
