import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronRight, Github, Linkedin, Layout, Code2, Database, Cpu, Globe, User } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0c1117]">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            style={{ scale, opacity }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-4"
            >
              <div className="w-12 h-[2px ] bg-[#ff5733]" />
              
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              I'm SASIBALAN.P
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight"
            >
              full-stack web developer
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-3 bg-[#ff5733] text-white rounded-md font-bold transition-all"
              >
                Contact
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf" 
                download="SASIBALAN_P_Resume.pdf"
                className="px-8 py-3 border border-gray-700 text-white rounded-md font-bold transition-all hover:bg-white/5"
              >
                My resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Circular Glow */}
              <div className="absolute inset-0 rounded-full bg-[#ff5733]/20 blur-3xl" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-[#ff5733]/30 p-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-2 border-dashed border-[#ff5733]/50 flex flex-col items-center justify-center group hover:border-[#ff5733] transition-all duration-500 relative"
                >
                  <div className="absolute inset-0 bg-gray-800/50 group-hover:bg-transparent transition-colors" />
                  
                

                  <motion.span 
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="text-[10px] font-mono text-gray-600 tracking-widest uppercase mt-4 relative z-10 group-hover:text-white transition-colors"
                  >
                    
                  </motion.span>
                  
                  {/* Optional: Keep the img tag commented out for easy replacement */}
                   <img 
                    src="/myimage.png" 
                    alt="" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  /> 
                </motion.div>








                
                
                {/* Decorative Elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border border-dashed border-[#ff5733]/40"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
