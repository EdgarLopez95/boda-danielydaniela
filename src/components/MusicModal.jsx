import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, VolumeX, Volume2, Hand, HeartHandshake } from 'lucide-react';

const MusicModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioElement = document.createElement('audio');
    audioElement.id = 'wedding-audio';
    audioElement.loop = true;
    audioElement.src = '/song.mp3';
    audioElement.preload = 'auto';
    document.body.appendChild(audioElement);
    setAudio(audioElement);

    return () => {
      if (audioElement && document.body.contains(audioElement)) {
        audioElement.pause();
        document.body.removeChild(audioElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleEnter = async () => {
    if (audio) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error al reproducir audio:', error);
      }
    }
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
          >
            <div className="absolute inset-0">
              <img
                src="/images/hero-mobile.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 text-center px-4"
            >
              <p className="text-white text-sm md:text-base mb-4 tracking-wider">
                Bienvenidos a la boda de
              </p>
              <h1 className="font-script text-accent text-5xl md:text-7xl lg:text-8xl mb-12 drop-shadow-lg">
                Daniela & Daniel
              </h1>
              <div className="flex flex-col items-center gap-2 mb-8">
                <Volume2 className="w-5 h-5 text-white animate-pulse" />
                <p className="text-white text-xs md:text-sm text-center">
                  Sube el volumen para una mejor experiencia
                </p>
              </div>
              
              {/* Botón grande y explícito */}
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-6 md:px-14 md:py-8 bg-[#B99855]/60 backdrop-blur-md border-[3px] border-[#B99855] text-white rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:bg-[#B99855]/75 hover:border-[#B99855] transition-all duration-300 flex flex-col items-center justify-center gap-2 w-full max-w-md mx-auto"
              >
                {/* Icono de matrimonio arriba */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center"
                >
                  <HeartHandshake className="w-7 h-7 md:w-8 md:h-8" />
                </motion.div>
                
                {/* Contenedor de texto e iconos de mano */}
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex items-center"
                  >
                    <Hand className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.div>
                  <span className="text-center">
                    Presiona aquí para ver la invitación
                  </span>
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.1
                    }}
                    className="flex items-center"
                  >
                    <Hand className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.div>
                </div>
              </motion.button>
              
              {/* Texto adicional de ayuda */}
              <p className="text-white/80 text-sm md:text-base mt-4 text-center italic">
                Haz clic en el botón dorado de arriba
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={toggleMusic}
          className="fixed top-4 right-4 z-40 w-12 h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-accent hover:bg-white/30 transition-all duration-300 shadow-lg"
          title={isPlaying ? 'Pausar música' : 'Reproducir música'}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? (
            <Music size={20} strokeWidth={2} />
          ) : (
            <VolumeX size={20} strokeWidth={2} />
          )}
        </motion.button>
      )}
    </>
  );
};

export default MusicModal;

