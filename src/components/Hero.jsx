import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-27T10:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <picture className="absolute inset-0 w-full h-full">
        <source 
          media="(min-width: 768px)" 
          srcSet="/images/hero-desktop.jpeg" 
        />
        <img 
          src="/images/hero-mobile.jpg" 
          alt="Hero boda Daniela y Daniel"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-16 md:pb-24 lg:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-white text-sm md:text-base tracking-[0.3em] uppercase mb-4 drop-shadow-md"
        >
          NOS CASAMOS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script text-accent text-6xl md:text-8xl mb-6 drop-shadow-lg"
        >
          Daniela & Daniel
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-base md:text-lg lg:text-xl italic mb-12 max-w-2xl drop-shadow-md"
        >
          Hoy comienza una historia escrita por Dios...
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-3 md:gap-6"
        >
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 min-w-[80px] md:min-w-[120px] flex flex-col items-center justify-center shadow-lg">
            <span className="font-script text-accent text-4xl md:text-6xl font-bold">
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
            <span className="font-body text-white text-[10px] md:text-sm uppercase tracking-[0.2em] mt-2">
              Días
            </span>
          </div>
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 min-w-[80px] md:min-w-[120px] flex flex-col items-center justify-center shadow-lg">
            <span className="font-script text-accent text-4xl md:text-6xl font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="font-body text-white text-[10px] md:text-sm uppercase tracking-[0.2em] mt-2">
              Horas
            </span>
          </div>
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 min-w-[80px] md:min-w-[120px] flex flex-col items-center justify-center shadow-lg">
            <span className="font-script text-accent text-4xl md:text-6xl font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="font-body text-white text-[10px] md:text-sm uppercase tracking-[0.2em] mt-2">
              Minutos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
