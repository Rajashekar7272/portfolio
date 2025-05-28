import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const certifications = [
  // ... (keep your existing certifications array)
  {
    title: "React.js",
    platform: "Udemy",
  },
  {
    title: "The Complete Web Developer Bootcamp (React, Node.js, MongoDB)",
    platform: "Udemy",
  },
  {
    title: "Machine Learning with Python",
    platform: "Udemy",
  },
  {
    title: "Full-Stack Development",
    platform: "Udemy",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Keep your existing heading animation */}

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-start space-x-4 bg-gray-800 p-5 rounded-xl border border-gray-700 cursor-pointer relative overflow-hidden"
              style={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Hover overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon container with animation */}
              <motion.div
                className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </motion.div>

              <div className="relative z-10">
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-lg font-semibold text-white"
                >
                  {cert.title}
                </motion.h3>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="text-gray-400 text-sm"
                >
                  {cert.platform}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
