"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Full Stack (MERN)",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT Auth"],
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    category: "Modern Frontend",
    skills: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    category: "DevTools & Cloud",
    skills: ["Git & GitHub", "REST APIs", "Postman", "Vercel", "Firebase", "Appwrite"],
    color: "from-purple-500/20 to-pink-500/10",
  },
];

export default function Skills() {
  return (
    <section id="about" className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl border border-white/10 bg-gradient-to-br ${group.color} p-8 backdrop-blur-sm`}
            >
              <h3 className="text-xl font-semibold text-white mb-6 underline underline-offset-8 decoration-white/10">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}