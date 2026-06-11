import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();
  const positionsRef = useRef({});
  const currentPathRef = useRef(location.pathname);

  // Keep current path ref in sync
  useEffect(() => {
    currentPathRef.current = location.pathname;
  }, [location.pathname]);

  // Track scroll position for the currently active path
  useEffect(() => {
    const onScroll = () => {
      positionsRef.current[currentPathRef.current] = window.scrollY || 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On path change, restore saved position (or top if none)
  useEffect(() => {
    const pos = positionsRef.current[location.pathname];
    // Restore after paint
    requestAnimationFrame(() => {
      if (typeof pos === "number") {
        window.scrollTo({ top: pos, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;
