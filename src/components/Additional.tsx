import { motion } from "framer-motion";
import { Smartphone, Sparkles, Tv2 } from "lucide-react";

const info = {
  technologies: [
    "ChatGPT",
    "GEMINI-AI",
    "GROQ-AI",
    "Prompt-Engineering",
    "Sanity Database",
  ],
  hobbies: [
    "Listening to TED-TALKS",
    "Image Editing & Video Editing",
    "Watching movies & series",
  ],
  coursework: "Developing Mobile Apps (React Native Cross Platform)",
};

const AdditionalInfo = () => {
  return (
    <section id="additional-info" className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Additional Information
        </motion.h2>

        {/* Technologies Known */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="text-xl text-white font-semibold flex items-center gap-2 mb-4">
            <Sparkles className="text-purple-400" /> Technologies Known
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
            {info.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="text-xl text-white font-semibold flex items-center gap-2 mb-4">
            <Tv2 className="text-teal-400" /> Hobbies
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
            {info.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </motion.div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl text-white font-semibold flex items-center gap-2 mb-4">
            <Smartphone className="text-green-400" /> Additional Coursework
          </h3>
          <p className="text-gray-300 pl-4">{info.coursework}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
