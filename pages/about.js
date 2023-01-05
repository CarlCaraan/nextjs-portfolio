import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";
import Link from "next/link";

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
                <div className="uppercase text-[6.6vw] leading-none">
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
                  md:block"
                >
                  Me
                </div>
              </div>
              <div className="basis-3/5 py-[12vw]">
                <h1 className="text-[3.6vw] leading-tight">
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
        <section
          className="mt-12 
          lg:mt-0"
          id="profile"
        >
          <div className="section-container-fluid">Profile</div>
        </section>
        {/* ========= End Profile Section ========= */}

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
