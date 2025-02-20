import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileCode2, 
  Palette, 
  FileJson, 
  Terminal, 
  Database, 
  Layout, 
  Boxes,
  AtSign,
  Frame,
  Layers
} from 'lucide-react';

const skills = [
  { name: 'HTML', icon: FileCode2, color: 'text-orange-500' },
  { name: 'CSS', icon: Palette, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FileJson, color: 'text-yellow-500' },
  { name: 'Python', icon: Terminal, color: 'text-green-500' },
  { name: 'Django', icon: Boxes, color: 'text-emerald-500' },
  { name: 'Tailwind CSS', icon: Layout, color: 'text-cyan-500' },
  { name: 'SQL', icon: Database, color: 'text-purple-500' },
  { name: 'MySQL', icon: Database, color: 'text-blue-600' },
  { name: 'React.js', icon: AtSign, color: 'text-sky-500' },
  { name: 'Next.js', icon: Frame, color: 'text-white' }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div 
          ref={ref} 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`mb-4 ${skill.color}`}>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-medium">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;