import React from 'react';
import { motion } from 'framer-motion';

const ARTISTS = [
  { name: 'X-ORION', time: '22:00', stage: 'VOID' },
  { name: 'PULSE_WIDTH', time: '23:30', stage: 'VOID' },
  { name: 'NULL_POINTER', time: '01:00', stage: 'VOID' },
  { name: 'STATIC_MOTHER', time: '02:30', stage: 'SIGNAL' },
  { name: 'SIGNAL_LOST', time: '04:00', stage: 'SIGNAL' },
  { name: 'RAW_DATA', time: '05:30', stage: 'VOID' },
];

const Lineup = () => {
  return (
    <section id="lineup" className="py-24 px-6 border-t border-text/10 bg-bg">
      <div className="flex justify-between items-baseline mb-16">
        <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter">MANIFEST</h2>
        <span className="text-accent font-mono text-sm tracking-[0.3em]">PHASE_01.EXE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-text/10 border border-text/10">
        {ARTISTS.map((artist, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative bg-bg p-8 hover:bg-accent transition-colors duration-500 cursor-crosshair overflow-hidden"
          >
            {/* Hover Image Reveal */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
               <img 
                src="https://images.pexels.com/photos/11356525/pexels-photo-11356525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt={artist.name} 
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-xs opacity-50 group-hover:text-bg group-hover:opacity-100">{artist.time}</span>
                <span className="font-mono text-[10px] border border-text/20 px-2 py-0.5 group-hover:border-bg/40 group-hover:text-bg">
                  {artist.stage}
                </span>
              </div>
              
              <h3 className="text-3xl font-black tracking-tighter group-hover:text-bg transition-colors">
                {artist.name}
              </h3>
              
              <div className="mt-4 h-[1px] w-full bg-text/10 group-hover:bg-bg/20"></div>
              
              <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-bg text-[10px] tracking-widest">
                <span>SIGNAL ESTABLISHED</span>
                <span>[REPLAY]</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        {['#RAW', '#SONIC_TERROR', '#EXPERIMENTAL', '#DIGITAL_DECAY'].map((tag) => (
          <span key={tag} className="text-[10px] tracking-widest opacity-30 px-3 py-1 border border-text/10">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Lineup;