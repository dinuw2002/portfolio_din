"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github: string;
  live: string;
}

export default function ProjectCard({ title, description, tags, image, github, live }: ProjectProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }} // 2. Adds a subtle lift on hover
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10"
    >
        {/* 3. IMAGE SECTION */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/projects/placeholder.png"} // Fallback image path
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Dark overlay that fades out on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
          <Code2 size={24} />
        </div>
        <div className="flex gap-3 text-gray-400">
          <Link href={github} target="_blank" className="hover:text-white transition"><Github size={20} /></Link>
          <Link href={live} target="_blank" className="hover:text-white transition"><ExternalLink size={20} /></Link>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-400 leading-relaxed">{description}</p>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-gray-300 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
    </motion.div>
  );
}