import { useMemo, useEffect } from "react";
import { isBrowser } from "utils/index";

import useRafState from "./useRafState";

let prevScrollYPos = isBrowser ? window.scrollY || 0 : 0;

const useWindowScroll = () => {
  const [state, setState] = useRafState(() => ({
    x: isBrowser ? window.scrollX : 0,
    y: isBrowser ? window.scrollY : 0
  }));

  // dep variable so that we don't calculate everytime: useMemo
  const dep = state.y <= prevScrollYPos;

  const show = useMemo(() => {
    if (state.y <= 0) return true;
    else return state.y <= prevScrollYPos;
  }, [dep]);

  useEffect(() => {
    const handler = () => {
      setState((state) => {
        const { scrollX, scrollY } = window;
        //Check state for change, return same state if no change happened to prevent rerender
        //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
        prevScrollYPos = state.y;
        return state.x !== scrollX || state.y !== scrollY
          ? {
              x: scrollX,
              y: scrollY
            }
          : state;
      });
    };

    //We have to update window scroll at mount, before subscription.
    //Window scroll may be changed between render and effect handler.
    handler();

    window.addEventListener("scroll", handler, {
      capture: false,
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return show;
};

export default useWindowScroll;
