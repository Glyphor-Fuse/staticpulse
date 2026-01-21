import React from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] mix-blend-difference p-6 flex justify-between items-start font-mono pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto"
      >
        <a href="/" className="text-2xl font-black tracking-tighter block leading-[0.8]">
          STATIC<br />PULSE
        </a>
        <div className="text-[10px] mt-2 opacity-60 tracking-widest">
          VOL. 004 / 2024
        </div>
      </motion.div>

      <div className="flex flex-col items-end gap-2 pointer-events-auto">
        {['LINEUP', 'TICKETS', 'ARCHIVE', 'SIGNAL'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="group relative text-sm tracking-[0.2em] overflow-hidden"
          >
            <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">
              {item}
            </span>
            <span className="absolute top-full left-0 text-accent group-hover:-translate-y-full transition-transform duration-300">
              {item}
            </span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
