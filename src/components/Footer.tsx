"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>
              © 2024 Kanaparthi Rajashekar. Let's Build the Future Together
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4"
          />
        </motion.div>
      </div>
    </footer>
  );
}
