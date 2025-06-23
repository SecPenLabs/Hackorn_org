import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NitKurukshetraPage() {
  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start bg-gray-900 text-white p-6 rounded-t-[10px] gap-4">
        <h1 className="text-[1.4rem] font-semibold font-[var(--font-roboto-mono)]">
          Hackor[n] @ NIT Kurukshetra
        </h1>
      </div>

      <div className="p-6 text-base leading-7 text-white">
        <p className="mb-4 font-[var(--font-poppins)]">
          At NIT Kurukshetra, the Hackor[n] chapter embodies the spirit of curiosity, collaboration, and cybersecurity
          excellence. Driven by passionate student leaders and supported by the Hackor[n] network, this chapter
          actively engages in Capture The Flag (CTF) challenges, hands-on security workshops, and ethical hacking forums.
        </p>
        <p className="font-[var(--font-poppins)]">
          With a strong culture of peer learning and innovation, Hackor[n] NIT-Kurukshetra empowers students to push
          the boundaries of security research and develop real-world cyber defense skills — laying the foundation for
          tomorrow's security professionals.
        </p>
      </div>

      <div className="flex justify-center p-4 rounded-b-[10px]">
        <img 
          src="/images/nit-kurukshetra-group.jpg" 
          alt="Hackor[n] NIT Kurukshetra Team" 
          className="max-w-full h-auto rounded-[10px] object-cover" 
        />
      </div>
    </div>
  );
}
