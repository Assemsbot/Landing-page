// useIntersectionObserver.js
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentElement = ref.current;

    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    observer.observe(currentElement);

    // Cleanup function
    return () => {
      observer.unobserve(currentElement);
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;

