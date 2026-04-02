import React from 'react';
import { motion } from 'motion/react';

export const Skills = () => {
  const skills = [
    "HTML5", "CSS", "Javascript", "Node.js", "React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express", "Git", "Github"
  ];

  return (
    <section className="py-12 bg-[#0c1117] border-y border-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm hover:text-[#ff5733] transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
