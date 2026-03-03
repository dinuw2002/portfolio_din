"use client";

import { useState, useEffect } from "react";

export default function Typewriter({ text, delay }: { text: string; delay: number }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <span className="ml-1 inline-block h-3 w-3 rounded-full bg-blue-500 align-baseline animate-pulse"/>
    </span>
  );
}