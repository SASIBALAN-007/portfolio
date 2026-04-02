import React from 'react';
import { motion } from 'motion/react';
import { Layout, ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ title, description, tags, image }: { title: string; description: string; tags: string[]; image?: string; key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="group relative rounded-[2rem] overflow-hidden bg-gray-900/40 border border-gray-800/50 hover:border-[#ff5733]/30 transition-all duration-500 backdrop-blur-md"
  >
    <div className="aspect-[16/10] bg-gray-950 relative overflow-hidden">
      {/* Image Placeholder or Actual Image */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full border-2 border-dashed border-gray-800/50 flex flex-col items-center justify-center gap-4 group-hover:border-[#ff5733]/30 transition-colors duration-500">
            <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center text-gray-700 group-hover:text-[#ff5733] transition-colors duration-500">
              <Layout size={32} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase group-hover:text-white transition-colors">Image Placeholder</span>
          </div>
        )}
      </motion.div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent opacity-90" />
    </div>
    
    <div className="p-8 relative">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <motion.span 
            key={tag}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#ff5733] bg-[#ff5733]/5 px-2.5 py-1 rounded-md border border-[#ff5733]/10"
            
          >
            {tag}
          </motion.span>
        ))}
      </div>
      
      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#ff5733] transition-colors duration-300 tracking-tighter">
        {title}
      </h3>
      
      <p className="text-gray-400 text-base mb-6 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
        {description}
      </p>

      <motion.div 
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        className="h-0.5 bg-gradient-to-r from-[#ff5733] to-purple-600 rounded-full opacity-50"
      />
    </div>
  </motion.div>
);
