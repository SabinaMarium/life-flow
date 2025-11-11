import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import campaign from "../assets/campaign.jpg";
import badge from "../assets/badge.png";

const Campaign = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const badgeRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
      tl.from(imageRef.current, { x: -100, opacity: 0 })
        .from(textRef.current, { x: 100, opacity: 0 }, "-=0.6");

      gsap.to(badgeRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 8,
        ease: "linear",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="campaign"
      ref={sectionRef}
      className="bg-[#ECFDF5] py-16 overflow-hidden mt-15"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          About the Campaign🩸
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Image Section with Badge Overlay */}
          <div
            className="relative w-full md:w-1/2 flex justify-center"
            ref={imageRef}
          >
            <img
              src={campaign}
              alt="About the Campaign"
              className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow-lg object-cover"
            />

            {/* Rotating Badge Image */}
            <img
              ref={badgeRef}
              src={badge}
              alt="Badge"
              className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            />
          </div>

          {/* Text Section */}
          <div
            ref={textRef}
            className="text-slate-600 w-full md:w-1/2 text-left md:text-left"
          >
            <p className="mb-4 text-base sm:text-lg">
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

            <ul className="list-none list-inside space-y-2 text-sm sm:text-base">
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
