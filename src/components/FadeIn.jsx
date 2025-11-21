import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

