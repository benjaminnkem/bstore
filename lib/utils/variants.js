export const transition = { duration: 0.3 };

export const parentVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const fromBottomVariant = {
  initial: { opacity: 0, y: "5%" },
  animate: { opacity: 1, transition, y: 0 },
  exit: { opacity: 0, y: "5%" },
};

export const opacityVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition },
  exit: { opacity: 0 },
};

export const fromTopVariant = {
  initial: { opacity: 0, y: "-5%" },
  animate: { opacity: 1, transition, y: 0 },
  exit: { opacity: 0, y: "-5%" },
};
