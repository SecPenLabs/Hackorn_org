'use client';

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import events from "@/data/events.json";

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const pastEvents = events.filter(e => e.status === "past");
  const ongoingEvents = events.filter(e => e.status === "ongoing");

  const renderEventSection = (title: string, list: typeof events) => (
    <section className="mb-10  bg-gray-950">
      <h2 className="text-3xl font-mono font-extrabold text-terminal-green mb-4 ">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {list.map((event) => (
          <Link key={event.id} href={event.link} className="block hover:scale-[1.04] transition-transform duration-50">
            <Card className="bg-zinc-900 rounded-2xl shadow-xl p-4 cursor-pointer border-none">
              <CardContent>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="rounded-xl object-cover w-full h-[200px] mb-3"
                />
                <CardTitle className="text-blue-100 text-2xl font-mono w-full h-[75px] mb-2 line-clamp-2">
                  {event.title}{/* Ensure the title fits and resides below image. */}
                </CardTitle>
                <div className="flex items-center space-x-2 text-zinc-300 mb-1">
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
    </section>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 font-inter">
      {renderEventSection("Ongoing Events", ongoingEvents)}
      {renderEventSection("Upcoming Events", upcomingEvents)}
      {renderEventSection("Past Events", pastEvents)}
    </div>
  );
}
