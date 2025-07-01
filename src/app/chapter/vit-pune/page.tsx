import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VitPunePage() {
  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start bg-gray-900 text-white p-6 rounded-t-[10px] gap-4">
        <h1 className="text-[1.4rem] font-semibold font-[var(--font-roboto-mono)]">
          Hackor[n] @ VIT Pune
        </h1>
      </div>

      <div className="p-6 text-base leading-7 text-white">
        <p className="mb-4 font-[var(--font-poppins)]">
          At VIT Pune, the Hackor[n] chapter thrives as a vibrant hub of cybersecurity enthusiasm and innovation. 
          United by a passion for ethical hacking and a commitment to hands-on learning, the chapter fosters a 
          dynamic environment where students dive into CTFs, bug bounty programs, and security tooling with 
          confidence.
        </p>
        <p className="font-[var(--font-poppins)]">
          Guided by industry mentors and an active peer network, Hackor[n] VIT Pune champions an open, inclusive, 
          and research-driven approach to cybersecurity — turning campus curiosity into global impact and 
          preparing students to be ethical defenders of the digital age.
        </p>
      </div>

      <div className="flex justify-center p-4 rounded-b-[10px]">
        <img 
          src="/images/vit-pune-group.jpg" 
          alt="Hackor[n] VIT Pune Team" 
          className="max-w-full h-auto rounded-[10px] object-cover" 
        />
      </div>
    </div>
  );
}
