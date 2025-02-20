import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ShoppingBag, Film, Gamepad2 } from 'lucide-react';

const projects = [
  {
    title: "Men's Wear E-commerce",
    description: "A full-stack e-commerce platform for men's fashion with advanced features like cart management, user authentication, and secure payments.",
    icon: ShoppingBag,
    live: "https://men-wear.vercel.app/",
    github: "https://github.com/Rajashekar7272/Men-Wear-Ecommerce",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Movie Details Fetcher",
    description: "An interactive platform to search and explore movie and TV series information with detailed insights and recommendations.",
    icon: Film,
    live: "https://searchmovieseries.netlify.app/",
    github: "https://searchmovieseries.netlify.app/",
    tech: ["React", "API Integration", "CSS"],
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "Games Store Search",
    description: "A dynamic game search application featuring a vast collection of games with filtering and detailed information.",
    icon: Gamepad2,
    live: "https://games-search-web.netlify.app/",
    github: "https://github.com/Rajashekar7272/Games-Store",
    tech: ["React", "API", "Tailwind CSS"],
    color: "from-green-500 to-emerald-600"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                  style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                />
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`relative bg-gray-800 rounded-xl p-6 shadow-xl backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;