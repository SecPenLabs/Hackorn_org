'use client';

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-inter">
      <Link href="/events/ai-bootcamp" className="block hover:scale-[1.02] transition-transform duration-200">
        <Card className="bg-zinc-900 rounded-2xl shadow-lg p-4 max-w-xl mx-auto cursor-pointer">
          <CardHeader>
            <CardTitle className="text-neon-green text-2xl font-bold">
              AI & Web Bootcamp – Hyderabad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/images/image.png"
              alt="Bootcamp workshop"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />

            {/* Date & Location */}
            <div className="flex items-center space-x-2 text-zinc-300">
              <Calendar className="h-5 w-5 text-terminal-green" />
              <span>July 6, 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-zinc-300">
              <MapPin className="h-5 w-5 text-terminal-green" />
              <span>SRM University, Hyderabad</span>
            </div>
            {/* Short Description */}
            <p className="text-gray-400 text-sm">
              Hands-on Web Dev + AI tools bootcamp for students to build and learn with mentors.
              <span className="text-terminal-green ml-1 underline">Click to know more →</span>
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
