import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav
      id="navbar"
      className="container mx-auto py-8 px-6
      md:px-24 md:py-16"
    >
      {/* Start Flex Container */}
      <div className="flex justify-between">
        {/* Brand */}
        <Link href="/">
          <div className="flex flex-col">
            <span className="text-2xl">Carl Caraan</span>
            <span className="text-grayLightest">Web Developer</span>
          </div>
        </Link>

        {/* Links Wrapper */}
        <div
          className="hidden space-x-6 items-center text-grayLight
        md:flex lg:space-x-12"
        >
          <Link
            className={pathname === "/about" ? "links-active" : "group"}
            href="/about"
          >
            About
            <span className="navlinks-hover"></span>
          </Link>
          <Link
            className={pathname === "/projects" ? "links-active" : "group"}
            href="/projects"
          >
            Projects
            <span className="navlinks-hover"></span>
          </Link>
          <Link
            className={pathname === "/experience" ? "links-active" : "group"}
            href="/experience"
          >
            Experience
            <span className="navlinks-hover"></span>
          </Link>
          <Link
            className={pathname === "/contact" ? "links-active" : "group"}
            href="/contact"
          >
            Contact
            <span className="navlinks-hover"></span>
          </Link>
          {/* Dark/Light Toggler */}
          <button id="theme-toggle" className="text-violet dark:text-panel">
            {/* Dark SVG Icon */}
            <svg
              id="theme-toggle-dark-icon"
              className="w-5 h-5 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            {/* Light SVG Icon  */}
            <svg
              id="theme-toggle-light-icon"
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* End Flex Container */}
    </nav>
  );
}

export default Navbar;
