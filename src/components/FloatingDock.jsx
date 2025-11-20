import { motion } from 'framer-motion';
import { MapPin, Calendar, MessageCircle } from 'lucide-react';

const FloatingDock = () => {
  const scrollToCeremonia = () => {
    const element = document.getElementById('ceremonia');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const googleCalendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+Daniela+%26+Daniel&dates=20251227T100000/20251227T120000&details=¡Nos+casamos!+Acompáñanos+en+este+día+especial.&location=Iglesia+San+Francisco,+Buga+-+Valle+del+Cauca';
  
  const whatsappUrl = 'https://wa.me/573126862794?text=¡Hola+Daniela+y+Daniel!+Muchas+felicidades+por+su+boda+👰🤵';

  return (
    <motion.div
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      className="fixed bottom-6 left-1/2 z-50 flex items-center gap-8 px-8 py-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full shadow-2xl shadow-black/20"
    >
      {/* Botón Mapa - Scroll a Ceremonia */}
      <button
        onClick={scrollToCeremonia}
        className="text-gray-500 hover:text-accent transition-all duration-300 hover:scale-125 active:scale-110"
        title="Ver ubicación de la ceremonia"
        aria-label="Ir a la sección de ceremonia"
      >
        <MapPin size={24} strokeWidth={1.5} />
      </button>

      {/* Botón Calendario - Google Calendar */}
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-accent transition-all duration-300 hover:scale-125 active:scale-110"
        title="Agregar a Google Calendar"
        aria-label="Agregar evento a Google Calendar"
      >
        <Calendar size={24} strokeWidth={1.5} />
      </a>

      {/* Botón WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-accent transition-all duration-300 hover:scale-125 active:scale-110"
        title="Enviar mensaje por WhatsApp"
        aria-label="Abrir WhatsApp para enviar mensaje"
      >
        <MessageCircle size={24} strokeWidth={1.5} />
      </a>
    </motion.div>
  );
};

export default FloatingDock;

