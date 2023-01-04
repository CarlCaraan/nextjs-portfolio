import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <footer className="mt-8 pb-28" id="footer">
      {/* Start Container */}
      <div className="section-container">
        {/* Horizontal Line */}
        <div className="border-t-4 border-t-grayLighter w-full"></div>

        {/* Start Flex Container */}
        <div
          className="flex flex-col mt-20 
            lg:flex-row"
        >
          {/* Start Left Section */}
          <div className="basis-1/2">
            <div className="uppercase font-linksL text-lg text-grayLight text-center lg:text-left">
              Follow Me
            </div>
            {/* Icon Wrapper Flex */}
            <div className="flex mt-4 space-x-4">
              <div className="rounded-full border border-grayLight p-6 hover:border-violet duration-300"></div>
              <div className="rounded-full border border-grayLight p-6 hover:border-violet duration-300"></div>
              <div className="rounded-full border border-grayLight p-6 hover:border-violet duration-300"></div>
            </div>
          </div>
          {/* End Left Section */}

          {/* Start Right Section */}
          <div className="basis-1/2">
            {/* Start Footer Flex Links */}
            <div
              className="flex flex-col space-x-0 mt-[3.5rem] text-center space-y-12
                xl:space-x-16 lg:space-x-8 lg:flex-row lg:space-y-0 lg:text-left lg:float-right"
            >
              <Link
                className={
                  pathname === "/about"
                    ? "footer-links underline"
                    : "footer-links group"
                }
                href="/about"
              >
                about
                <span className="lg:footerlinks-hover"></span>
              </Link>
              <Link
                className={
                  pathname === "/experience"
                    ? "footer-links underline"
                    : "footer-links group"
                }
                href="/experience"
              >
                experience
                <span className="lg:footerlinks-hover"></span>
              </Link>
              <Link
                className={
                  pathname === "/contact"
                    ? "footer-links underline"
                    : "footer-links group"
                }
                href="/contact"
              >
                contact
                <span className="lg:footerlinks-hover"></span>
              </Link>
              <Link
                className={
                  pathname === "/projects"
                    ? "footer-links underline"
                    : "footer-links group"
                }
                href="/projects"
              >
                projects<strong className="ml-2">&#8599;</strong>
                <span className="lg:footerlinks-hover"></span>
              </Link>
            </div>
            {/* End Footer Flex Links */}
          </div>
          {/* End Right Section */}
        </div>
        {/* End Flex Container */}

        <div
          className="text-grayLight text-[22px] mt-12 text-center
          lg:text-right"
        >
          &copy; C.Caraan 2022
        </div>
      </div>
      {/* End Container */}
    </footer>
  );
}

export default Footer;
