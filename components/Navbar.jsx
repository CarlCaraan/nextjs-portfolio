import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// Components
import ThemeToggler from "./ThemeToggler";

function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  // Hamburger Function
  const [isActive, setActive] = useState("false");
  const hamburgerClickHandler = () => {
    setActive(!isActive);
  };
  const navClickHandler = () => {
    setActive(!isActive);
  };

  return (
    <Fragment>
      <nav
        id="navbar"
        className="container mx-auto py-8 px-6
        md:px-24 md:py-16"
      >
        {/* Start Flex Container */}
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link href="/">
            <div className="flex flex-col select-none">
              <div className="text-2xl flex space-x-1">
                <span>Carl Caraan</span>
                <Image
                  className="w-5"
                  width="0"
                  height="0"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
                  alt="verified-icon"
                />
              </div>
              <span className="text-grayLightest">Web Developer</span>
            </div>
          </Link>

          {/* Links Wrapper */}
          <div
            className="hidden space-x-6 items-center text-grayLight
            md:flex lg:space-x-12
            dark:text-white"
          >
            <Link className="group" href="/about">
              About
              <span
                className={
                  pathname === "/about" ? "navlinks-active" : "navlinks-hover"
                }
              ></span>
            </Link>
            <Link className="group" href="/projects">
              Projects
              <span
                className={
                  pathname === "/projects"
                    ? "navlinks-active"
                    : "navlinks-hover"
                }
              ></span>
            </Link>
            <Link className="group" href="/experience">
              Experience
              <span
                className={
                  pathname === "/experience"
                    ? "navlinks-active"
                    : "navlinks-hover"
                }
              ></span>
            </Link>
            <Link className="group" href="/contact">
              Contact
              <span
                className={
                  pathname === "/contact" ? "navlinks-active" : "navlinks-hover"
                }
              ></span>
            </Link>

            {/* Dark Mode Button */}
            <div className="w-5">
              <ThemeToggler />
            </div>
          </div>

          {/* Start Hamburger Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={
                isActive
                  ? "hamburger z-40 block md:hidden focus:outline-none"
                  : "open hamburger z-40 block md:hidden focus:outline-none"
              }
              onClick={hamburgerClickHandler}
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

      {/* ========= Start Mobile Navigation ========= */}
      <div
        className={
          isActive
            ? "hidden mobile-navigation"
            : "md:hidden flex mobile-navigation"
        }
      >
        <Link className="mb-12" href="/" onClick={navClickHandler}>
          <div className="flex flex-col select-none">
            <div className="flex space-x-1">
              <span className="text-xl">Carl Caraan</span>
              <Image
                className="w-5"
                width="0"
                height="0"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
                alt="verified-icon"
              />
            </div>
            <span className="text-grayLightest text-base">Web Developer</span>
          </div>
        </Link>
        <div>
          <Link
            className={
              pathname === "/about"
                ? "text-violet"
                : "hover:text-violet duration-200"
            }
            href="/about"
            onClick={navClickHandler}
          >
            ABOUT
          </Link>
        </div>
        <div>
          <Link
            className={
              pathname === "/projects"
                ? "text-violet"
                : "hover:text-violet duration-200"
            }
            href="/projects"
            onClick={navClickHandler}
          >
            PROJECTS
          </Link>
        </div>
        <div>
          <Link
            className={
              pathname === "/experience"
                ? "text-violet"
                : "hover:text-violet duration-200"
            }
            href="/experience"
            onClick={navClickHandler}
          >
            EXPERIENCE
          </Link>
        </div>
        <div>
          <Link
            className={
              pathname === "/contact"
                ? "text-violet"
                : "hover:text-violet duration-200"
            }
            href="/contact"
            onClick={navClickHandler}
          >
            CONTACT
          </Link>
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
