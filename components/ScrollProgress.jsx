import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;

    function updateProgress() {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollableHeight = scrollHeight - clientHeight;
      const progress =
        scrollableHeight > 0
          ? Math.max(0, Math.min(1, scrollTop / scrollableHeight))
          : 0;

      bar.style.setProperty("--scroll-progress", progress);
    }

    const observer = new ResizeObserver(updateProgress);
    observer.observe(document.body);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
