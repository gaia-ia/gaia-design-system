import { useEffect, useRef } from "react";

/**
 * Custom React hook that returns `true` only on the component's initial mount,
 * and `false` on all subsequent renders.
 *
 * This is useful when you need to differentiate between the component's first render
 * and updates caused by state or prop changes.
 *
 * @returns {boolean} `true` if the component is on its initial mount, otherwise `false`.
 *
 * @example
 * // Log a message only when the component is first mounted
 * const isMount = useIsMount();
 * useEffect(() => {
 *   if (!isMount) {
 *     console.log('Component updated');
 *   }
 * }, [someDependency]);
 *
 * @example
 * // Prevent a side effect from running on initial render
 * const isMount = useIsMount();
 * useEffect(() => {
 *   if (!isMount) {
 *     fetchData();
 *   }
 * }, [query]);
 */
export const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
