import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const FloatingDock = () => {
  const scrollToCeremonia = () => {
    const element = document.getElementById('ceremonia');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const googleCalendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+Daniela+%26+Daniel&dates=20251227T100000/20251227T120000&details=¡Nos+casamos!+Acompáñanos+en+este+día+especial.&location=Iglesia+San+Francisco,+Buga+-+Valle+del+Cauca';

  return (
    <motion.div
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full shadow-2xl shadow-black/20"
    >
      <button
        onClick={scrollToCeremonia}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-accent transition-all duration-300 hover:bg-white/50 rounded-full font-semibold text-xs md:text-sm"
        title="Ver ubicación de la ceremonia"
        aria-label="Ir a la sección de ceremonia"
      >
        <MapPin size={18} strokeWidth={2} />
        <span>Ver Ubicación</span>
      </button>
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-accent transition-all duration-300 hover:bg-white/50 rounded-full font-semibold text-xs md:text-sm"
        title="Agregar a Google Calendar"
        aria-label="Agregar evento a Google Calendar"
      >
        <Calendar size={18} strokeWidth={2} />
        <span>Agendar</span>
      </a>
    </motion.div>
  );
};

export default FloatingDock;
