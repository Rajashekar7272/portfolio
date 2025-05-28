import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import photo from "../images/Photo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="text-purple-500">KANAPARTHI RAJASHEKAR</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Full Stack Developer | Artificial Intelligence and Machine Learning Engineer
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            I build scalable web applications and integrate AI features using
            modern technologies. Let's create innovative solutions together.
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Rajashekar7272"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="h-6 w-6 text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kanaparthi-rajashekar-1273b6239"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Twitter className="h-6 w-6 text-white" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Instagram className="h-6 w-6 text-white" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <img
            src={photo}
            alt="Profile"
            className="rounded-full w-64 h-64 object-fill mx-auto shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
