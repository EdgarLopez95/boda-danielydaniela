import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-[#FDFBF7] flex flex-col items-center justify-center"
    >
      {/* Corazón animado */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="mb-4"
      >
        <Heart 
          size={48} 
          strokeWidth={1.5} 
          className="text-[#B99855] fill-[#B99855]" 
        />
      </motion.div>

      {/* Texto de carga */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[#B99855] text-sm font-body"
      >
        Cargando nuestra historia...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;

