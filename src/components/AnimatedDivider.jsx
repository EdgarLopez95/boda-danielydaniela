import { motion } from 'framer-motion';

const AnimatedDivider = () => {
  return (
    <div className="flex items-center justify-center my-8 md:my-12">
      <svg
        width="200"
        height="40"
        viewBox="0 0 200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 md:w-48 text-[#B99855]"
      >
        <motion.path
          d="M10 20 Q50 10, 90 20 T170 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Hoja decorativa en el centro */}
        <motion.path
          d="M95 20 Q100 15, 105 20 Q100 25, 95 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Línea decorativa izquierda */}
        <motion.path
          d="M10 20 L15 18 M10 20 L15 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        {/* Línea decorativa derecha */}
        <motion.path
          d="M190 20 L185 18 M190 20 L185 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default AnimatedDivider;

