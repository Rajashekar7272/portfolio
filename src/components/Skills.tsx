import { motion } from "framer-motion";
import {
  AtSign,
  BirdIcon,
  BookOpen,
  Boxes,
  Brain,
  Code2,
  Database,
  FileCode2,
  FileJson,
  Frame,
  GitBranch,
  Layers,
  Layout,
  Lightbulb,
  MessageSquare,
  Palette,
  Rocket,
  Server,
  Shield,
  Ship,
  Target,
  Terminal,
  Users,
  Zap
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const skills = [
  // Front-End Development
  {
    name: "HTML5",
    category: "Front-End Development",
    icon: FileCode2,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    category: "Front-End Development",
    icon: Palette,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    category: "Front-End Development",
    icon: FileJson,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    category: "Front-End Development",
    icon: Code2,
    color: "text-blue-600",
  },
  {
    name: "React.js",
    category: "Front-End Development",
    icon: AtSign,
    color: "text-sky-500",
  },
  {
    name: "Next.js",
    category: "Front-End Development",
    icon: Frame,
    color: "text-white",
  },
  {
    name: "Tailwind CSS",
    category: "Front-End Development",
    icon: Layout,
    color: "text-cyan-500",
  },
  {
    name: "Redux",
    category: "Front-End Development",
    icon: Layers,
    color: "text-purple-500",
  },
  {
    name: "Zudstand",
    category: "Front-End Development",
    icon: Layers,
    color: "text-purple-500",
  },

  // Back-End Development & APIs
  {
    name: "Node.js",
    category: "Back-End Development & APIs",
    icon: Server,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    category: "Back-End Development & APIs",
    icon: Zap,
    color: "text-gray-400",
  },
  {
    name: "Python",
    category: "Back-End Development & APIs",
    icon: Terminal,
    color: "text-green-600",
  },
  {
    name: "Django",
    category: "Back-End Development & APIs",
    icon: Boxes,
    color: "text-emerald-500",
  },
  // {
  //   name: "Flask",
  //   category: "Back-End Development & APIs",
  //   icon: FlaskConical,
  //   color: "text-gray-500",
  // }, // Use Terminal if FlaskConical unavailable
  {
    name: "RESTful API design",
    category: "Back-End Development & APIs",
    icon: GitBranch,
    color: "text-red-500",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Databases",
    icon: Database,
    color: "text-blue-700",
  },
  {
    name: "MySQL",
    category: "Databases",
    icon: Database,
    color: "text-blue-600",
  },
  {
    name: "SQL",
    category: "Databases",
    icon: Database,
    color: "text-purple-500",
  },
  {
    name: "MongoDB",
    category: "Databases",
    icon: Database,
    color: "text-green-500",
  },
  {
    name: "Vector Databases",
    category: "Databases",
    icon: Database,
    color: "text-yellow-500",
  },
  {
    name: "RAG pipelines",
    category: "Databases",
    icon: Database,
    color: "text-orange-500",
  },

  // Artificial Intelligence & Machine Learning
  {
    name: "Artificial Neural Networks",
    category: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    color: "text-purple-600",
  },
  {
    name: "Convolutional Neural Networks",
    category: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    color: "text-purple-700",
  },
  {
    name: "Recurrent Neural Networks",
    category: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    color: "text-purple-800",
  },
  {
    name: "Natural Language Processing",
    category: "Artificial Intelligence & Machine Learning",
    icon: MessageSquare,
    color: "text-blue-500",
  },
  {
    name: "Generative AI",
    category: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    color: "text-red-500",
  },
  {
    name: "Large Language Models (LLMs)",
    category: "Artificial Intelligence & Machine Learning",
    icon: BookOpen,
    color: "text-green-500",
  },
  {
    name: "Langchain",
    category: "Artificial Intelligence & Machine Learning",
    icon: BirdIcon,
    color: "text-green-500",
  },
  {
    name: "TensorFlow",
    category: "Artificial Intelligence & Machine Learning",
    icon: Code2,
    color: "text-orange-500",
  },
  {
    name: "PyTorch",
    category: "Artificial Intelligence & Machine Learning",
    icon: Code2,
    color: "text-red-600",
  },
  {
    name: "Pandas",
    category: "Artificial Intelligence & Machine Learning",
    icon: FileJson,
    color: "text-blue-400",
  },
  {
    name: "NumPy",
    category: "Artificial Intelligence & Machine Learning",
    icon: FileJson,
    color: "text-blue-300",
  },
  {
    name: "Scikit-learn",
    category: "Artificial Intelligence & Machine Learning",
    icon: Code2,
    color: "text-green-600",
  },

  // DevOps
  {
    name: "Git/GitHub",
    category: "DevOps",
    icon: GitBranch,
    color: "text-gray-500",
  },
  { name: "Vercel", category: "DevOps", icon: Rocket, color: "text-black" },
  { name: "Netlify", category: "DevOps", icon: Rocket, color: "text-teal-500" },
  { name: "Docker", category: "DevOps", icon: Ship, color: "text-blue-500" },
  { name: "Jest", category: "DevOps", icon: Shield, color: "text-red-500" },
  { name: "PyTest", category: "DevOps", icon: Shield, color: "text-green-500" },
  { name: "Postman", category: "DevOps", icon: Zap, color: "text-orange-500" },

  // Soft Skills
  {
    name: "Cross-Functional Collaboration",
    category: "Soft Skills",
    icon: Users,
    color: "text-indigo-500",
  },
  {
    name: "Problem Solving",
    category: "Soft Skills",
    icon: Lightbulb,
    color: "text-yellow-400",
  },
  {
    name: "Creative Thinking",
    category: "Soft Skills",
    icon: Lightbulb,
    color: "text-pink-500",
  },
  {
    name: "Verbal & Written Communication",
    category: "Soft Skills",
    icon: MessageSquare,
    color: "text-blue-500",
  },
  {
    name: "Agile Execution",
    category: "Soft Skills",
    icon: Target,
    color: "text-green-500",
  },
  {
    name: "Product First Mindset",
    category: "Soft Skills",
    icon: Target,
    color: "text-purple-500",
  },
  {
    name: "Accountability",
    category: "Soft Skills",
    icon: Shield,
    color: "text-red-500",
  },
  {
    name: "Adaptability",
    category: "Soft Skills",
    icon: Zap,
    color: "text-orange-500",
  },
  {
    name: "Growth Mindset",
    category: "Soft Skills",
    icon: BookOpen,
    color: "text-green-600",
  },
];

const categories = [
  "Front-End Development",
  "Back-End Development & APIs",
  "Databases",
  "Artificial Intelligence & Machine Learning",
  "DevOps",
  "Soft Skills",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="space-y-16">
          {categories.map((category) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );
            return (
              <div key={category} ref={ref}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-semibold text-white mb-6"
                >
                  {category}
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
                  {categorySkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className={`mb-4 ${skill.color}`}>
                          <Icon size={40} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-white font-medium">{skill.name}</h4>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
