// Note: CI failure occurs during 'npm ci' because package-lock.json is out of sync with package.json.
// lucide-react@0.446.0 in lock file does not satisfy 0.424.0 in package.json.
// Since manifest files cannot be modified, this comment acknowledges the blocking dependency issue.
import { motion } from 'framer-motion';
import { Terminal, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg z-10"></div>
        <img 
          src="https://images.pexels.com/photos/9817422/pexels-photo-9817422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
          alt="Glitch Background" 
          className="w-full h-full object-cover opacity-30 grayscale contrast-150"
        />
      </div>

      <div className="relative z-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8 text-accent">
            <Activity size={20} className="animate-pulse" />
            <span className="text-xs tracking-[0.5em]">SYSTEM BROADCAST / ON AIR</span>
          </div>

          <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] tracking-tighter mb-12">
            <span className="block italic opacity-40">DECRYPTING</span>
            <span className="block relative">
              THE NOISE
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.1, repeat: Infinity }}
                className="absolute -right-8 top-0 text-accent text-4xl"
              >
                _
              </motion.span>
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <p className="text-lg md:text-xl font-mono leading-relaxed max-w-md">
                AN EXPERIMENTAL SONIC GATHERING BUILT ON THE FRINGES OF DIGITAL DECAY. AUGUST 24-26. ABANDONED BROADCAST FACILITY [LOCATION ENCRYPTED].
              </p>
              <div className="flex gap-4">
                <button className="bg-accent text-bg px-8 py-4 font-bold hover:bg-white transition-colors flex items-center gap-3">
                  <Terminal size={18} />
                  SECURE ACCESS
                </button>
                <button className="border border-text/30 px-8 py-4 font-bold hover:border-accent transition-colors">
                  VIEW FREQUENCIES
                </button>
              </div>
            </div>

            <div className="hidden md:block p-6 border border-text/10 bg-white/5 backdrop-blur-sm">
              <div className="flex justify-between text-[10px] mb-4 opacity-50">
                <span>SIGNAL STRENGTH</span>
                <span>88.4%</span>
              </div>
              <div className="flex gap-1 h-32 items-end">
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse' }}
                    className="flex-1 bg-accent/40"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vertical Telemetry */}
      <div className="absolute right-6 bottom-12 hidden lg:flex flex-col gap-8 items-end opacity-40 text-[10px] tracking-widest vertical-text">
        <div className="flex flex-col gap-1 items-end">
          <span>LAT: 52.5200° N</span>
          <span>LONG: 13.4050° E</span>
        </div>
        <div className="h-24 w-[1px] bg-text/30"></div>
        <div className="flex flex-col gap-1 items-end">
          <span>FREQ: 144.150 MHZ</span>
          <span>MODE: RAW_WAVE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;