"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow Effect (matches our Hero section) */}
      <div className="absolute -z-10 h-32 w-32 rounded-full bg-blue-600/30 blur-2xl" />

      {/* Optimized Next.js Image with professional styling */}
      <div className="rounded-full border-2 border-white/10 p-1.5 backdrop-blur-sm bg-white/5">
        <Image
          src="/my_photo1.png" // 1. Path to your file in public/
          alt="Your Name - Full Stack Developer" // 2. Critical for accessibility/SEO
          width={200} // 3. Set a specific width (for lazy loading)
          height={200} // 4. Set a specific height
          priority // 5. Important for Hero images (LCP optimization)
          className="rounded-full object-cover aspect-square shadow-xl border border-white/10"
        />
      </div>
    </motion.div>
  );
}