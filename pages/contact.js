import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";

// Framer Motion
import { motion } from "framer-motion";
import slideInUp from "../components/animation/slideInUp";

function contact() {
  return (
    <Fragment>
      <title>Contact | Carl Caraan</title>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <motion.div
        variants={slideInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <main>
          {/* ========= Start Contact Section ========= */}
          <section className="mb-12 sm:mb-24 xl:mb-44" id="experience">
            <div className="section-container">
              {/* Start Heading */}
              <div className="mt-12 lg:mt-24">
                <h1 className="big-heading-text">Get in touch</h1>
                <h4
                  className="text-lg font-sansSB text-black sm:text-2xl mt-12
              dark:text-white"
                >
                  Ready to work together? Let&#39;s talk.
                </h4>
                <h5
                  className="mt-4 text-sm
                xl:w-3/5 xl:text-xl lg:text-lg sm:text-base
                dark:text-grayLightest"
                >
                  I&#39;m always open to discussing new opportunities and
                  collaborating with creative minds. Contact me to learn more
                  about my services and availability.
                </h5>
              </div>
              {/* End Heading */}

              {/* Start Contact Section */}
              <div className="mt-12 flex flex-col space-y-2">
                <span>www.github.com/CarlCaraan</span>
                <span>www.linkedin.com/in/caraancarlaaron</span>
                <span>caraancarlaaron@gmail.com</span>
              </div>
              {/* End Contact Section */}
            </div>
          </section>
          {/* ========= End Contact Section ========= */}

          {/* ========= Start Footer ========= */}
          <Footer />
          {/* ========= End Footer ========= */}
        </main>
      </motion.div>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Top Scroll ========= */}
      <TopScroll />
      {/* ========= End Top Scroll ========= */}
    </Fragment>
  );
}

export default contact;
