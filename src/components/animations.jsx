export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show : {
        opacity: 1,
        transition: {duration: 0.75},
    }
}
export const titleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };