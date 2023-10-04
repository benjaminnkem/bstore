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
  animate: { opacity: 1, y: 0 },
};
