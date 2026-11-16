import React from "react";
import Image from "next/image";
import Link from "next/link";
import CarlPNG from "../public/images/carl_png.png";

function ContactSection() {
  return (
    <section
      className="scroll-mt-24 mb-12 sm:mb-24 xl:mb-32 pt-12 lg:pt-20"
      id="contact"
    >
      <div className="section-container">
        {/* Start Heading */}
        <div className="text-center mt-12 lg:mt-24">
          <h2 className="big-heading-text text-center sm:ml-0 lg:ml-0">
            Get in touch
          </h2>
          <h3
            className="text-lg font-sansSB text-black sm:text-2xl mt-8 lg:mt-10 dark:text-white text-center"
          >
            Ready to work together? Let&#39;s talk.
          </h3>
          <h4
            className="mt-4 text-sm sm:text-base lg:text-lg xl:text-xl text-grayLight dark:text-grayLightest text-center mx-auto max-w-2xl leading-relaxed"
          >
            I&#39;m always open to discussing new opportunities and
            collaborating with creative minds. Contact me to learn more about my
            services and availability.
          </h4>
        </div>
        {/* End Heading */}

        {/* Start Contact Links */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-4 text-base sm:text-xl text-center">
          <Link
            href="https://github.com/CarlCaraan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grayLight hover:text-violet duration-200 dark:text-grayLightest dark:hover:text-violet"
          >
            <span>github.com/CarlCaraan</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/caraancarlaaron"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grayLight hover:text-violet duration-200 dark:text-grayLightest dark:hover:text-violet"
          >
            <span>linkedin.com/in/caraancarlaaron</span>
          </Link>
          <a
            href="mailto:caraancarlaaron@gmail.com"
            className="text-grayLight hover:text-violet duration-200 dark:text-grayLightest dark:hover:text-violet"
          >
            <span>caraancarlaaron@gmail.com</span>
          </a>
        </div>
        {/* End Contact Links */}

        {/* Start Pre-Footer Heading */}
        <div className="mt-20 md:mt-32 lg:mt-40 flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center space-x-3 sm:space-x-5 lg:space-x-8">
            <Image
              className="w-[3.5rem] sm:w-[4.5rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] bg-slate-100 rounded-full"
              src={CarlPNG}
              alt="Carl Caraan"
              priority
            />
            <Link
              href="https://github.com/CarlCaraan"
              target="_blank"
              rel="noopener noreferrer"
              className="big-title text-grayLight text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl dark:text-white hover:text-black dark:hover:text-grayLighter transition-colors"
            >
              Show the
            </Link>
          </div>
          <Link
            href="https://github.com/CarlCaraan"
            target="_blank"
            rel="noopener noreferrer"
            className="big-title text-grayLight text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl dark:text-white hover:text-black dark:hover:text-grayLighter transition-colors mt-1 sm:mt-2 md:mt-4"
          >
            code
          </Link>
        </div>
        {/* End Pre-Footer Heading */}
      </div>
    </section>
  );
}

export default ContactSection;
