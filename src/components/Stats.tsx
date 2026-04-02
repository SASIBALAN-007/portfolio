import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';

const Counter = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const numericValue = parseInt(value);
    const suffix = value.replace(/[0-9]/g, '');
    
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(count, numericValue, {
      duration: 1.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    });

    return rounded.on("change", (latest) => {
      setDisplayValue(latest.toString() + suffix);
    });
  }, [value, count, rounded]);

  return <motion.span>{displayValue}</motion.span>;
};

export const Stats = () => {
  const stats = [
    { label: "Years Experience", value: "Fresher" },
    { label: "Projects Completed", value: "3" },
    { label: "Internship @ Karva Placer", value: "3 Months" }
  ];

  return (
    <section className="py-20 border-y border-gray-900 bg-gray-950/30 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div 
                className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-blue-400 transition-colors duration-300"
              >
                <Counter value={stat.value} />
              </motion.div>
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-gray-400 transition-colors duration-300">{stat.label}</div>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "30px" }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="h-0.5 bg-blue-600/50 mx-auto mt-4 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
