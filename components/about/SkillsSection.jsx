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

          {/* Start Skills Heading */}
          <div
            className="col-start-1 col-span-9 justify-self-stretch py-4
                md:col-start-2 md:py-12"
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
          {/* End Skills Heading */}
        </div>
        {/* End Grid Container */}
      </div>

      {/* Start Skills Content */}
      <div className="bg-panel py-16">
        <div className="section-container-fluid">
          {/* Start Grid Container */}
          <div className="grid">
            <div
              className="col-start-1 col-span-1 w-60 hidden 
              md:block"
            ></div>
            <div
              className="col-start-1 col-span-10 
              md:col-start-2"
            >
              {/* Start Inner Grid Container */}
              <div className="grid grid-cols-7 grid-rows-3 gap-6">
                <div
                  className="custom-border-dashed col-span-7 
                  md:col-span-2"
                >
                  <h4 className="skills-heading">UX/UI</h4>
                </div>
                <div
                  className="custom-border-dashed col-span-7 
                  md:row-span-2 md:col-span-3"
                >
                  <h4 className="skills-heading">Web</h4>
                </div>
                <div
                  className="custom-border-dashed col-span-7 
                  md:col-span-2"
                >
                  <h4 className="skills-heading">CSS Frameworks</h4>
                </div>
                <div
                  className="custom-border-dashed col-span-7 
                  md:row-span-2 md:row-start-2 md:col-span-2"
                >
                  <h4 className="skills-heading">Technology Stacks</h4>
                </div>
                <div
                  className="custom-border-dashed col-span-7 
                  md:row-start-3 md:col-span-3"
                >
                  <h4 className="skills-heading">Database</h4>
                </div>
                <div
                  className="custom-border-dashed col-span-7 
                  md:row-span-1 md:col-span-2"
                >
                  <h4 className="skills-heading">Tools</h4>
                </div>
              </div>
              {/* End Inner Grid Container */}
            </div>
          </div>
          {/* End Grid Container */}
        </div>
      </div>
      {/* End Skills Content */}
    </section>
  );
}

export default SkillsSection;
