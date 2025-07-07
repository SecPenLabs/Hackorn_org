'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-12 py-16 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Panel */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4AF626] font-mono">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Whether you have a question, want to give feedback, or just want to say hi — we're here for you.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Contact.png"
              alt="Contact Illustration"
              width={500}
              height={500}
              className="object-cover rounded-xl shadow-lg max-w-xs md:max-w-sm"
            />
          </div>
        </div>

        {/* Right Panel */}
        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-10 rounded-3xl shadow-2xl space-y-6 border border-gray-700"
        >
          <div>
            <Label htmlFor="name" className="text-gray-300 font-medium text-sm">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-300 font-medium text-sm">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-300 font-medium text-sm">
              Message
            </Label>
            <Textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-xl transition duration-300 cursor-pointer"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
