import { motion } from 'framer-motion';

const ScannerOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-40 mix-blend-overlay">
      {/* Grid Mesh */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Scanning Laser */}
      <motion.div 
        initial={{ top: "-2%" }}
        animate={{ top: "102%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-text shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"
      />

      {/* Frame Elements */}
      <div className="absolute top-12 left-12 right-12 bottom-12 border border-text/10 pointer-events-none" />
      
      {/* Telemetry Corner: Top Left */}
      <div className="absolute top-16 left-16 font-mono text-[10px] uppercase tracking-[0.2em] space-y-1">
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_5px_rgba(220,38,38,0.8)]"
          />
          <span className="text-text font-bold">Signal_Active</span>
        </div>
        <p className="text-text/50">NODE_ID: STATIC_PULSE_01</p>
        <p className="text-text/30">BITRATE: 1411 KBPS</p>
      </div>

      {/* Telemetry Corner: Bottom Right */}
      <div className="absolute bottom-16 right-16 font-mono text-[10px] uppercase tracking-[0.2em] text-right space-y-1">
        <p className="text-text/30">EST_LATENCY: 14MS</p>
        <p className="text-text/50 font-medium">DECODING_PULSE_STREAM...</p>
        <motion.div
          animate={{ opacity: [0.1, 1, 0.1], x: [0, -1, 1, 0] }}
          transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4 }}
          className="text-text font-black bg-text/10 px-2 py-0.5 inline-block"
        >
          [ AUTH_BYPASSED ]
        </motion.div>
      </div>

      {/* CRT Scanline Stripes */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />
      
      {/* Heavy Corner Brackets */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t-4 border-l-4 border-text/60" />
      <div className="absolute top-8 right-8 w-10 h-10 border-t-4 border-r-4 border-text/60" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-b-4 border-l-4 border-text/60" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b-4 border-r-4 border-text/60" />

      {/* Random Data Bursts (Decorative) */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 font-mono text-[8px] opacity-20 rotate-90 origin-left tracking-widest text-text">
        X: 124.009 // Y: 994.122 // Z: 0.002
      </div>
    </div>
  );
};

export default ScannerOverlay;
