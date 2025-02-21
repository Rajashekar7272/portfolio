import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Get In Touch
          </motion.h2>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
            <motion.div
              variants={itemVariants}
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl border border-gray-700"
              >
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                  <a
                    href="tel:+919014629382"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +91 901 462 9382
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl border border-gray-700"
              >
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Email</h3>
                  <a
                    href="mailto:kanaparthirajashekar77@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors break-all"
                  >
                    kanaparthirajashekar77@gmail.com
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.form
              variants={itemVariants}
              className="mt-8 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;