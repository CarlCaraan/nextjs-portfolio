import React from "react";
import Image from "next/image";

// Images
import ProjectImage1 from "../public/images/landing_page/Project 1.png";
import ProjectImage2 from "../public/images/landing_page/Project 2.png";
import ProjectImage3 from "../public/images/landing_page/Project 3.png";

function RecentProjectsSection() {
  const handleViewAllClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#projects");
    }
  };

  return (
    <section
      className="mt-12 bg-panel xl:-mt-14 dark:bg-grayLight"
      id="content"
    >
      {/* Start Content Heading */}
      <div
        className="relative text-[6.7vw] font-linksB text-center pt-12 lg:pt-[4.3vw] text-white select-none dark:text-grayLightest"
      >
        Full Stack Developer
        <span
          className="hidden absolute big-title font-linksSB text-black text-[2.5vw] left-[25vw] top-[10.2vw] lg:block dark:text-white"
        >
          Recent Projects
        </span>
      </div>

      {/* Hidden for mobile */}
      <div
        className="font-linksSB text-black text-[5vw] text-center lg:hidden dark:text-white"
      >
        Recent Projects
      </div>
      {/* End Content Heading */}

      {/* Start Container */}
      <div className="section-container relative">
        {/* Start Button */}
        <a
          href="#projects"
          onClick={handleViewAllClick}
          className="custom-btn group text-lg text-center block w-full mt-12 sm:text-xl lg:mt-8 lg:text-start lg:absolute lg:top-0 lg:right-[6rem] lg:w-32 lg:text-base dark:shadow-none cursor-pointer"
        >
          View all{" "}
          <span
            className="font-bold group-hover:ml-1 transition-all ease-in hidden lg:inline-block"
          >
            &rarr;
          </span>
        </a>
        {/* End Button */}

        {/* Start Project Grid Container */}
        <div className="grid grid-cols-8 gap-6 pt-6 lg:pt-24 pb-20">
          {/* Item 1 */}
          <div
            className="col-span-full group relative overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              className="border border-white rounded-sm w-full"
              src={ProjectImage1}
              alt="project 1"
              priority
            />
            <div className="overlap-title">sdo-laguna.com</div>
          </div>

          {/* Item 2 */}
          <div
            className="col-span-full group relative overflow-hidden shadow-lg row-span-2 md:col-span-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              className="border border-white rounded-sm w-full"
              src={ProjectImage2}
              alt="project 2"
              priority
            />
            <div className="overlap-title">
              lazada clone (reactjs + laravel)
            </div>
          </div>

          {/* Item 3 */}
          <div
            className="col-span-full group relative overflow-hidden shadow-lg row-span-1 md:col-span-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="border border-white rounded-sm w-full"
              src={ProjectImage3}
              alt="project 3"
              priority
            />
            <div className="overlap-title">venture (flask)</div>
          </div>
        </div>
        {/* End Project Grid Container */}
      </div>
      {/* End Container */}
    </section>
  );
}

export default RecentProjectsSection;
