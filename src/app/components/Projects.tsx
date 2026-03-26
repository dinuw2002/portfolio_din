import ProjectCard from "./ProjectCard";

export const myProjects = [
  {
    title: "TechShop MERN E-Commerce",
    image: "/projects/techshop.png",
    description: "A comprehensive full-stack platform featuring JWT authentication, an admin dashboard, and Redux state management for seamless shopping.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "JWT"],
    github: "https://github.com/dinuw2002/Ecommerce_app",
    live: "#"
  },
  {
    title: "CineScope Movie Explorer",
    image: "/projects/cinescope.png",
    description: "A high-performance movie database using TMDB API. Includes dynamic routing, watchlist persistence, and a polished UI with Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "REST API", "Context API"],
    github: "https://github.com/dinuw2002/cinescope",
    live: "https://cinescope-zeta-opal.vercel.app/"
  },
  {
  title: "IronCorp Fitness",
  image: "/projects/gym.png",
  description: "A premium gym landing page focused on UI/UX excellence, featuring fluid animations with Framer Motion and a fully responsive design for all devices.",
  tags: ["React", "Framer Motion", "Tailwind CSS", "UI/UX"],
  github: "https://github.com/dinuw2002/Gym_Site",
  live: "https://gym-landing-site.vercel.app/"
}
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}