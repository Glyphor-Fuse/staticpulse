import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Radio, Activity } from 'lucide-react';

const NAV_LINKS = [
  { name: 'TICKETS_RESERVE', href: '#tickets' },
  { name: 'LINEUP_INTEL', href: '#lineup' },
  { name: 'ARCHIVE_DATA', href: '#archive' },
  { name: 'LOCATION_X', href: '#location' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl py-3 border-primary/20' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* BRAND IDENTITY */}
        <a 
          href="/" 
          className="flex items-center gap-3 group relative"
        >
          <div className="relative flex items-center justify-center">
            <Radio className="w-5 h-5 text-primary z-10" />
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute w-8 h-8 bg-primary/20 rounded-full blur-md" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black tracking-tighter leading-none">
              STATIC<span className="text-primary italic">_</span>PULSE
            </span>
            <span className="text-[10px] font-mono tracking-widest text-primary/60 leading-none mt-1">
              BROADCAST_LIVE
            </span>
          </div>
        </a>

        {/* DESKTOP INTERFACE */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center gap-8 pr-8 border-r border-primary/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-full">
              <Activity className="w-3 h-3 text-primary animate-pulse" />
              <span className="font-mono text-[9px] text-primary/80 uppercase tracking-tighter">Signal: 98.4%</span>
            </div>
            
            <button className="relative overflow-hidden px-6 py-2.5 bg-primary text-background font-mono text-xs font-black uppercase tracking-wider hover:bg-white transition-colors group">
              <div className="flex items-center gap-2 relative z-10">
                <Zap className="w-3 h-3 fill-current" />
                <span>Secure_Pass</span>
              </div>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          className="lg:hidden flex flex-col items-end gap-1.5 p-2 group"
          onClick={() => setIsOpen(true)}
        >
          <div className="w-8 h-0.5 bg-text group-hover:bg-primary transition-colors" />
          <div className="w-6 h-0.5 bg-text group-hover:bg-primary transition-colors" />
          <div className="w-4 h-0.5 bg-text group-hover:bg-primary transition-colors" />
        </button>
      </div>

      {/* FULLSCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[200] flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/5">
              <span className="font-mono text-xs text-primary/50 tracking-widest">MENU_SYSTEM_v4.0</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-4 border border-white/10 hover:border-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-12 p-12">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-4"
                >
                  <span className="font-mono text-sm text-primary/30 group-hover:text-primary transition-colors">0{idx + 1}</span>
                  <span className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter group-hover:italic group-hover:translate-x-4 transition-all duration-300">
                    {link.name.split('_')[0]}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="p-12 border-t border-white/5 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-[10px] text-primary/50 uppercase mb-4">Frequency_Data</h4>
                <p className="font-mono text-xs">BERLIN_DE // AUG_24-26</p>
                <p className="font-mono text-xs opacity-50 mt-1">52.5200° N, 13.4050° E</p>
              </div>
              <div className="flex flex-col items-end justify-center">
                <button className="w-full max-w-xs py-4 border-2 border-primary text-primary font-mono text-sm font-black uppercase hover:bg-primary hover:text-background transition-all">
                  GET_TICKETS_NOW
                </button>
              </div>
            </div>

            {/* DECORATIVE BRUTALIST GRID */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                {[...Array(144)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-text" />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
