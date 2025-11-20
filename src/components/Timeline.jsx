import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import AnimatedDivider from './AnimatedDivider';

const Timeline = () => {
  const events = [
    {
      id: 1,
      year: '1995',
      title: 'El Comienzo',
      text: 'Desde niños, Dios ya escribía nuestra historia...',
      image: '/images/story-baby.jpg'
    },
    {
      id: 2,
      year: '2018',
      title: 'Nuestro Encuentro',
      text: 'El momento donde nuestros caminos se unieron.',
      image: '/images/story-dating.jpg'
    },
    {
      id: 3,
      year: '2023',
      title: 'Caminando Juntos',
      text: 'Construyendo sueños y un futuro de la mano.',
      image: '/images/story-engagement.jpg'
    },
    {
      id: 4,
      year: '2025',
      title: 'El Gran Día',
      text: 'Hoy celebramos el amor que Él destinó para unirnos.',
      image: '/images/hero-mobile.jpg'
    }
  ];

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

  // Animaciones de flotación para los orbes (movimiento vertical + parpadeo)
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

  const floatingAnimation4 = {
    y: [0, -15, 0],
    opacity: [0.2, 0.5, 0.2],
    scale: [1, 1.1, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1.5
    }
  };

  return (
    <section className="py-10 bg-transparent relative overflow-hidden">
      {/* Orbes decorativos flotantes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none z-[1]"
        animate={floatingAnimation1}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none z-[1]"
        animate={floatingAnimation2}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full blur-3xl bg-[#B99855]/40 pointer-events-none z-[1]"
        animate={floatingAnimation3}
      />
      {/* Orbe detrás del título para efecto halo celestial */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl bg-[#B99855]/30 pointer-events-none z-[1]"
        animate={floatingAnimation4}
      />

      {/* 3. Contenedor del contenido (z-10, arriba de todo) */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Título decorado con iconos de hojas */}
        <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
          {/* Línea decorativa izquierda */}
          <div className="flex items-center gap-2">
            <div className="h-px w-12 bg-accent/30"></div>
            <Leaf className="w-5 h-5 text-accent rotate-12" />
            <div className="h-px w-6 bg-accent/30"></div>
          </div>

          {/* Título */}
          <h2 className="font-script text-accent text-5xl text-center">
            Nuestra Historia
          </h2>

          {/* Línea decorativa derecha */}
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-accent/30"></div>
            <Leaf className="w-5 h-5 text-accent -rotate-12" />
            <div className="h-px w-12 bg-accent/30"></div>
          </div>
        </div>

        {/* Divisor animado */}
        <AnimatedDivider />

        {/* Carrusel horizontal con scroll snap */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 gap-6 pb-10">
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/10 snap-center"
            >
              {/* Imagen */}
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Contenido de texto */}
              <div className="absolute bottom-0 p-6 text-white z-10 w-full">
                <span className="text-accent font-bold text-xl block mb-1">
                  {event.year}
                </span>
                <h3 className="font-script text-4xl block mb-2">
                  {event.title}
                </h3>
                <p className="font-body text-sm text-white/90 leading-relaxed">
                  {event.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
