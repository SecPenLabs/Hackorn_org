"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { featuresData } from "@/data/landing";
import { Card, CardContent } from "./ui/card";


const staticText = "Building India’s Next Gen ";
const typingText = "Cyber Defenders";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Typing effect logic
    interval = setInterval(() => {
      setDisplayed((prev) => prev + typingText.charAt(prev.length));

      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= typingText.length) {
          clearInterval(interval);

          // Wait before restarting the typing loop
          setTimeout(() => {
            setDisplayed("");
            setIndex(0);
          }, 1000);
        }

        return nextIndex;
      });
    }, 150); 

    return () => clearInterval(interval);
  }, [index]);

return (
<main className="text-white font-sans overflow-hidden">
  {/* HERO SECTION WITH VIDEO */}
  <section className="relative h-[500px]">
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/video/cybersec.mp4" type="video/mp4" />
    </video>

    {/* Dark Overlay only over Hero */}
    <div className="absolute inset-0 bg-black/60 z-10" />

    {/* Hero Content */}
    <div className="relative z-20 container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="w-full md:w-1/2 space-y-6 ">
        <h1 className="text-5xl sm:text-5xl font-bold text-brand drop-shadow-[0_0_5px_#39ff14] font-robotoMono">
          {staticText}
          <span>
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-lg mt-10 font-poppins pr-20 pl-5">
          An open platform to explore, learn, and collaborate on cybersecurity — with
          courses, events, and tools built for students, by students.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 items-center justify-center">
          <Link href="#">
            <Button className="border-2 border-brand rounded-full hover:bg-brand/30 p-5">
              Start Learning
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" className="rounded-full p-5">
              Join Us
            </Button>
          </Link>
        </div>
       </div>
    </div>
  </section>

  {/* FEATURES SECTION */}
  <section id="features" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold font-poppins text-center mb-12 mt-20">
        Everything you need to become a Cyber Defender
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <Card
            className="p-6 bg-transparent border-2 border-[#39ff14] shadow-none"
            key={index}
          >
            <CardContent className="space-y-4 pt-4">
              {feature.icon}
              <h3 className="text-xl font-semibold text-[#39ff14]">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
</main>

);
}
