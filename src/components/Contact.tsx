import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@developer.com",
      href: "mailto:hello@developer.com",
      color: "bg-[#ff5733]"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/username",
      href: "https://github.com",
      color: "bg-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/username",
      href: "https://linkedin.com",
      color: "bg-[#ff5733]/80"
    }
  ];

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-gray-900/40 rounded-[2.5rem] p-8 md:p-24 border border-gray-800/50 relative overflow-hidden backdrop-blur-3xl shadow-2xl"
        >
          {/* Subtle Background Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff5733]/5 rounded-full blur-[100px] -mr-48 -mt-48" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] -ml-48 -mb-48" 
          />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5733]/10 text-[#ff5733] text-[10px] font-bold tracking-widest uppercase mb-8 border border-[#ff5733]/20"
            >
              <MessageSquare size={14} />
              Get in Touch
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter text-white"
            >
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5733] to-[#ff5733]/80">extraordinary</span> together.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-lg md:text-xl mb-20 leading-relaxed max-w-2xl mx-auto font-medium"
            >
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {contactMethods.map((method, idx) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.8, ease: "easeOut" }}
                >
                  <MagneticButton>
                    <motion.a 
                      href={method.href}
                      target={method.href.startsWith('http') ? "_blank" : undefined}
                      rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex flex-col items-center gap-6"
                    >
                      <div className={`w-20 h-20 rounded-[1.5rem] ${method.color} flex items-center justify-center text-white shadow-xl transition-all duration-500 relative overflow-hidden ${
                        method.label === "Email" ? "group-hover:shadow-blue-600/20" : 
                        method.label === "GitHub" ? "group-hover:shadow-gray-800/20" : 
                        "group-hover:shadow-blue-700/20"
                      }`}>
                        <method.icon size={28} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        <motion.div 
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" 
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-2 group-hover:text-[#ff5733] transition-colors">{method.label}</div>
                        <div className="text-white text-lg font-black tracking-tighter group-hover:scale-105 transition-transform duration-500 break-all">{method.value}</div>
                      </div>
                    </motion.a>
                  </MagneticButton>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-24 flex items-center justify-center gap-4 text-gray-600 text-[10px] font-bold uppercase tracking-widest"
            >
              <span className="w-8 h-[1px] bg-gray-800" />
              Open to work !!
              <span className="w-8 h-[1px] bg-gray-800" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
