export const iconStyle = () => "text-3xl mx-4 hover:text-yellow-500";

export const navStyle = () => "mx-4 text-lg hover:text-yellow-500";

export const contentLoadTransitionStyle = (loadContent: boolean) =>
  `max-w-xl mx-auto px-6 pt-10 text-md transition-opacity duration-[1000ms] ease-in ${
    loadContent ? "opacity-100" : "opacity-0"
  }`;
