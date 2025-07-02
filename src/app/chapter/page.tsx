import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ChapterPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Main Description Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex-1 border-b border-gray-200">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 leading-snug font-[var(--font-roboto-mono)]">
              Hackor[n] is a student-driven initiative by SecPen Labs dedicated to democratizing cybersecurity education and ethical hacking culture across universities in India and beyond.
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-[var(--font-poppins)]">
              <span className="text-gray-400 text-base mb-2 sm:mb-0">18 June 2025</span>
              <Link href="/chapters" className="flex items-center text-black hover:text-gray-700 transition-colors font-medium">
                <span className="mr-2">Read more</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* CyberSecurity Card */}
          <div className="w-full lg:w-80">
            <div className="bg-[#4AF626] rounded-2xl p-6 sm:p-8 text-black h-full relative font-[var(--font-poppins)]">
              <div className="absolute top-4 right-4">
                <span className="bg-black px-4 py-2 rounded-full text-sm font-medium text-white">Latest</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-10 font-[var(--font-roboto-mono)]">CyberSecurity</h2>
              <p className="text-black text-base sm:text-lg mb-8 leading-relaxed">
                Security doesn't start with detection, it begins with design.
              </p>
              <div className="absolute bottom-6 left-6">
                <Link href="#" className="flex items-center text-black hover:text-white transition-colors font-medium">
                  <span className="mr-2">Read more</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* University Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

          {/* NIT Kurukshetra Card */}
          <Link href="/chapter/nit-kurukshetra" className="block">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm cursor-pointer">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src="/images/nit-kurukshetra.jpg" alt="NIT Kurukshetra Campus" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 sm:p-4 font-[var(--font-poppins)]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-[var(--font-roboto-mono)]">NIT Kurukshetra</h3>
              </div>
            </div>
          </Link>

          {/* VIT Pune Card */}
          <Link href="/chapter/vit-pune" className="block">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm cursor-pointer">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src="/images/vit-pune.jpg" alt="VIT Pune Campus" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 sm:p-4 font-[var(--font-poppins)]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-[var(--font-roboto-mono)]">VIT Pune</h3>
              </div>
            </div>
          </Link>

          {/* IIIT Hyderabad Card */}
          <Link href="/chapter/iiit-hyderabad" className="block">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm cursor-pointer">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src="/images/iiit-hyderabad.jpg" alt="IIIT Hyderabad Campus" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 sm:p-4 font-[var(--font-poppins)]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-[var(--font-roboto-mono)]">IIIT Hyderabad</h3>
              </div>
            </div>
          </Link>

          {/* MIT Manipal Card */}
          <Link href="/chapter/mit-manipal" className="block">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm cursor-pointer">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src="/images/mit-manipal.jpg" alt="MIT Manipal Campus" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 sm:p-4 font-[var(--font-poppins)]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-[var(--font-roboto-mono)]">MIT Manipal</h3>
              </div>
            </div>
          </Link>

          {/* IIT Roorkee Card */}
          <Link href="/chapter/iit-roorkee" className="block">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm cursor-pointer">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src="/images/iit-roorkee.jpg" alt="IIT Roorkee Campus" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 sm:p-4 font-[var(--font-poppins)]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-[var(--font-roboto-mono)]">IIT Roorkee</h3>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
