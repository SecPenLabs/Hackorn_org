import React from "react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: "🐦", href: "https://twitter.com", label: "Twitter" },
  { icon: "💼", href: "https://linkedin.com", label: "LinkedIn" },
  { icon: "📷", href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 font-body pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
      
        <div>
          <h1 className="text-3xl font-hackorn mb-2">Hackor[n]</h1>
          <p className="text-sm text-gray-400">
            A platform built to empower developers and creators worldwide.
          </p>
          <div className="mt-4 text-sm text-gray-400 space-y-1">
            <p>📍 Greater Noida, Gautam Buddha Nagar, Uttar Pradesh – 201307</p>
            <p>📞 +0000000000</p>
            <p>📧 hello@hackorn.dev</p>
          </div>
        </div>

     
        <div>
          <h2 className="text-xl font-heading mb-3">Quick Links</h2>
          <ul className="space-y-2">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-white transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-heading mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hackor[n]. All rights reserved.
      </div>
    </footer>
  );
}
