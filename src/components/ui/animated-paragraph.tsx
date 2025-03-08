import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


interface AnimatedParagraphProps {
  text: string;
}

export const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ text }) => {

  return (
    <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
      {text.split(" ").map((word: string, index: number) => (
        <motion.span
          key={index}
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: 5,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.02 * index,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>

  )

}