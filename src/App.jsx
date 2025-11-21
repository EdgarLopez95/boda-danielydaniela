import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Ceremonia from './components/Ceremonia'
import Gallery from './components/Gallery'
import FloatingDock from './components/FloatingDock'
import MusicModal from './components/MusicModal'
import ClickHearts from './components/ClickHearts'
import Preloader from './components/Preloader'
import GrainOverlay from './components/GrainOverlay'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const floatingAnimation1 = {
    y: [0, -20, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  const floatingAnimation2 = {
    y: [0, 15, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 0.5
    }
  };

  const floatingAnimation3 = {
    y: [0, -25, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }
  };

  return (
    <div className="min-h-screen font-body text-text">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && <MusicModal />}

      <ClickHearts />

      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[#FDFBF7]"></div>
        <img 
          src="/images/bg-texture.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" 
        />
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none"
          animate={floatingAnimation1}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none"
          animate={floatingAnimation2}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full blur-3xl bg-[#B99855]/30 pointer-events-none"
          animate={floatingAnimation3}
        />
      </div>

      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Timeline />
        <Ceremonia />
        <Gallery />
      </main>

      <FloatingDock />
      <GrainOverlay />
    </div>
  )
}

export default App
