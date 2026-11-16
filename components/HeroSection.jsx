import React from "react";
import Image from "next/image";
import CarlPNG from "../public/images/carl_png.png";

function HeroSection() {
  const handleDiscoverClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("about");
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#about");
    }
  };

  return (
    <section id="hero" className="section-container pt-8 md:pt-16 pb-12">
      {/* Start Flex Container */}
      <div className="flex flex-col-reverse items-center lg:flex-row">
        {/* Left Section */}
        <div className="lg:basis-1/2">
          <h1
            className="text-3xl font-sansB text-center mt-12 lg:text-start sm:text-5xl lg:mt-12 xl:mt-0"
          >
            Let&#39;s Build <br /> Something Epic
          </h1>
          <div
            className="mt-6 text-grayLight text-center lg:text-start dark:text-grayLightest"
          >
            <span className="sm:text-2xl font-sansSB">Software Engineer</span>{" "}
            <span className="sm:text-2xl">based in Laguna, Philippines</span>
          </div>

          <div className="mt-6 sm:mt-12 xl:mt-16 2xl:mt-40">
            <div className="text-center lg:text-start">
              <a
                href="#about"
                onClick={handleDiscoverClick}
                className="text-black font-sansSB underline hover:no-underline inline-block cursor-pointer dark:text-white"
              >
                <div>Discover more about me</div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:basis-1/2">
          <Image
            className="w-3/4 mx-auto md:w-5/6 lg:mr-0"
            src={CarlPNG}
            alt="Carl Caraan"
            priority
          />
        </div>
      </div>
      {/* End Flex Container */}
    </section>
  );
}

export default HeroSection;
