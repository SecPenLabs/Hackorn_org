"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import NavLinks from "@/data/navBar";

export default function Navbar() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-semibold tracking-wider font-orbitron"
        >
          Hackor[n]
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {NavLinks.map((links, idx) => (
            <Link
              key={idx}
              href={links.link}
              className="hover:underline text-base font-mono leading-1"
            >
              {links.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold tracking-wide text-white">
                  Hackor[n]
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 ml-7 mt-10 text-lg font-medium">
                {NavLinks.map((links, idx) => (
                  <Link
                    key={idx}
                    href={links.link}
                    className="hover:underline"
                    onClick={() => document.body.click()}
                  >
                    {links.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
