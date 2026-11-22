import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";

// Components
import ThemeToggler from "./ThemeToggler";

// Hooks
import useScrollSpy from "../hooks/useScrollSpy";

// Images
import monogram from "../public/navbar-monogram.svg";
import wordmark from "../public/navbar-wordmark.svg";
import verifiedBadge from "../public/Twitter_Verified_Badge.svg";

function Navbar() {
  const { activeSection, scrollToSection, scrollToTop } = useScrollSpy(
    ["about", "projects", "experience", "contact"],
    120
  );

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileNavClick = (e, sectionId) => {
    setIsMobileMenuOpen(false);
    scrollToSection(e, sectionId);
  };

  const handleMobileBrandClick = (e) => {
    setIsMobileMenuOpen(false);
    scrollToTop(e);
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const syncScroll = () => setIsScrolled(window.scrollY > 0);

    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => window.removeEventListener("scroll", syncScroll);
  }, []);

  return (
    <Fragment>
      <header
        className="portfolio-navbar sticky top-0 z-40 w-full"
        data-scrolled={isScrolled}
      >
        <nav
          id="navbar"
          className="container mx-auto py-4 px-6 md:px-24 md:py-6"
        >
          {/* Start Flex Container */}
          <div className="flex justify-between items-center">
            {/* Brand */}
            <a
              href="#"
              onClick={scrollToTop}
              className="cursor-pointer"
            >
              <div className="flex flex-row space-x-2">
                <Image
                  className="w-[2.6rem] h-[2.6rem] mt-1 lg:w-12 lg:h-12"
                  src={monogram}
                  alt=""
                  priority
                />

                <div className="flex flex-col select-none">
                  <div className="flex h-7 items-center space-x-1 lg:h-8">
                    <Image
                      className="h-auto w-[7.5rem] lg:w-36 dark:brightness-0 dark:invert"
                      src={wordmark}
                      alt="Carl Caraan"
                      priority
                    />
                    <Image
                      className="w-5 h-5"
                      src={verifiedBadge}
                      alt="verified-icon"
                      priority
                    />
                  </div>
                  <span className="job-title">AI | Full-Stack Developer</span>
                </div>
              </div>
            </a>

            {/* Links Wrapper */}
            <div
              className="hidden space-x-6 items-center text-grayLight md:flex lg:space-x-12 dark:text-white"
            >
              <a
                className={`group cursor-pointer font-linksR transition-colors duration-200 ${activeSection === "about"
                  ? "text-black dark:text-white font-medium"
                  : "text-grayLight hover:text-black dark:text-grayLightest dark:hover:text-white"
                  }`}
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
                <span
                  className={
                    activeSection === "about"
                      ? "navlinks-active"
                      : "navlinks-hover"
                  }
                ></span>
              </a>
              <a
                className={`group cursor-pointer font-linksR transition-colors duration-200 ${activeSection === "projects"
                  ? "text-black dark:text-white font-medium"
                  : "text-grayLight hover:text-black dark:text-grayLightest dark:hover:text-white"
                  }`}
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
              >
                Projects
                <span
                  className={
                    activeSection === "projects"
                      ? "navlinks-active"
                      : "navlinks-hover"
                  }
                ></span>
              </a>
              <a
                className={`group cursor-pointer font-linksR transition-colors duration-200 ${activeSection === "experience"
                  ? "text-black dark:text-white font-medium"
                  : "text-grayLight hover:text-black dark:text-grayLightest dark:hover:text-white"
                  }`}
                href="#experience"
                onClick={(e) => scrollToSection(e, "experience")}
              >
                Experience
                <span
                  className={
                    activeSection === "experience"
                      ? "navlinks-active"
                      : "navlinks-hover"
                  }
                ></span>
              </a>
              <a
                className={`group cursor-pointer font-linksR transition-colors duration-200 ${activeSection === "contact"
                  ? "text-black dark:text-white font-medium"
                  : "text-grayLight hover:text-black dark:text-grayLightest dark:hover:text-white"
                  }`}
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contact
                <span
                  className={
                    activeSection === "contact"
                      ? "navlinks-active"
                      : "navlinks-hover"
                  }
                ></span>
              </a>

              {/* Dark Mode Button */}
              <ThemeToggler />
            </div>

            {/* Start Hamburger Button */}
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Toggle Navigation Menu"
                aria-controls="mobile-navigation"
                aria-expanded={isMobileMenuOpen}
                className={
                  isMobileMenuOpen
                    ? "open hamburger z-50 block md:hidden focus:outline-none"
                    : "hamburger-default z-50 block md:hidden focus:outline-none"
                }
                onClick={toggleMobileMenu}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
            {/* End Hamburger Button */}
          </div>
          {/* End Flex Container */}
        </nav>
      </header>

      {/* ========= Start Mobile Navigation ========= */}
      <div
        id="mobile-navigation"
        className={
          isMobileMenuOpen ? "md:hidden flex mobile-navigation" : "hidden"
        }
      >
        <button
          type="button"
          className="absolute right-6 top-8 !mt-0 flex h-11 w-11 items-center justify-center"
          aria-label="Close navigation menu"
          onClick={toggleMobileMenu}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        <a
          className="mb-12 cursor-pointer"
          href="#"
          onClick={handleMobileBrandClick}
        >
          <Image
            className="w-[2.6rem] h-[2.6rem] mt-1"
            src={monogram}
            alt="Carl Caraan"
          />
        </a>

        <div>
          <a
            className={
              activeSection === "about"
                ? "text-violet font-semibold"
                : "hover:text-violet duration-200"
            }
            href="#about"
            onClick={(e) => handleMobileNavClick(e, "about")}
          >
            ABOUT
          </a>
        </div>
        <div>
          <a
            className={
              activeSection === "projects"
                ? "text-violet font-semibold"
                : "hover:text-violet duration-200"
            }
            href="#projects"
            onClick={(e) => handleMobileNavClick(e, "projects")}
          >
            PROJECTS
          </a>
        </div>
        <div>
          <a
            className={
              activeSection === "experience"
                ? "text-violet font-semibold"
                : "hover:text-violet duration-200"
            }
            href="#experience"
            onClick={(e) => handleMobileNavClick(e, "experience")}
          >
            EXPERIENCE
          </a>
        </div>
        <div>
          <a
            className={
              activeSection === "contact"
                ? "text-violet font-semibold"
                : "hover:text-violet duration-200"
            }
            href="#contact"
            onClick={(e) => handleMobileNavClick(e, "contact")}
          >
            CONTACT
          </a>
        </div>

        {/* Dark Mode Button */}
        <div className="pt-12">
          <ThemeToggler />
        </div>
      </div>
      {/* ========= End Mobile Navigation ========= */}
    </Fragment>
  );
}

export default Navbar;
