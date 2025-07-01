import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ChapterPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">

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
            <div className="bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-2xl p-6 sm:p-8 text-white h-full relative font-[var(--font-poppins)]">
              <div className="absolute top-4 right-4">
                <span className="bg-black px-4 py-2 rounded-full text-sm font-medium">Latest</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-10 font-[var(--font-roboto-mono)]">CyberSecurity</h2>
              <p className="text-white text-base sm:text-lg mb-8 leading-relaxed">
                Security doesn't start with detection, it begins with design.
              </p>
              <div className="absolute bottom-6 left-6">
                <Link href="#" className="flex items-center text-white hover:text-pink-100 transition-colors font-medium">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

          {/* NIT Kurukshetra Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <img src="/images/nit-kurukshetra.jpg" alt="NIT Kurukshetra Campus" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6 font-[var(--font-poppins)]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">18 June 2025</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1 font-[var(--font-roboto-mono)]">NIT Kurukshetra</h3>
                </div>
                <Link href="/chapter/nit-kurukshetra" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                  <span className="mr-2">Read more</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* VIT Pune Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <img src="/images/vit-pune.jpg" alt="VIT Pune Campus" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6 font-[var(--font-poppins)]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">18 June 2025</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1 font-[var(--font-roboto-mono)]">VIT Pune</h3>
                </div>
                <Link href="/chapter/vit-pune" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                  <span className="mr-2">Read more</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* IIIT Hyderabad Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <img src="/images/iiit-hyderabad.jpg" alt="IIIT Hyderabad Campus" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6 font-[var(--font-poppins)]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">18 June 2025</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1 font-[var(--font-roboto-mono)]">IIIT Hyderabad</h3>
                </div>
                <Link href="/chapter/iiit-hyderabad" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                  <span className="mr-2">Read more</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* MIT Manipal Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <img src="/images/mit-manipal.jpg" alt="MIT Manipal Campus" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6 font-[var(--font-poppins)]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">18 June 2025</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1 font-[var(--font-roboto-mono)]">MIT Manipal</h3>
                </div>
                <Link href="/chapter/mit-manipal" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                  <span className="mr-2">Read more</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* IIT Roorkee Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <img src="/images/iit-roorkee.jpg" alt="IIT Roorkee Campus" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6 font-[var(--font-poppins)]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">18 June 2025</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1 font-[var(--font-roboto-mono)]">IIT Roorkee</h3>
                </div>
                <Link href="/chapter/iit-roorkee" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                  <span className="mr-2">Read more</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
