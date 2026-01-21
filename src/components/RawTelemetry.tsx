import { useState, useEffect } from 'react';
import { Terminal, Activity, Zap, Cpu, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/motion/Reveal';

const RawTelemetry = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const hex = Math.random().toString(16).toUpperCase().substring(2, 10);
      const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
      const statuses = ['SIGNAL_STABLE', 'DEGRADED', 'INTERCEPTED', 'OVERLOAD', 'SYNCING'];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const newLog = `[${timestamp}] 0x${hex} :: ${status}`;
      
      setLogs(prev => [newLog, ...prev].slice(0, 12));
      
      if (Math.random() > 0.85) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 120);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-12 border-y border-white/10 bg-black overflow-hidden font-mono selection:bg-white selection:text-black">
      {/* Glitch Overlay */}
      {glitch && (
        <div className="absolute inset-0 z-50 mix-blend-difference bg-white/10 pointer-events-none" />
      )}

      {/* Scratched Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Header/Title */}
        <div className="lg:col-span-12 mb-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 bg-red-600 animate-pulse" />
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-white/50">LIVE_TELEMETRY_STREAM</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              SIGNAL <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10">INTERCEPT</span>
            </h3>
          </Reveal>
        </div>

        {/* Live Logs */}
        <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 relative group overflow-hidden">
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-white/40" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60">System Log // [U-292]</span>
            </div>
            <div className="text-[10px] text-white/30 italic font-mono uppercase">Sync Rate: 98.4%</div>
          </div>
          
          <div className="space-y-1.5 h-[360px] overflow-hidden">
            {logs.map((log, i) => (
              <motion.div
                key={`${log}-${i}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`text-[11px] md:text-xs font-mono tracking-widest ${
                  log.includes('DEGRADED') || log.includes('OVERLOAD') ? 'text-red-500 font-bold' : 'text-white/60'
                }`}
              >
                {log}
              </motion.div>
            ))}
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/10" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/10" />
          <div className="absolute top-1/2 -right-4 w-8 h-1 bg-white/10 -rotate-45" />
        </div>

        {/* Stats & Visualizers */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white text-black relative overflow-hidden group">
                <div className="flex justify-between items-start mb-6">
                  <Activity className="w-5 h-5" />
                  <span className="text-[9px] font-black border-2 border-black px-1.5 py-0.5">ACTIVE</span>
                </div>
                <div className="text-4xl font-black mb-1">128.0</div>
                <div className="text-[9px] uppercase font-bold tracking-widest">Master Sync (BPM)</div>
                {/* Visualizer bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-1/2 h-full bg-black/40"
                  />
                </div>
              </div>
              
              <div className="p-5 border border-white/20 relative group overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <Zap className="w-5 h-5 text-white" />
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-red-600" />
                    <div className="w-1 h-3 bg-white/20" />
                    <div className="w-1 h-3 bg-white/20" />
                  </div>
                </div>
                <div className="text-4xl font-black text-white italic">0.04ms</div>
                <div className="text-[9px] uppercase font-bold tracking-widest text-white/50">Buffer Jitter</div>
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-6 border border-white/10 relative bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-4 h-4 text-white/30" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Neural Stress / Load</span>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Wave Distortion', value: 84 },
                  { label: 'Vocal Reconstruction', value: 29 },
                  { label: 'Ambient Pressure', value: 66 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-[10px] mb-2 uppercase font-black tracking-widest">
                      <span className="text-white/80">{stat.label}</span>
                      <span className="text-white/40">{stat.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 w-full flex overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-white relative"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] w-20 animate-slide" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-6 border border-red-900/40 bg-red-950/20 flex items-start gap-5">
              <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
              <div>
                <p className="text-[10px] font-black uppercase text-red-500 mb-2 tracking-[0.2em]">Safety Protocol: Nullified</p>
                <p className="text-[11px] text-white/50 leading-relaxed font-mono italic">
                  Static Pulse is an experimental high-frequency event. Continuous exposure may result in audial detachment or perceptual displacement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Extreme Background Graphics */}
      <div className="absolute top-1/2 -left-12 w-64 h-64 border border-white/5 -rotate-12 pointer-events-none" />
      <div className="absolute top-0 right-0 p-12 pointer-events-none">
        <div className="text-[180px] leading-none font-black text-white/[0.02] select-none uppercase -mr-20">
          RAW
        </div>
      </div>
    </section>
  );
};

export default RawTelemetry;
