export const iconStyle = () => {
  return "text-3xl mx-4 hover:text-yellow-500";
};

export const navStyle = () => {
  return "mx-4 text-lg hover:text-yellow-500";
};

export const opacityTransition = (loadContent: boolean) =>
  `transition-opacity duration-[1000ms] ease-in ${
    loadContent ? "opacity-100" : "opacity-0"
  }`;

export const headerStyle = (fromHome: boolean, loadContent: boolean) => {
  if (fromHome) {
    return `pt-20 transition-transform duration-[300ms] ease-in ${
      loadContent ? "translate-y-0" : "translate-y-[100%]"
    }`;
  } else {
    return "pt-20";
  }
};
