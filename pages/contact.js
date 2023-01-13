import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";

function contact() {
  return (
    <Fragment>
      <title>Contact | Carl Caraan</title>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Contact Section ========= */}
        <section className="mb-12 sm:mb-24 xl:mb-44" id="experience">
          <div className="section-container">
            {/* Start Heading */}
            <div className="mt-12 lg:mt-24">
              <h1 className="big-heading-text">Get in touch</h1>
              <h4 className="font-sansSB text-black text-2xl mt-12">
                Ready to work together? Let&#39;s talk.
              </h4>
              <h5 className="text-xl w-3/5 mt-4">
                I&#39;m always open to discussing new opportunities and
                collaborating with creative minds. Contact me to learn more
                about my services and availability.
              </h5>
            </div>
            {/* End Heading */}

            {/* Start Contact Section */}

            {/* End Contact Section */}
          </div>
        </section>
        {/* ========= End Contact Section ========= */}

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

export default contact;
