// Using from https://usehooks.com/useWindowSize/
import { useEffect, useState } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

/**
 * A custom React hook that returns the current width and height of the browser window.
 *
 * This hook sets up a resize event listener and updates its state whenever
 * the window size changes. It initializes with `undefined` dimensions to
 * ensure consistency between server and client renders.
 *
 * @returns {WindowSize} An object containing the current `width` and `height` of the window.
 *
 * @example
 * import useWindowSize from './useWindowSize';
 *
 * function Component() {
 *   const { width, height } = useWindowSize();
 *
 *   return (
 *     <div>
 *       <p>Window width: {width}</p>
 *       <p>Window height: {height}</p>
 *     </div>
 *   );
 * }
 *
 * // This will dynamically update when the user resizes the browser window.
 */
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
