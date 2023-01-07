import React from "react";
import AboutHeading from "./AboutHeading";

function SkillsSection({ props }) {
  return (
    <section
      className="mt-12 
          lg:mt-0"
      id="Skills"
    >
      <div className="section-container-fluid">
        {/* Start Grid Container */}
        <div className="grid place-items-center">
          {/* Start About Heading */}
          <AboutHeading props={props.text} />
          {/* End About Heading */}

          {/* Start Skills Content */}
          <div
            className="col-start-1 col-span-9 justify-self-stretch py-4
                md:col-start-2 md:py-24"
          >
            {/* Start Heading Text */}
            <div
              className="text-base text-black indent-7 auto-hyphen 
             xl:off-hyphen sm:text-xl lg:text-2xl"
            >
              I am highly skilled in programming, with expertise in languages
              such as Javascript and Php, as well as experience with databases
              and software development frameworks. I have used these skills to
              design and implement software solutions for various projects, and
              have a track record of delivering high-quality, efficient code.
            </div>
            {/* End Heading Text */}
          </div>
          {/* End Skills Content */}
        </div>
        {/* End Grid Container */}
      </div>
    </section>
  );
}

export default SkillsSection;
