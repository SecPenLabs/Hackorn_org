'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { chapters } from '@/data/chapters';

export default function ChapterSearchPage() {
  const [search, setSearch] = useState('');

  const filteredChapters = chapters.filter((chapter) =>
    chapter.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 font-[var(--font-roboto-mono)] text-white">
          Explore Hackor[n] Chapters
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search chapters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg mb-8 bg-gray-800 text-white placeholder-gray-400 font-[var(--font-poppins)]"
        />

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredChapters.map((chapter) => (
            <Link key={chapter.name} href={chapter.link} className="block">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm cursor-pointer">
                <div className="aspect-video relative">
                  <Image
                    src={chapter.image}
                    alt={`${chapter.name} Campus`}
                    className="object-cover"
                    layout="fill"
                  />
                </div>
                <div className="p-4 sm:p-6 font-[var(--font-poppins)]">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 font-[var(--font-roboto-mono)]">
                    {chapter.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredChapters.length === 0 && (
          <p className="text-white mt-8 font-[var(--font-poppins)] text-center">
            No chapters found for your search.
          </p>
        )}
      </div>
    </div>
  );
}
