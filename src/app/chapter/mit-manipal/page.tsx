import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MITManipalPage() {
  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start bg-gray-900 text-white p-6 rounded-t-[10px] gap-4">
        <h1 className="text-[1.4rem] font-semibold font-[var(--font-roboto-mono)]">
          Hackor[n] @ MIT Manipal
        </h1>
      </div>

      <div className="p-6 text-base leading-7 text-white">
        <p className="mb-4 font-[var(--font-poppins)]">
          At MIT Manipal, Hackor[n] has emerged as a powerhouse of student-led cyber defense and exploration. 
          With cross-domain interest from tech, law, and forensics, the chapter promotes an interdisciplinary 
          approach to hacking education.
        </p>
        <p className="font-[var(--font-poppins)]">
          Members regularly participate in national-level CTFs, publish research on digital security, and build 
          open-source tools — making cybersecurity accessible and impactful across the campus.
        </p>
      </div>

      <div className="flex justify-center p-4 rounded-b-[10px]">
        <img 
          src="/images/mit-manipal-group.jpg" 
          alt="Hackor[n] MIT Manipal Team" 
          className="max-w-full h-auto rounded-[10px] object-cover" 
        />
      </div>
    </div>
  );
}
