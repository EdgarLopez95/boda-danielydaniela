import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickHearts = () => {
  const [hearts, setHearts] = useState([]);
  const heartEmojis = ['🤍', '🕊️', '✨', '💕', '💖'];

  useEffect(() => {
    const handleClick = (e) => {
      const newHeart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        rotation: Math.random() * 360 - 180,
        delay: Math.random() * 0.2,
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 2000);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              scale: 0,
              x: heart.x,
              y: heart.y,
              opacity: 1,
              rotate: 0,
            }}
            animate={{
              scale: [0, 1.2, 1],
              y: heart.y - 100,
              opacity: [1, 1, 0],
              rotate: heart.rotation,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              delay: heart.delay,
              ease: 'easeOut',
            }}
            className="absolute text-2xl select-none"
            style={{
              left: heart.x,
              top: heart.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {heart.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickHearts;

