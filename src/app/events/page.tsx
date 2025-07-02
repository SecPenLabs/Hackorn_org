'use client';

import Image from "next/image";
import { CalendarCheck } from "lucide-react";
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
        <Link key={event.id} href={event.link} className="group block hover:scale-[1.04] transition-transform duration-200">
            <Card  className="bg-zinc-900 rounded-2xl shadow-xl p-4 cursor-pointer border-none transition-shadow
             group-hover:shadow-[0_0_20px_#3b82f655]">
              <CardContent>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                 className="rounded-xl object-cover w-full h-[200px] mb-3 transition-shadow duration-300"
                />
                <CardTitle className="text-blue-100 text-2xl font-mono w-full h-[75px] mb-2 line-clamp-2 group-hover:animate-pulse">
                  {event.title}
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
    <div className="min-h-screen bg-gray-950 text-white p-6 font-inter">
      <h1 className="flex items-center gap-3 text-4xl md:text-5xl font-extrabold
                bg-gradient-to-r from-neon-green via-terminal-green to-white
                bg-clip-text  select-none animate-pulse mb-8">
        <CalendarCheck className="w-8 h-8 text-terminal-green animate-pulse" />
        Events
      </h1>

      {renderEventSection("Ongoing Events", ongoingEvents)}
      {renderEventSection("Upcoming Events", upcomingEvents)}
      {renderEventSection("Past Events", pastEvents)}
    </div>
  );
}
