import React from "react";

const aboutItems = [
  {
    title: "Our Mission",
    description:
      "Our mission at Hackor[n] is to build an inclusive space where creators and innovators can thrive, collaborate, and grow together.",
    icon: "🎯",
  },
  {
    title: "How it Works",
    description:
      "Hackor[n] connects coders, designers, and learners through open challenges, collaborative projects, and a rich resource hub.",
    icon: "⚙️",
  },
  {
    title: "Why Hackor[n]",
    description:
      "We created Hackor[n] to be the launchpad for projects that matter. With clean architecture and scalable components, it's developer-first.",
    icon: "💡",
  },
  {
    title: "Our Vision",
    description:
      "To become the central community for tomorrow’s tech leaders—where ideas turn into impact and learning never stops.",
    icon: "🌐",
  },
];

export default function AboutUs() {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white font-body">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-hackorn mb-4">About Hackor[n]</h2>
        <p className="text-lg mb-10">
          Dive into what makes Hackor[n] unique—our mission, our working model, and our vision for the tech future.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-heading mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
