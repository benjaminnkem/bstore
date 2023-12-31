import { motion } from "framer-motion";
import { fromBottomVariant, parentVariant } from "./variants";

export const TransitionElement = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "-5%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -3, opacity: 0 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export const TransitionStart = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
};

export const TransitionLeft = ({ children }) => {
  return (
    <motion.div initial={{ x: "-5%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
};

export const TransitionRight = ({ children }) => {
  return (
    <motion.div initial={{ x: "5%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
};

export const TransitionElementStagger = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// MAINNER
export const TransitionParent = ({ children, addClass }) => {
  return (
    <motion.div variants={parentVariant} initial="initial" animate="animate" className={addClass && addClass}>
      {children}
    </motion.div>
  );
};

export const TransitionFromBottom = ({ children, addClass }) => {
  return (
    <motion.div variants={fromBottomVariant} className={addClass && addClass}>
      {children}
    </motion.div>
  );
};
