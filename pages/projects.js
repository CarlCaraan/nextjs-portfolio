import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";

function projects() {
  return (
    <Fragment>
      <title>Projects | Carl Caraan</title>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Project Section ========= */}
        <section id="project">
          <div className="section-container">
            {/* Start Heading */}
            <div className="mt-24">
              <h1
                className="text-2xl leading-loose font-sansSB text-black select-none 
                lg:leading-tight sm:text-[6.6vw]"
              >
                Latest Projects
              </h1>
              <p
                className="text-base leading-tight text-grayLight 
                xl:w-1/2 lg:text-[1.25vw] lg:px-2 md:px-1 sm:text-lg"
              >
                Ever since <u>I challenge myself</u> to create a different
                project, I always enjoyed web development. Here are some of the
                projects I worked on both <u>in</u> and{" "}
                <u>outside of my studies</u>.
              </p>
            </div>
            {/* End Heading */}

            {/* Start Project Flex Container */}

            {/* End Project Flex Container */}
          </div>
        </section>
        {/* ========= End Project Section ========= */}

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

export default projects;
