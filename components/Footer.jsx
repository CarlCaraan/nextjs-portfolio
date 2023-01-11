import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const { pathname } = router;

  const FacebookIcon = (props) => (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z" />
    </svg>
  );
  const GithubIcon = (props) => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z" />
    </svg>
  );
  const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
      />
    </svg>
  );

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
            <div
              className="flex mt-4 space-x-4 justify-center pb-8 
              lg:justify-start lg:pb-0"
            >
              <Link href="https://www.facebook.com/caraancarl/" target="_blank">
                <div className="group rounded-full border border-grayLighter p-2 hover:border-violet duration-300">
                  <FacebookIcon className="w-8 fill-grayLighter group-hover:fill-violet duration-300" />
                </div>
              </Link>
              <Link href="https://github.com/CarlCaraan" target="_blank">
                <div className="group rounded-full border border-grayLight p-3 hover:border-violet duration-300">
                  <GithubIcon className="w-6 fill-grayLighter group-hover:fill-violet duration-300" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/caraancarlaaron/"
                target="_blank"
              >
                <div className="group rounded-full border border-grayLight p-3 hover:border-violet duration-300">
                  <LinkedinIcon className="w-6 fill-grayLighter group-hover:fill-violet duration-300" />
                </div>
              </Link>
            </div>
          </div>
          {/* End Left Section */}

          {/* Start Right Section */}
          <div className="basis-1/2">
            {/* Start Footer Flex Links */}
            <div
              className="flex flex-col space-x-0 mt-[3.5rem] text-center space-y-4 text-base
                xl:space-x-16 lg:space-x-8 lg:flex-row lg:space-y-0 lg:text-left lg:float-right sm:space-y-6"
            >
              <Link
                className={
                  pathname === "/about"
                    ? "footer-links group underline lg:no-underline"
                    : "footer-links group"
                }
                href="/about"
              >
                about
                <span
                  className={
                    pathname === "/about"
                      ? "lg:footerlinks-active"
                      : "lg:footerlinks-hover"
                  }
                ></span>
              </Link>
              <Link
                className={
                  pathname === "/experience"
                    ? "footer-links group underline lg:no-underline"
                    : "footer-links group"
                }
                href="/experience"
              >
                experience
                <span
                  className={
                    pathname === "/experience"
                      ? "lg:footerlinks-active"
                      : "lg:footerlinks-hover"
                  }
                ></span>
              </Link>
              <Link
                className={
                  pathname === "/contact"
                    ? "footer-links group underline lg:no-underline"
                    : "footer-links group"
                }
                href="/contact"
              >
                contact
                <span
                  className={
                    pathname === "/contact"
                      ? "lg:footerlinks-active"
                      : "lg:footerlinks-hover"
                  }
                ></span>
              </Link>
              <Link
                className={
                  pathname === "/projects"
                    ? "footer-links group underline lg:no-underline"
                    : "footer-links group"
                }
                href="/projects"
              >
                projects<strong className="lg:ml-2">&#8599;</strong>
                <span
                  className={
                    pathname === "/projects"
                      ? "lg:footerlinks-active"
                      : "lg:footerlinks-hover"
                  }
                ></span>
              </Link>
            </div>
            {/* End Footer Flex Links */}
          </div>
          {/* End Right Section */}
        </div>
        {/* End Flex Container */}

        <div
          className="text-grayLight mt-12 text-center text-base
          lg:text-right lg:text-[22px]"
        >
          &copy; C.Caraan 2022
        </div>
      </div>
      {/* End Container */}
    </footer>
  );
}

export default Footer;
