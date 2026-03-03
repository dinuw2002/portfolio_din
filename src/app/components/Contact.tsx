"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  // 1. Add state to track the form status
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset(); // Reset form on success
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      // Revert button to idle after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Text & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something <span className="text-blue-500">extraordinary.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-md">
            I’m currently seeking <strong>Full Stack Developer Internships</strong>. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 rounded-full bg-white/5 border border-white/10"><Mail size={20}/></div>
             <a 
              href="mailto:thisila100@gmail.com" 
               className="hover:text-blue-500 transition-colors"
             > <span>thisila100@gmail.com</span>
             </a> 
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 rounded-full bg-white/5 border border-white/10"><MapPin size={20}/></div>
              <a 
                 href="https://www.google.com/maps/search/?api=1&query=Delgoda,+Sri+Lanka" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-blue-500 transition-colors"
               >
                  <span>Delgoda, Sri Lanka</span>
             </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
        >
          {/* 2. Added onSubmit handler */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Name</label>
                {/* 3. Added 'name' and 'required' props */}
                <input 
                  name="name" 
                  required 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-blue-500 outline-none transition" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email</label>
                <input 
                  name="email" 
                  required 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-blue-500 outline-none transition" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                name="message" 
                required 
                rows={4} 
                placeholder="Hello, I'd like to talk about..." 
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-blue-500 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* 4. Dynamic Button UI */}
            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-white transition-all 
                ${status === "success" ? "bg-green-600" : "bg-blue-600 hover:bg-blue-500"}
                ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status === "idle" && <><Send size={18} /> Send Message</>}
              {status === "loading" && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
              {status === "success" && <><CheckCircle2 size={18} /> Sent Successfully!</>}
              {status === "error" && <>Something went wrong. Try again.</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}