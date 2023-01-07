import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";
import ProfileSection from "../components/about/ProfileSection";
import SkillsSection from "../components/about/SkillsSection";

function about() {
  return (
    <Fragment>
      <title>About | Carl Caraan</title>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Herosection ========= */}
        <section className="lg:h-screen" id="hero">
          {/* Start Section Container */}
          <div className="section-container-fluid">
            {/* Start Flex Container */}
            <div
              className="flex flex-col 
              md:flex-row"
            >
              <div className="basis-2/5 pt-16">
                <div
                  className="uppercase text-[6.6vw] leading-none 
                  lg:select-none"
                >
                  About{" "}
                  <span
                    className="block 
                    md:hidden"
                  >
                    Me
                  </span>
                </div>
                <div
                  className="uppercase text-[6.6vw] leading-none ml-[16.7vw] hidden 
                  md:block lg:select-none"
                >
                  Me
                </div>
              </div>
              <div className="basis-3/5 py-[12vw]">
                <h1
                  className="text-[3.6vw] leading-tight 
                  lg:select-none"
                >
                  To be a developer who solves real world problem
                </h1>
                <p
                  className="text-xl text-grayLighter mt-5
                  md:text-[1.6vw] md:leading-tight md:text-grayLight"
                >
                  I am looking for a challenging opportunity that will enable me
                  to use my skills and abilities to achieve a challenging goal.
                </p>
              </div>
            </div>
            {/* End Flex Container */}
          </div>
          {/* End Section Container */}
        </section>
        {/* ========= End Herosection ========= */}

        {/* ========= Start Profile Section ========= */}
        <ProfileSection props={{ text: "Profile" }} />
        {/* ========= End Profile Section ========= */}

        {/* ========= Start Skills Section ========= */}
        <SkillsSection props={{ text: "Skills" }} />
        {/* ========= End Skills Section ========= */}

        {/* ========= Start Footer ========= */}
        <Footer />
        {/* ========= End Footer ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Top Scroll ========= */}
      <TopScroll />
      {/* ========= End Top Scroll ========= */}
    </Fragment>
  );
}

export default about;
