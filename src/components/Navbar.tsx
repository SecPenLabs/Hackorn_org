"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Hackor[n]
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/chapter" className="hover:underline">Start a Chapter</Link>
          <Link href="/chapters" className="hover:underline">Chapters</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white">
              <nav className="flex flex-col gap-4 mt-10 text-lg font-medium">
                <Link href="/" className="hover:underline" onClick={() => document.body.click()}>Home</Link>
                <Link href="/about" className="hover:underline" onClick={() => document.body.click()}>About</Link>
                <Link href="/chapter" className="hover:underline" onClick={() => document.body.click()}>Start a Chapter</Link>
                <Link href="/chapters" className="hover:underline" onClick={() => document.body.click()}>Chapters</Link>
                <Link href="/events" className="hover:underline" onClick={() => document.body.click()}>Events</Link>
                <Link href="/contact" className="hover:underline" onClick={() => document.body.click()}>Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
