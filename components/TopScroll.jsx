import { useEffect, useState } from "react";
import styles from "../styles/TopScroll.module.css";

export default function TopScroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const syncScroll = () => setShowButton(window.scrollY > 500);

    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => window.removeEventListener("scroll", syncScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`${styles.button} fixed bottom-12 right-20 z-30 lg:grid grid`}
      onClick={scrollToTop}
    >
      <svg
        aria-hidden="true"
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 4h8M12 20V8m-5 5 5-5 5 5" />
      </svg>
    </button>
  );
}
