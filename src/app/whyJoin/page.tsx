"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TimelineDemo } from "@/Timeline";
import Image from "next/image";
import { Play } from "lucide-react";

const WhyJoin = () => {
  return (
    <>
      <section className="relative bg-neutral-950 w-full overflow-x-hidden py-24 px-4 flex flex-col items-center justify-center antialiased">
        {/* Main Title Section */}
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 font-sans font-bold mb-12">
            WHY JOIN US?
          </h1>
          <p className="text-white text-md md:text-xl border border-gray-600 p-6 rounded-3xl backdrop-blur-sm">
            Build confidence even when systems go down — communicate clearly, act swiftly, and protect your brand.
          </p>
        </div>

        <div className="relative">
          <Image src="/line.png" alt="line" height={10} width={150} className="relative" />
          <div className="absolute border rounded-full p-3 left-11">
          <Play className="text-white" />
          </div>
        </div>


        {/* Journey Section */}
        <div className="max-w-4xl mx-auto text-center mt-20 z-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4AF626] mb-4">
            Hack. Learn. Lead.
          </h2>
          <p className="text-gray-400 text-md md:text-base max-w-xl mx-auto">
            "Silence Breaks Trust. Transparency Builds It." Keep users in the loop with real-time updates.
          </p>
        </div>

        {/* Background Animation */}
        <BackgroundBeams />
      </section>
      {/* Timeline Section */}
      <div className="bg-black flex items-center justify-center">
        <div className="w-full max-w-5xl mt-5 sm:mt-0 px-4 z-10">
          <TimelineDemo />
        </div>
      </div>
    </>
  );
};

export default WhyJoin;
