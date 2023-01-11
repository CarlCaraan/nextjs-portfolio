import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";

function experience() {
  return (
    <Fragment>
      <title>Experience | Carl Caraan</title>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Experience Section ========= */}
        <section className="sm:mb-28" id="experience">
          <div className="section-container">
            {/* Start Heading */}
            <div className="mt-12 lg:mt-24">
              <h1 className="big-heading-text">Experience</h1>
            </div>
            {/* End Heading */}

            {/* Start Education Container */}
            <div className="mt-44">
              <div className="socket"></div>
              <div className="mt-24">
                <h1 className="text-5xl font-serif text-black text-center">
                  Education & Experience
                </h1>
                {/* Start Flex Container */}
                <div
                  className="flex flex-col mt-12
                  md:flex-row"
                >
                  <div className="basis-1/3">1</div>
                  <div className="basis-1/3">2</div>
                  <div className="basis-1/3">3</div>
                </div>
                {/* End Flex Container */}
              </div>
            </div>

            {/* End Education Container */}
          </div>
        </section>
        {/* ========= End Experience Section ========= */}

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

export default experience;
