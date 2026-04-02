import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const SkillCard = ({ icon: Icon, title, skills }: { icon: any; title: string; skills: string[]; key?: React.Key }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-8 rounded-[2rem] bg-gray-900/40 border border-gray-800/50 hover:border-blue-500/50 backdrop-blur-xl transition-all duration-500 relative overflow-hidden cursor-default"
    >
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        <motion.div 
          animate={{ 
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
        >
          <Icon size={28} />
        </motion.div>
        
        <h3 className="text-2xl font-black text-white mb-6 tracking-tighter">{title}</h3>
        
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, idx) => (
            <motion.span 
              key={skill} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(59,130,246,0.15)",
                borderColor: "rgba(59,130,246,0.3)",
                color: "#fff"
              }}
              className="px-4 py-1.5 rounded-lg bg-gray-800/50 text-gray-400 text-xs font-bold border border-gray-700/50 transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors" />
    </motion.div>
  );
};
