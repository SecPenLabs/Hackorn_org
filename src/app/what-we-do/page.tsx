import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-950 min-h-screen text-white py-16 px-6 md:px-12 lg:px-24 font-sans flex justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 max-w-2xl space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4AF626] mb-3 font-mono">
            What We Do
          </h2>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            At <span className="text-white font-semibold">Hackor[n]</span>, we take a hands-on, community-driven approach to cybersecurity education. Through our university chapters, we create platforms for learning, collaboration, and growth in ethical hacking.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            We host <span className="text-white font-semibold">CTFs</span>, workshops, and research programs to build practical cybersecurity skills. Our chapters lead locally while staying aligned with Hackor[n]’s values and mentorship.
          </p>

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Through expert sessions and community projects, we connect classroom learning with real-world cybersecurity. Our mission is to build an inclusive ecosystem of ethical hackers.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/hackron6.jpg"
            width={500}
            height={500}
            alt="what-we-do"
            className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
