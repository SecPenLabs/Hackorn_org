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
    setFormData(
      {
        name: '',
        email: '',
        message: '',
      }
    );
  };

  return (
    <section className="bg-gray-950 dark:bg-gray-950 text-white min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-12 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Heading and image */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4AF626] mb-4 font-mono">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mb-6">
            Whether you have a question, want to give feedback, or just want to say hi — We're here for you.
          </p>
          <Image
            src="/Contact.jpg"
            alt="Contact Illustration"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm"
          />
        </div>

        {/* Right: Contact form */}
        <form
          className="space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4AF626]"
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4AF626]"
            />
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </Label>
            <Textarea
              id="message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              className="mt-1 w-full px-4 py-3 h-48 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4AF626]"
            />
          </div>

          <div className="text-center lg:text-left">
            <Button
              type="submit"
              className="w-full lg:w-auto bg-[#4AF626] hover:bg-[#39FF14] cursor-pointer text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
