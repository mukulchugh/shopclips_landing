import { useEffect, useState } from "react";
import { isBrowser } from "utils/index";

import useRafState from "./useRafState";

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useRafState({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight
  });
  const [isMobile, setIsMobile] = useState(
    isBrowser
      ? window.matchMedia("screen and (max-width: 768px)").matches
      : false
  );

  useEffect(() => {
    if (isBrowser) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
        setIsMobile(window.matchMedia("screen and (max-width: 768px)").matches);
      };

      window.addEventListener("resize", handler);

      return () => {
        window.removeEventListener("resize", handler);
      };
    }
  }, []);

  return { ...state, isMobile };
};

export default useWindowSize;
