import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, Radio, Zap, Disc } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const GlitchHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bg py-24 select-none">
      {/* Background Chaos Layer */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
        <img 
          src="<span className="block"><img src="https://images.pexels.com/photos/10929789/pexels-photo-10929789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Abstract image capturing light leaks and textures from the end of a film roll." loading="lazy" /><a href="https://www.pexels.com/photo/white-and-blue-abstract-film-photo-10929789/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Zsófia Fehér on Pexels</a></span>" 
          alt="texture" 
          className="w-full h-full object-cover grayscale invert"
        />
      </div>

      {/* Telemetry Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none p-6 font-mono text-[10px] uppercase tracking-widest text-text/40">
        <div className="absolute top-10 left-10 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-accent" />
            <span>SIGNAL_STRENGTH: 98.4%</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio size={12} />
            <span>FREQ: 104.2 MHZ // SUB_LOW</span>
          </div>
        </div>
        
        <div className="absolute top-10 right-10 text-right">
          <p>EST_ORIGIN: [REDACTED]</p>
          <p>LAT: 52.5200° N | LONG: 13.4050° E</p>
        </div>

        <div className="absolute bottom-10 left-10 max-w-xs">
          <p className="mb-2">TERMINAL STATUS: ACTIVE</p>
          <div className="h-1 w-full bg-text/10 overflow-hidden">
            <motion.div 
              className="h-full bg-accent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col items-end">
          <Disc className="animate-spin-slow mb-2" size={24} />
          <p>STATIC_PULSE // V.001</p>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center text-center px-4"
      >
        <Reveal direction="up" delay={0.2}>
          <div className="mb-4 inline-flex items-center gap-2 border border-text/20 px-3 py-1 text-[12px] font-mono tracking-tighter bg-text/5 backdrop-blur-sm">
            <Zap size={14} className="fill-accent text-accent" />
            <span>THE BROADCAST IS LIVE</span>
          </div>
        </Reveal>

        <div className="relative">
          <Reveal direction="up" delay={0.4}>
            <h1 className="text-[12vw] md:text-[15vw] leading-[0.8] font-black uppercase tracking-tighter text-text mix-blend-difference italic">
              STATIC<br />PULSE
            </h1>
          </Reveal>
          
          {/* Glitch Duplicate */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-full h-full text-[12vw] md:text-[15vw] leading-[0.8] font-black uppercase tracking-tighter text-accent/30 mix-blend-screen pointer-events-none translate-x-[4px] -translate-y-[2px] blur-[1px]"
          >
            STATIC<br />PULSE
          </motion.div>
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-0 left-0 w-full h-full text-[12vw] md:text-[15vw] leading-[0.8] font-black uppercase tracking-tighter text-blue-500/30 mix-blend-screen pointer-events-none -translate-x-[4px] translate-y-[2px] blur-[1px]"
          >
            STATIC<br />PULSE
          </motion.div>
        </div>

        <Reveal direction="up" delay={0.6}>
          <div className="mt-8 md:mt-12 max-w-2xl">
            <p className="text-xl md:text-2xl font-display uppercase tracking-widest leading-none mb-6">
              Experimental Music Festival <span className="text-accent">//</span> Subterranean Frequencies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group relative px-8 py-4 bg-text text-bg overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10 font-bold uppercase tracking-tighter">Enter The Void</span>
                <div className="absolute inset-0 bg-accent translate-y-full transition-transform group-hover:translate-y-0" />
              </button>
              <button className="px-8 py-4 border border-text/20 text-text font-bold uppercase tracking-tighter hover:bg-text/5 transition-colors">
                Transmission Schedule
              </button>
            </div>
          </div>
        </Reveal>
      </motion.div>

      {/* Decorative Scanning Line */}
      <motion.div 
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-accent/20 z-10 shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.5)]"
      />

      {/* Side Bars */}
      <div className="absolute left-0 top-0 h-full w-2 border-r border-text/10 hidden md:block" />
      <div className="absolute right-0 top-0 h-full w-2 border-l border-text/10 hidden md:block" />
    </section>
  );
};

export default GlitchHero;
