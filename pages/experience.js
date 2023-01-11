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
                <h1
                  className="text-xl font-serif text-black text-center 
                  sm:text-2xl lg:text-5xl"
                >
                  Education & Experience
                </h1>
                {/* Start Flex Container */}
                <div
                  className="flex flex-col mt-12 gap-4 space-y-12 md:space-y-0
                  md:flex-row"
                >
                  <div className="education-flex-item">
                    {/* Year Heading */}
                    <div className="text-base text-grayLightest">
                      2019 - Present
                    </div>

                    {/* Item */}
                    <div>
                      <h4 className="education-title">Web Developer</h4>
                      <p className="education-subtitle">Freelancer</p>
                    </div>

                    {/* Item */}
                    <div>
                      <h4 className="education-title">
                        BS in Information Technology
                      </h4>
                      <p className="education-subtitle">
                        Laguna State Polytechnic University
                      </p>
                    </div>

                    {/* Item */}
                    <div>
                      <h4 className="education-title">
                        Major in Web Development
                      </h4>
                      <p className="education-subtitle">
                        Laguna State Polytechnic University
                      </p>
                    </div>

                    {/* Item */}
                    <div>
                      <h4 className="education-title">
                        College Dean&#39;s Lister
                      </h4>
                      <p className="education-subtitle">
                        Laguna State Polytechnic University
                      </p>
                    </div>
                  </div>
                  <div className="education-flex-item">
                    {/* Year Heading */}
                    <div className="text-base text-grayLightest">
                      2017 - 2019
                    </div>

                    {/* Item */}
                    <div>
                      <h4 className="education-title">Senior Highschool</h4>
                      <p className="education-subtitle">Santa Maria Academy</p>
                    </div>

                    {/* Item */}
                    <div>
                      <h4 className="education-title">NCAE Topnotcher</h4>
                      <p className="education-subtitle">Santa Maria Academy</p>
                    </div>
                  </div>
                  <div className="education-flex-item">
                    {/* Year Heading */}
                    <div className="text-base text-grayLightest">
                      2013 - 2017
                    </div>

                    {/* Item */}
                    <div>
                      <h4 className="education-title">Junior Highschool</h4>
                      <p className="education-subtitle">Santa Maria Academy</p>
                    </div>
                  </div>
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
