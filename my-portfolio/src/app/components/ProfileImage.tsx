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
      className="relative flex items-center justify-center group"
    >
      
      <div className="absolute -z-10 h-3/4 w-3/4 rounded-full bg-blue-600/40 blur-3xl transition-all duration-700 group-hover:bg-blue-500/60" />

      
      <div className="rounded-full border-2 border-white/10 p-1.5 backdrop-blur-sm bg-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        
       
        <div className="relative overflow-hidden rounded-full 
             w-40 h-40            /* Default (Mobile) */
             xs:w-48 xs:h-48      /* Very small phones */
             sm:w-56 sm:h-56      /* Tablets */
             md:w-64 md:h-64      /* Desktop */
             lg:w-72 lg:h-72      /* Large Screens */
        ">
          <Image
            src="/my_photo1.png" 
            alt="Thisila - Full Stack Developer" 
            fill 
            priority 
            sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
}