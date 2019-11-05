import { useRef, useEffect } from 'react';

// Thanks to Dan Abramaov and his blog 'Overreacted' for this useful tip!
export const UseIntervall = function useInterval(callback, delay) {
  const savedCallback = useRef(null);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    const tick = function tick() {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
