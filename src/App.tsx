import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Lineup from './components/Lineup';
import Footer from './components/Footer';
import GlitchOverlay from './components/GlitchOverlay';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-bg flex flex-col items-center justify-center z-50 font-mono">
        <div className="text-accent animate-pulse text-xs tracking-[0.5em] mb-4">ESTABLISHING CONNECTION...</div>
        <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-accent animate-[loading_2s_ease-in-out_infinite]" style={{ width: '40%' }}></div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-bg">
      <GlitchOverlay />
      <Nav />
      <Hero />
      <Lineup />
      <Footer />
      
      {/* Visual Noise/Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
};

export default App;
