import { useState, useEffect, useCallback } from "react";

export function useScrollSpy(
  sectionIds = ["about", "projects", "experience", "contact"],
  offset = 120
) {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 1. If reached or near the bottom of the page, activate the last section
    if (windowHeight + scrollPosition >= documentHeight - 80) {
      setActiveSection(sectionIds[sectionIds.length - 1]);
      return;
    }

    // 2. If above the first section (e.g., in Hero), no nav link is active
    const firstSection = document.getElementById(sectionIds[0]);
    if (firstSection) {
      const firstTop = firstSection.offsetTop - offset;
      if (scrollPosition < firstTop) {
        setActiveSection("");
        return;
      }
    }

    // 3. Check which section is currently in view
    let currentSection = "";
    for (let i = 0; i < sectionIds.length; i++) {
      const sectionId = sectionIds[i];
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop - offset;
        if (scrollPosition >= top) {
          currentSection = sectionId;
        }
      }
    }

    setActiveSection(currentSection);
  }, [sectionIds, offset]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [handleScroll]);

  const scrollToSection = (e, sectionId) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
    setActiveSection("");
  };

  return { activeSection, setActiveSection, scrollToSection, scrollToTop };
}

export default useScrollSpy;
