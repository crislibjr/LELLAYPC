// src/hooks/useScrollReveal.js
//
// Small IntersectionObserver hook: attach the returned ref to any element
// that has the `.reveal` class (see index.css) and it will pick up the
// `.is-visible` class the first time it scrolls into view.
//
// Kept deliberately simple — one observer per element, disconnected after
// the first reveal so it never fires twice.

import { useEffect, useRef } from "react";

export function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the browser doesn't support IntersectionObserver, just show the
    // content immediately rather than leaving it invisible.
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
