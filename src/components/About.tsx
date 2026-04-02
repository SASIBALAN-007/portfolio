import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0c1117] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight uppercase">
            About <span className="text-[#ff5733]">Me</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 font-medium">
            I am a fresher passionate about web development and technology. I have built several projects using modern tools and enjoy learning by building real applications. I am looking for opportunities to start my career and grow as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
