'use client';

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import events from "@/data/events.json";
export default function EventsPage() {
  // You can keep this inside page.tsx for now


  return (
    <div className="min-h-screen bg-black text-white p-6 font-inter">
     <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {events.map((event) => (
    <Link key={event.id} href={event.link} className="block hover:scale-[1.02] transition-transform duration-200">
      <Card className="bg-zinc-900 rounded-2xl shadow-lg p-4 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-blue-100 text-2xl font-bold w-full h-[75px]">
            {event.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Image
            src={event.image}
            alt={event.title}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-[200px]"
          />
          <div className="flex items-center space-x-2 text-zinc-300">
            <Calendar className="h-5 w-5 text-terminal-green" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-zinc-300">
            <MapPin className="h-5 w-5 text-terminal-green" />
            <span>{event.location}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  ))}
</div>
    </div>
  );
}
