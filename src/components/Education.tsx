import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Calendar,
  ChevronDown,
  Cpu,
  GraduationCap
} from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const achievements = [{ icon: Award, text: "Best Project Award - Final Year" }];

const Education = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-24 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400"
        >
          My Educational Timeline
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/5 rounded-3xl shadow-2xl p-8 backdrop-blur-md border border-white/10 hover:border-2 hover:border-blue-500 hover:shadow-xl hover:shadow-white/10"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-10 h-10 text-purple-400" />
              <div>
                <h3 className="text-2xl font-semibold">
                  B.Tech in Computer Science Engineering
                </h3>
                <div className="flex items-center gap-2 text-sm text-purple-200">
                  <Calendar className="w-4 h-4" />
                  2020 - 2024
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xl mb-2">Specialization:</h4>
              <p className="text-purple-100 text-xl">
                Artificial Intelligence & Machine Learning
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-xl mb-2 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-purple-300" /> Focus Areas
              </h4>
              <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Full-Stack Web Development",
                  "AI integrated Web Applications",
                  "Machine Learning Algorithms",
                  "Deep Learning & Neural Networks",
                  "Computer Vision",
                  "Natural Language Processing",
                  "Large Language Models",
                  "Data Science & Analytics",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 10,
                      color: "#A855F7",
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="flex items-center cursor-pointer text-gray-400 space-x-2"
                  >
                    <span>•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                {isExpanded ? "Hide Achievements" : "Show Achievements"}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 pl-2 border-l-2 border-purple-300 space-y-3"
                >
                  {achievements.map(({ icon: Icon, text }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-purple-100"
                    >
                      <Icon className="w-5 h-5 text-purple-400" />
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
