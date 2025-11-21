import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import FadeIn from './FadeIn';

const Timeline = () => {
  const events = [
    {
      id: 1,
      title: 'El Comienzo',
      text: 'Desde niños, Dios ya escribía nuestra historia… hoy celebramos el amor que Él destinó para unirnos por siempre.',
      image: '/images/story-baby.jpg'
    },
    {
      id: 2,
      title: 'Nuestro Encuentro',
      text: 'Hoy comienza una historia escrita por Dios tejida con fe, esperanza y amor.',
      image: '/images/story-dating.jpg'
    },
    {
      id: 3,
      title: 'Caminando Juntos',
      text: 'Te invitamos a estar presente en el día en que inicia nuestro nuevo capítulo, bendecido por Dios.',
      image: '/images/story-engagement.jpg'
    }
  ];

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
    <section className="py-8 bg-transparent relative overflow-hidden">
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
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl bg-[#B99855]/30 pointer-events-none z-[1]"
        animate={floatingAnimation4}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <div className="h-px w-12 bg-accent/30"></div>
              <Leaf className="w-5 h-5 text-accent rotate-12" />
              <div className="h-px w-6 bg-accent/30"></div>
            </div>
            <h2 className="font-script text-accent text-5xl text-center">
              Nuestra Historia
            </h2>
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-accent/30"></div>
              <Leaf className="w-5 h-5 text-accent -rotate-12" />
              <div className="h-px w-12 bg-accent/30"></div>
            </div>
          </div>
        </FadeIn>

        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 gap-6 pb-10">
          {events.map((event, index) => (
            <FadeIn key={event.id} delay={index * 0.2}>
              <div className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/10 snap-center">
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white z-10 w-full">
                <h3 className="font-script text-3xl md:text-4xl block mb-3">
                  {event.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-white/95 leading-relaxed">
                  {event.text}
                </p>
              </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
