import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

const MusicModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  // Crear el elemento de audio solo una vez
  useEffect(() => {
    const audioElement = document.createElement('audio');
    audioElement.id = 'wedding-audio';
    audioElement.loop = true;
    audioElement.src = '/song.mp3';
    audioElement.preload = 'auto';
    document.body.appendChild(audioElement);
    setAudio(audioElement);

    return () => {
      // Limpiar al desmontar
      if (audioElement && document.body.contains(audioElement)) {
        audioElement.pause();
        document.body.removeChild(audioElement);
      }
    };
  }, []);

  // Controlar overflow del body cuando el modal está abierto
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
        // Si falla la reproducción automática, continuar sin audio
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
      {/* Modal de Bienvenida */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
          >
            {/* Fondo con imagen desenfocada */}
            <div className="absolute inset-0">
              <img
                src="/images/hero-mobile.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Contenido Centrado */}
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
              <button
                onClick={handleEnter}
                className="px-8 py-3 border border-white/80 text-white rounded-full font-semibold hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10"
              >
                Ingresar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control de Música Flotante */}
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

