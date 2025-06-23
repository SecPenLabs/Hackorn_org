import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IITRoorkeePage() {
  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start bg-gray-900 text-white p-6 rounded-t-[10px] gap-4">
        <h1 className="text-[1.4rem] font-semibold font-[var(--font-roboto-mono)]">
          Hackor[n] @ IIT Roorkee
        </h1>
      </div>

      <div className="p-6 text-base leading-7 text-white">
        <p className="mb-4 font-[var(--font-poppins)]">
          Hackor[n] at IIT Roorkee fosters a thriving cybersecurity community blending academic rigor with hands-on 
          red teaming practice. Known for precision and innovation, the chapter leads offensive security initiatives 
          on campus.
        </p>
        <p className="font-[var(--font-poppins)]">
          With regular internal audits, tool development, and malware analysis projects, IIT-R’s chapter produces 
          security engineers equipped to lead national and global efforts in cyber defense.
        </p>
      </div>

      <div className="flex justify-center p-4 rounded-b-[10px]">
        <img 
          src="/images/iit-roorkee-group.jpg" 
          alt="Hackor[n] IIT Roorkee Team" 
          className="max-w-full h-auto rounded-[10px] object-cover" 
        />
      </div>
    </div>
  );
}
