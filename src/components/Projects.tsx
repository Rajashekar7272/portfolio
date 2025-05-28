import { motion } from "framer-motion";
import {
  Bot,
  ExternalLink,
  Film,
  FilmIcon,
  Gamepad2,
  Github,
  MessageSquare,
  MonitorPlayIcon,
  MonitorSpeaker,
  Search,
  ShoppingBag,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  // Original projects

  // New projects
  {
    title: "Social Connection – Scalable Social Media Web Application",
    description:
      "A scalable social media platform built with MERN stack, featuring secure authentication, real-time interactions, and a modular frontend.",
    icon: MessageSquare,
    live: "https://social-connection-website.vercel.app/",
    github: "https://github.com/Rajashekar7272/social-connection-website",
    tech: [
      "JavaScript",
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Vercel",
      "Git",
      "Docker",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Disney-Style-Clone AI-Movie Recommendation Engine",
    description:
      "AI-powered movie recommendation engine using content-based filtering and NLP for personalized suggestions.",
    icon: MonitorPlayIcon,
    live: "https://stream-ai-psi.vercel.app/",
    github: "https://github.com/Rajashekar7272/AI-Disney-Clone",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Google Gemini API",
      "Next.js",
      "Flask",
      "Vercel",
      "Git",
    ],
    color: "from-red-500 to-yellow-500",
  },
  {
    title: "AI-Powered News Chatbot",
    description:
      "Conversational AI chatbot for real-time news summarization and sentiment analysis with high accuracy.",
    icon: Bot,
    live: "https://news-ai-nine-psi.vercel.app/",
    github: "https://github.com/Rajashekar7272/AI-News-ChatBot",
    tech: [
      "Python",
      "Transformers",
      "Google Gemini API",
      "NLTK",
      "spaCy",
      "Flask",
      "MongoDB",
      "Docker",
      "Git",
      "Postman",
    ],
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Men's Wear E-commerce",
    description:
      "A full-stack e-commerce platform for men's fashion with advanced features like cart management, user authentication, and secure payments.",
    icon: ShoppingBag,
    live: "https://men-wear.vercel.app/",
    github: "https://github.com/Rajashekar7272/Men-Wear-Ecommerce",
    tech: ["Next.js", "React", "Tailwind CSS"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Movie Details Fetcher",
    description:
      "An interactive platform to search and explore movie and TV series information with detailed insights and recommendations.",
    icon: Film,
    live: "https://searchmovieseries.netlify.app/",
    github: "https://searchmovieseries.netlify.app/", // Note: This should likely be updated to a GitHub URL
    tech: ["React", "API Integration", "CSS"],
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Games Store Search",
    description:
      "A dynamic game search application featuring a vast collection of games with filtering and detailed information.",
    icon: Gamepad2,
    live: "https://games-search-web.netlify.app/",
    github: "https://github.com/Rajashekar7272/Games-Store",
    tech: ["React", "API", "Tailwind CSS"],
    color: "from-green-500 to-emerald-600",
  },
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
          Technical Experience Featured Projects
        </motion.h2>
        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer">
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
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl`}
                />
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-gray-800 rounded-xl p-6 shadow-xl backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
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
                      className="text-white hover:text-purple-400 transition-colors flex items-center space-x-1"
                    >
                      <ExternalLink className="w-6 h-6" />
                      <span>open</span>
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
