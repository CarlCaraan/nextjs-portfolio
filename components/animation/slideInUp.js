const slideInUp = {
  initial: {
    opacity: 0,
    y: "100vw",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

export default slideInUp;
