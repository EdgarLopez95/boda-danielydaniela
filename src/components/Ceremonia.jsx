import { motion } from 'framer-motion';
import { Church, Calendar, Clock, MapPin, Navigation } from 'lucide-react';

const Ceremonia = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  // Animaciones de flotación para los orbes
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

  return (
    <section id="ceremonia" className="relative py-24 overflow-hidden bg-transparent">
      {/* Orbes decorativos flotantes */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none z-[1]"
        animate={floatingAnimation1}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none z-[1]"
        animate={floatingAnimation2}
      />

      {/* Contenedor principal */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto relative z-10 px-4"
      >
        {/* Tarjeta central con efecto glassmorphism */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
          {/* Layout flex vertical centrado */}
          <div className="flex flex-col items-center text-center">
            {/* Icono principal */}
            <Church className="w-12 h-12 text-accent mb-6" />

            {/* Título */}
            <h2 className="font-script text-accent text-4xl md:text-5xl mb-8">
              Ceremonia Religiosa
            </h2>

            {/* Información */}
            <div className="space-y-6 w-full max-w-md">
              {/* Fecha */}
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="font-body text-text text-lg">
                  Sábado, 27 de Diciembre de 2025
                </p>
              </div>

              {/* Hora */}
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="font-body text-text text-lg">
                  10:00 a.m.
                </p>
              </div>

              {/* Lugar */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="font-body text-text text-lg font-semibold">
                    Iglesia San Francisco
                  </p>
                </div>
                <p className="font-body text-gray-500 text-base">
                  Carrera 14 con 5ta esquina
                </p>
                <p className="font-body text-gray-500 text-base">
                  Buga - Valle del Cauca
                </p>
              </div>
            </div>

            {/* Botones de GPS */}
            <div className="flex flex-col md:flex-row gap-4 w-full mt-8 max-w-md">
              {/* Botón Google Maps */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Iglesia+San+Francisco+Buga+Valle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 border-2 border-[#5F6F52] text-[#5F6F52] rounded-full font-semibold hover:bg-[#5F6F52] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Ver en Google Maps
              </a>

              {/* Botón Waze */}
              <a
                href="https://ul.waze.com/ul?preview_venue_id=18064238.180380246.2856626&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 bg-[#5F6F52] text-white rounded-full font-semibold hover:bg-[#4a5740] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                Ir con Waze
              </a>
            </div>

            {/* Mensaje adicional */}
            <p className="font-body text-text/80 text-sm md:text-base mt-8 italic max-w-lg">
              Los esperamos para compartir este momento tan especial en presencia de Dios.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Ceremonia;

