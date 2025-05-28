import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Book,
  Calendar,
  ChevronDown,
  Cpu,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    { icon: Trophy, text: "Dean's List - All Semesters" },
    { icon: Book, text: "Published Research Paper on ML Applications" },
    { icon: Award, text: "Best Project Award - Final Year" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "circOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const expandVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        >
          Education Journey
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent origin-top"
            />

            <div className="relative pl-16">
              <motion.div
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="bg-gray-900 rounded-xl p-6 shadow-xl mb-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <motion.div
                  variants={iconVariants}
                  className="absolute left-0 top-6 w-16 h-16 bg-gray-900 rounded-full border-4 border-purple-500 flex items-center justify-center "
                >
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                </motion.div>

                <motion.div className="space-y-4 pl-10" initial={false}>
                  <motion.h3
                    className="text-xl font-bold text-white"
                    whileHover={{ x: 10 }}
                  >
                    Bachelor of Technology in Computer Science Engineering
                  </motion.h3>

                  <motion.div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2020 - 2024</span>
                  </motion.div>

                  <motion.div className="flex items-center text-gray-400">
                    <Award className="w-4 h-4 mr-2" />
                    <span>
                      Specialization in Artificial Intelligence and Machine
                      Learning
                    </span>
                  </motion.div>

                  <motion.div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-start">
                      <Cpu className="w-5 h-5 text-purple-500 mt-1 mr-3" />
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          Key Focus Areas
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
                              className="flex items-center text-gray-400 space-x-2"
                            >
                              <span>•</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>
                      {isExpanded ? "Show Less" : "Show Achievements"}
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
                        variants={expandVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="mt-4 space-y-3 overflow-hidden"
                      >
                        {achievements.map((achievement, index) => {
                          const Icon = achievement.icon;
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center space-x-3 text-gray-400"
                            >
                              <Icon className="w-5 h-5 text-purple-500" />
                              <span>{achievement.text}</span>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
