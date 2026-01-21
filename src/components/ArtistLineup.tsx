import { motion } from 'framer-motion';
import { Activity, Zap, Radio, Target } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const ARTISTS = [
  {
    name: "NULL_POINTER",
    genre: "POWER NOISE / DECONSTRUCTED",
    origin: "BERLIN_SUB_01",
    specs: "145 BPM | ANALOG_MODULAR",
    image: "https://images.pexels.com/photos/11558377/pexels-photo-11558377.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name: "VOID_WALKER",
    genre: "EXPERIMENTAL DARK AMBIENT",
    origin: "TOKYO_DIST_9",
    specs: "0 BPM | GRANULAR_SYNTHESIS",
    image: "https://images.pexels.com/photos/8129160/pexels-photo-8129160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name: "SIGNAL_LOSS",
    genre: "GLITCH CORE / BREAKCORE",
    origin: "LONDON_VOID",
    specs: "220 BPM | HARDWARE_HACK",
    image: "https://images.pexels.com/photos/25526512/pexels-photo-25526512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name: "CRYPTIC_FREQ",
    genre: "INDUSTRIAL TECHNO",
    origin: "DETROIT_SECTOR_C",
    specs: "132 BPM | DISTORTED_KICK",
    image: "https://images.pexels.com/photos/20547072/pexels-photo-20547072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name: "KINETIC_NOISE",
    genre: "AVANT-GARDE PERCUSSION",
    origin: "NYC_STATION_X",
    specs: "VAR BPM | METAL_CONTACT",
    image: "https://images.pexels.com/photos/29080649/pexels-photo-29080649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name: "PROTOCOL_7",
    genre: "CYBERNETIC HARDCORE",
    origin: "SEOUL_DATA_HUB",
    specs: "180 BPM | NEURAL_LINK",
    image: "https://images.pexels.com/photos/4389372/pexels-photo-4389372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  }
];

export default function ArtistLineup() {
  return (
    <section id="lineup" className="relative py-24 bg-bg border-y border-text/20 overflow-hidden">
      {/* Background Telemetry Decoration */}
      <div className="absolute top-0 right-0 p-4 text-[10px] font-mono text-text/30 pointer-events-none hidden md:block">
        <div className="flex flex-col items-end">
          <span>TX_READY: 0x99A</span>
          <span>LATENCY: 2.4MS</span>
          <span>SIGNAL: STABLE</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <header className="mb-16 border-l-4 border-text pl-6">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none italic">
              SONIC_THREATS
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-text/60 font-mono text-sm max-w-md uppercase">
              The following entities have been cleared for auditory broadcast. Resistance is expected. System failure is guaranteed.
            </p>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-text/20 border border-text/20">
          {ARTISTS.map((artist, index) => (
            <motion.div 
              key={artist.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-bg p-6 hover:bg-text hover:text-bg transition-colors duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-text/5 grayscale contrast-125">
                <motion.img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="p-2 border border-current bg-bg/10 backdrop-blur-sm">
                    <Activity size={16} />
                  </div>
                  <div className="p-2 border border-current bg-bg/10 backdrop-blur-sm">
                    <Zap size={16} />
                  </div>
                </div>
              </div>

              {/* Artist Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-display font-black tracking-tighter leading-none group-hover:italic">
                    {artist.name}
                  </h3>
                  <span className="font-mono text-[10px] border border-current px-2 py-0.5">
                    ID:0{index + 1}
                  </span>
                </div>

                <div className="font-mono text-[10px] space-y-1">
                  <div className="flex items-center gap-2">
                    <Radio size={10} />
                    <span>GENRE: {artist.genre}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={10} />
                    <span>LOC: {artist.origin}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-current/20">
                  <span className="font-mono text-[10px] opacity-60 group-hover:opacity-100">
                    {artist.specs}
                  </span>
                </div>
              </div>

              {/* Hover Glitch Decorative Elements */}
              <div className="absolute bottom-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 flex justify-center">
          <motion.button 
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className="px-12 py-6 border-2 border-text font-display font-black text-xl hover:bg-text hover:text-bg transition-all uppercase flex items-center gap-4"
          >
            VIEW_FULL_ROSTER
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-current" />
              <div className="w-1 h-4 bg-current opacity-50" />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}