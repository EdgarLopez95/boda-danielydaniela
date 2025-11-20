import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: '/images/gallery-love.jpeg',
      alt: 'Momentos especiales',
      className: 'col-span-2 row-span-2' // Imagen destacada grande
    },
    {
      id: 2,
      src: '/images/hero-mobile.jpg',
      alt: 'Hero',
      className: ''
    },
    {
      id: 3,
      src: '/images/story-1.jpeg',
      alt: 'Historia',
      className: ''
    },
    {
      id: 4,
      src: '/images/story-dating.jpg',
      alt: 'Cita',
      className: ''
    },
    {
      id: 5,
      src: '/images/story-engagement.jpg',
      alt: 'Compromiso',
      className: ''
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Título decorado con iconos de hojas */}
        <div className="flex items-center justify-center gap-4 mb-12 relative z-10">
          {/* Línea decorativa izquierda */}
          <div className="flex items-center gap-2">
            <div className="h-px w-12 bg-accent/30"></div>
            <Leaf className="w-5 h-5 text-accent rotate-12" />
            <div className="h-px w-6 bg-accent/30"></div>
          </div>

          {/* Título */}
          <h2 className="font-script text-accent text-5xl text-center">
            Nuestros Momentos
          </h2>

          {/* Línea decorativa derecha */}
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-accent/30"></div>
            <Leaf className="w-5 h-5 text-accent -rotate-12" />
            <div className="h-px w-12 bg-accent/30"></div>
          </div>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 gap-3 px-4 md:grid-cols-4 md:grid-rows-2 md:gap-6 md:px-20 auto-rows-fr">
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`relative rounded-xl overflow-hidden shadow-lg group cursor-pointer min-h-[200px] md:min-h-[300px] ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              {/* Overlay sutil en hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;

