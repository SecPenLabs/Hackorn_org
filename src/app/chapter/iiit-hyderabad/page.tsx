import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IIITHyderabadPage() {
  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start bg-gray-900 text-white p-6 rounded-t-[10px] gap-4">
        <h1 className="text-[1.4rem] font-semibold font-[var(--font-roboto-mono)]">
          Hackor[n] @ IIIT Hyderabad
        </h1>
      </div>

      <div className="p-6 text-base leading-7 text-white">
        <p className="mb-4 font-[var(--font-poppins)]">
          Hackor[n] at IIIT Hyderabad is a high-energy collective of cyber enthusiasts redefining innovation in 
          the cybersecurity space. Focused on advanced security concepts, reverse engineering, and threat hunting, 
          the chapter acts as a breeding ground for elite cyber talent.
        </p>
        <p className="font-[var(--font-poppins)]">
          With a research-intensive approach and strong mentorship, the chapter hosts workshops, zero-day analysis 
          sessions, and AI-security integrations — forging a future-ready ethical hacking culture.
        </p>
      </div>

      <div className="flex justify-center p-4 rounded-b-[10px]">
        <img 
          src="/images/iiit-hyderabad-group.jpg" 
          alt="Hackor[n] IIIT Hyderabad Team" 
          className="max-w-full h-auto rounded-[10px] object-cover" 
        />
      </div>
    </div>
  );
}
