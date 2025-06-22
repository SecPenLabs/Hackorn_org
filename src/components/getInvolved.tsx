"use client";

import React from "react";
import Link from "next/link";
import { Users, MessageSquare, BookOpen, Share2 } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

const involvementItems = [
    {
        title: "Become a Mentor",
        description: "Guide learners and help shape their future.",
        link: "/",
        icon: Users,
    },
    {
        title: "Join the Community",
        description: "Collaborate, ask questions, and grow together.",
        link: "/",
        icon: MessageSquare,
    },
    {
        title: "Contribute Content",
        description: "Create tutorials or full courses for others to learn from.",
        link: "/",
        icon: BookOpen,
    },
    {
        title: "Spread the Word",
        description: "Share our mission with your network.",
        link: "/",
        icon: Share2,
    },
];

const GetInvolved = () => {
    return (
        <div className="font-sans">
            <BackgroundBeams />
            <section className="bg-black min-h-screen py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <div>
                        <h2 className="text-5xl font-extrabold text-gray-400 dark:text-white mb-4 font-mono">
                            🌟 Get Involved
                        </h2>
                    </div>
                    <div>
                        <p className="text-white dark:text-gray-300 mb-16 text-lg max-w-xl mx-auto">
                            Join our mission to make learning accessible, engaging, and impactful.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {involvementItems.map((item, idx) => (
                            <div key={idx}>
                                <InvolveCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const InvolveCard = ({
    title,
    description,
    link,
    icon: Icon,
}: {
    title: string;
    description: string;
    link: string;
    icon: React.ElementType;
}) => (
    <div className="bg-black border border-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
        <div className="w-12 h-12 bg-blue-100 text-gray-800 dark:text-blue-300 flex items-center justify-center rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-white dark:text-white mb-2">
            {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-300 mb-4">{description}</p>
        <Link
            href={link}
            className="text-[#4AF626] dark:text-blue-400 font-medium hover:underline"
        >
            Learn more →
        </Link>
    </div>
);

export default GetInvolved;
