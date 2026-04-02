import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} SASIBALAN.P. Built with <span className="text-white">React</span>, <span className="text-white">Tailwind</span> & <span className="text-white">Motion</span>.
        </div>
        
        <div className="flex items-center gap-10">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:hello@developer.com" }
          ].map((social, i) => (
            <motion.a 
              key={i}
              whileHover={{ y: -5, color: "#ff5733" }}
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="text-gray-500 transition-colors"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};
