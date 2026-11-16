import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// Components
import ThemeToggler from "./ThemeToggler";

// Hooks
import useScrollSpy from "../hooks/useScrollSpy";

// Images
import logoLight from "../public/logoLight.svg";
import logoDark from "../public/logoDark.svg";
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // UseTheme Function
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Fragment>
      <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
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
                {/* Start Dynamic Logo */}
                {theme === "light" ? (
                  <Image
                    className="w-[2.6rem] h-[2.6rem] mt-1 lg:w-12 lg:h-12"
                    src={logoLight}
                    alt="logo-light"
                    priority
                  />
                ) : (
                  <Image
                    className="w-[2.6rem] h-[2.6rem] mt-1 lg:w-12 lg:h-12"
                    src={logoDark}
                    alt="logo-dark"
                    priority
                  />
                )}
                {/* End Dynamic Logo */}

                <div className="flex flex-col select-none">
                  <div className="text-xl flex space-x-1 lg:text-2xl">
                    <span>Carl Caraan</span>
                    <Image
                      className="w-5 h-5 mt-1"
                      src={verifiedBadge}
                      alt="verified-icon"
                      priority
                    />
                  </div>
                  <span className="job-title">AI | .NET Developer</span>
                </div>
              </div>
            </a>

            {/* Links Wrapper */}
            <div
              className="hidden space-x-6 items-center text-grayLight md:flex lg:space-x-12 dark:text-white"
            >
              <a
                className={`group cursor-pointer font-linksR transition-colors duration-200 ${
                  activeSection === "about"
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
                className={`group cursor-pointer font-linksR transition-colors duration-200 ${
                  activeSection === "projects"
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
                className={`group cursor-pointer font-linksR transition-colors duration-200 ${
                  activeSection === "experience"
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
                className={`group cursor-pointer font-linksR transition-colors duration-200 ${
                  activeSection === "contact"
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
              <div className="w-5">
                <ThemeToggler />
              </div>
            </div>

            {/* Start Hamburger Button */}
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Toggle Navigation Menu"
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
        className={
          isMobileMenuOpen ? "md:hidden flex mobile-navigation" : "hidden"
        }
      >
        {/* Start Dynamic Logo */}
        <a
          className="mb-12 cursor-pointer"
          href="#"
          onClick={handleMobileBrandClick}
        >
          <div className="flex flex-row space-x-2">
            {theme === "light" ? (
              <Image
                className="w-[2.6rem] h-[2.6rem] mt-1 lg:w-12 lg:h-12"
                src={logoLight}
                alt="logo-light"
                priority
              />
            ) : (
              <Image
                className="w-[2.6rem] h-[2.6rem] mt-1 lg:w-12 lg:h-12"
                src={logoDark}
                alt="logo-dark"
                priority
              />
            )}
          </div>
        </a>
        {/* End Dynamic Logo */}

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
        <div className="pt-12 w-5">
          <ThemeToggler />
        </div>
      </div>
      {/* ========= End Mobile Navigation ========= */}
    </Fragment>
  );
}

export default Navbar;
