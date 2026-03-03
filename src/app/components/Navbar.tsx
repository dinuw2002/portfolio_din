"use client";

import { FileText, Download } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-0 bg-zinc-900/80 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* BRAND NAME: Always stays on the left */}
        <a href = '#hero'>
        <div className="hidden sm:block text-xl font-bold text-white tracking-tighter cursor-pointer">
         Dev.<span className="text-blue-500">Portfolio</span>
        </div>
        </a>

        {/* FLOATING LINKS: Aligned to the right/center of the header */}
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/80 p-1.5 backdrop-blur-md shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-blue-600 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="CV/Thisila_CV.pdf" // Path to your file in public/
            download="Thisila_Resume.pdf" // Forces a download instead of just opening
            className="group flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <span className="hidden sm:inline">Resume</span>
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </nav>
  );
}