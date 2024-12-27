export const scrollAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = (direction, delay) => ({
  hidden: {
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      delay: delay,
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
