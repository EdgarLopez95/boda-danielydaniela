import { useState, useEffect } from 'react';

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
      {/* Imagen responsive con picture */}
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

      {/* Overlay cinematográfico con degradado vertical */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Contenido centrado con desplazamiento hacia abajo */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-16 md:pb-24 lg:pb-32">
        {/* Texto superior */}
        <p className="text-white text-sm md:text-base tracking-[0.3em] uppercase mb-4 drop-shadow-md animate-fade-in">
          NOS CASAMOS
        </p>

        {/* Nombres */}
        <h1 className="font-script text-accent text-6xl md:text-8xl mb-6 drop-shadow-lg animate-fade-in-delay">
          Daniela & Daniel
        </h1>

        {/* Frase */}
        <p className="text-white/90 text-base md:text-lg lg:text-xl italic mb-12 max-w-2xl drop-shadow-md animate-fade-in-delay-2">
          Hoy comienza una historia escrita por Dios...
        </p>

        {/* Cuenta Regresiva con efecto Glassmorphism */}
        <div className="flex gap-3 md:gap-6 animate-fade-in-delay-3">
          {/* Días */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 min-w-[80px] md:min-w-[120px] flex flex-col items-center justify-center shadow-lg">
            <span className="font-script text-accent text-4xl md:text-6xl font-bold">
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
            <span className="font-body text-white text-[10px] md:text-sm uppercase tracking-[0.2em] mt-2">
              Días
            </span>
          </div>

          {/* Horas */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 min-w-[80px] md:min-w-[120px] flex flex-col items-center justify-center shadow-lg">
            <span className="font-script text-accent text-4xl md:text-6xl font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="font-body text-white text-[10px] md:text-sm uppercase tracking-[0.2em] mt-2">
              Horas
            </span>
          </div>

          {/* Minutos */}
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-3 md:p-6 min-w-[80px] md:min-w-[120px] flex flex-col items-center justify-center shadow-lg">
            <span className="font-script text-accent text-4xl md:text-6xl font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="font-body text-white text-[10px] md:text-sm uppercase tracking-[0.2em] mt-2">
              Minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
