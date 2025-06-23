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
      <div className="max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredChapters.map((chapter) => (
            <div key={chapter.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative">
                <Image
                  src={chapter.image}
                  alt={`${chapter.name} Campus`}
                  className="object-cover"
                  layout="fill"
                />
              </div>
              <div className="p-4 sm:p-6 font-[var(--font-poppins)]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-sm">{chapter.date}</span>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1 font-[var(--font-roboto-mono)]">
                      {chapter.name}
                    </h3>
                  </div>
                  <Link
                    href={chapter.link}
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <span className="mr-2">Read more</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
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
