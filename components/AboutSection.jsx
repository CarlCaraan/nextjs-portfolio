import React from "react";
import ProfileSection from "./about/ProfileSection";
import SkillsSection from "./about/SkillsSection";

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 pt-12 lg:pt-20">
      {/* Start About Intro Header */}
      <div className="section-container-fluid mb-12 lg:mb-20">
        <div className="flex flex-col md:flex-row">
          <div className="basis-2/5 pt-4">
            <div className="text-[6.6vw] leading-none lg:select-none">
              <span className="hidden md:block uppercase">About</span>
              <h2 className="big-heading-text block md:hidden">About Me</h2>
            </div>
            <div className="uppercase text-[6.6vw] leading-none ml-[16.7vw] hidden md:block lg:select-none">
              Me
            </div>
          </div>
          <div className="basis-3/5 py-6 md:py-[4vw]">
            <h3 className="text-base leading-tight text-justify sm:text-[3.6vw] lg:select-none">
              A developer who solves real-world problems
            </h3>
            <p className="text-sm text-grayLighter mt-5 text-justify md:text-[1.6vw] md:leading-tight md:text-grayLight dark:text-grayLightest">
              I am seeking a role where I can apply my technical skills to solve
              meaningful problems and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
      {/* End About Intro Header */}

      {/* Start Profile Section */}
      <ProfileSection props={{ text: "Profile" }} />
      {/* End Profile Section */}

      {/* Start Skills Section */}
      <SkillsSection props={{ text: "Skills" }} />
      {/* End Skills Section */}
    </section>
  );
}

export default AboutSection;
