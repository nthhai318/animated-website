import { Variants } from "framer-motion";

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.2,
    }
  }
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      "delay": delay,
    }
  }
})

export const slideIn = (direction: string, type: string, delay: number, duration: number) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 1,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      "type": type,
      "delay": delay,
      "duration": duration,
      ease: 'easeOut',
    }
  }
})

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    }
  }
}

export const textContainer = {
  hidden: {
    opacity: 0
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  })
}

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
  hidden: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    }
  }
})

export const planetVariants = (direction: string) => ({
  hidden: {
    x: direction === "left" ? "-150%" : "150%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay: 0.0,
    },
  },
})