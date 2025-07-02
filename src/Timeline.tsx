import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: (
      <span className="text-[#4AF626] font-semibold text-2xl md:text-4xl lg:text-5xl">
        Expert Mentors
      </span>
    ),
      content: (
        <div>
          <p className="text-gray-500 mb-5 text-xs md:text-sm lg:text-xl">Learn from seasoned ethical hackers and cybersecurity professionals guiding your journey</p>
          <div className="">
            <Image
              src="/hackron4.jpg"
              alt="expert_mentors"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: (<span className="text-[#4AF626] font-semibold text-2xl md:text-4xl lg:text-5xl">
        Certifications
      </span>
      ),
      content: (
        <div>
          <p className="text-gray-500 mb-5 text-xs md:text-sm lg:text-xl">Earn industry-recognized certificates to showcase your cybersecurity skills to employers</p>
          <div className="">
            <Image
              src="/hackron5.jpg"
              alt="certifications"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
      <span className="text-[#4AF626] font-semibold text-2xl md:text-4xl lg:text-5xl">
        Career Support
      </span>
    ),
      content: (
        <div>
          <p className="text-gray-500 mb-5 text-xs md:text-sm lg:text-xl">Receive personalized career coaching, interview prep, and resume reviews</p>
          <div className="">
            <Image
              src="/hackron6.jpg"
              alt="career_support"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }
  ];
  return (
    <div className="bg-black w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
