import { motion } from 'framer-motion';
import { Church, Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import FadeIn from './FadeIn';

const Ceremonia = () => {
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
    <section id="ceremonia" className="relative py-8 bg-transparent">
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none z-[1]"
        animate={floatingAnimation1}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none z-[1]"
        animate={floatingAnimation2}
      />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <FadeIn>
          <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
            <div className="flex flex-col items-center text-center">
              <Church className="w-12 h-12 text-accent mb-6" />
              <h2 className="font-script text-accent text-4xl md:text-5xl mb-4">
                Ceremonia Religiosa
              </h2>

              <FadeIn delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mx-auto mb-8">
                  <div className="flex items-center gap-4 p-4 bg-[#FDFBF7] border border-[#B99855]/30 rounded-xl shadow-sm text-left">
                    <div className="p-2 bg-accent/10 rounded-full">
                      <Calendar className="w-6 h-6 text-accent flex-shrink-0" />
                    </div>
                    <p className="font-body text-text text-base font-semibold">
                      Sábado, 27 de Diciembre
                    </p>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-[#FDFBF7] border border-[#B99855]/30 rounded-xl shadow-sm text-left">
                    <div className="p-2 bg-accent/10 rounded-full">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                    </div>
                    <p className="font-body text-text text-base font-semibold">
                      10:00 a.m.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-[#FDFBF7] border border-[#B99855]/30 rounded-xl shadow-sm text-left md:col-span-2">
                    <div className="p-2 bg-accent/10 rounded-full">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-body text-text text-base font-semibold">
                        Iglesia San Francisco
                      </p>
                      <p className="font-body text-gray-500 text-sm">
                        Carrera 14 con 5ta esquina
                      </p>
                      <p className="font-body text-gray-500 text-sm">
                        Buga - Valle del Cauca
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex flex-col md:flex-row gap-4 w-full mt-8 max-w-md">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Iglesia+San+Francisco+Buga+Valle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-6 border-2 border-[#5F6F52] text-[#5F6F52] rounded-full font-semibold hover:bg-[#5F6F52] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-5 h-5" />
                    Ver en Google Maps
                  </a>
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
              </FadeIn>

              <FadeIn delay={0.7}>
                <p className="font-body text-text/80 text-sm md:text-base mt-8 italic max-w-lg">
                  Los esperamos para compartir este momento tan especial en presencia de Dios.
                </p>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Ceremonia;
