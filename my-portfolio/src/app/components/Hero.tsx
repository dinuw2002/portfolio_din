"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin, GraduationCap } from "lucide-react";
import Link from "next/link";
import ProfileImage from "./ProfileImage";
import Typewriter from "./Typewriter";
import Counter from "./Counter";
import { myProjects } from "./Projects";


export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: Identity & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* THE COVER & PROFILE PHOTO STACK */}
          <div className="relative w-full mb-16 flex flex-col items-start justify-start">
            
            {/* 2. THE COVER PHOTO */}
            <div className="w-full h-48 sm:h-56 md:h-60 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <Image 
                src="/cover_photo.png" // 3. Ensure this file is in your public/ folder
                alt="Developer workspace cover"
                width={800} // Set optimized width for lazy loading
                height={300}
                className="w-full h-full object-cover" // Ensures the image fills the container
                priority // Critical for LCP as it's above the fold
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /> {/* Subtle gradient overlay */}
            </div>

            {/* 4. THE PROFILE PHOTO (Overlapping) */}
            <div className="absolute -bottom-10 left-8">
              <ProfileImage />
            </div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Hi, I&apos;m <br />
            <span className="text-blue-500">
              <Typewriter text="Thisila Dinuwan" delay={150} />
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 font-medium">
            Full Stack Developer (MERN Stack)
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#projects" className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-gray-200 transition">
              View My Work <ArrowRight size={18} />
            </Link>
            <div className="flex gap-4">
               <Link href="https://github.com/dinuw2002" target="_blank" className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white transition">
                  <Github size={22} />
               </Link>
               <Link href="https://www.linkedin.com/in/thisila-dinuwan" target="_blank" className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white transition">
                  <Linkedin size={22} />
               </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: About Me Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:mt-32 space-y-8 border-l border-white/10 pl-8"
        >
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500">About Me</h3>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              I am an undergraduate at the <strong>University of Sri Jayewardenepura</strong>, 
              passionate about building scalable web applications. I bridge the gap between 
              complex backend logic and intuitive frontend design.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <GraduationCap className="text-blue-500" size={20} />
              <span>Bachelor of Information and Communication Technology (UG) </span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="text-blue-500" size={20} />
              <span>Based in Delgoda, Sri Lanka</span>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-sm italic text-gray-500">
              &quot;Currently perfecting the MERN stack while exploring 
              the future of Next.js and AI integration.&quot;
            </p>
          </div>

          <div className="flex justify-end pt-12">
    <div className="flex gap-12">
      <Counter target={myProjects.length} title="Projects Completed" />
      <Counter target={5} title="Tech Stacks" />
    </div>
      </div>
        </motion.div>

      </div>
    </section>
  );
}