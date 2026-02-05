import * as motion from "motion/react-client";
import { useAnimationControls } from "motion/react";
import { useEffect } from "react";

type WaveTitleProps = {
  text: string;
};

export function WaveTitle({ text }: WaveTitleProps) {
  let charIndex = 0;
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("initial");
  }, [controls]);

  const handleClick = () => {
    controls.start("initial");
  };

  return (
    <motion.h1
      className="wave-title cursor-pointer text-2xl sm:text-6xl font-thin"
      animate={controls}
      onClick={handleClick}
    >
      {text.split("\n").map((line, lineIdx) => (
        <p key={lineIdx}>
          {line.split("").map((char) => {
            const currentIndex = charIndex;
            charIndex++;

            return (
              <motion.p
                key={currentIndex}
                className="wave-letter"
                variants={{
                  initial: {
                    y: [0, -8, 0],
                    transition: {
                      duration: 0.5,
                      delay: currentIndex * 0.04,
                    },
                  },
                  hover: {
                    y: -8,
                    transition: {
                      duration: 0.3,
                      delay: currentIndex * 0.04,
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.p>
            );
          })}
        </p>
      ))}
    </motion.h1>
  );
}
