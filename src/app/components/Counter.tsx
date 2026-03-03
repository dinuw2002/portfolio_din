"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Counter({ target, title }: { target: number; title: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalMiliseconds = 1500; // Total time for animation
    let incrementTime = totalMiliseconds / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-end"
    >
      <span className="text-4xl font-bold text-white tabular-nums">
        {count}<span className="text-blue-500">+</span>
      </span>
      <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
        {title}
      </span>
    </motion.div>
  );
}