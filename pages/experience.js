import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";
import Image from "next/image";
import cert1 from "../public/images/experience/cert1.jpg";
import cert2 from "../public/images/experience/cert2.jpg";
import cert3 from "../public/images/experience/cert3.jpg";
import cert4 from "../public/images/experience/cert4.jpg";
import cert5 from "../public/images/experience/cert5.jpg";
import cert6 from "../public/images/experience/cert6.png";
import cert7 from "../public/images/experience/cert7.jpg";
import cert8 from "../public/images/experience/cert8.png";
import cert9 from "../public/images/experience/cert9.jpg";

// Framer Motion
import { motion } from "framer-motion";
import slideInUp from "../components/animation/slideInUp";

function experience() {
  return (
    <Fragment>
      <title>Experience | Carl Caraan</title>
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
          {/* ========= Start Experience Section ========= */}
          <section className="mb-12 sm:mb-24 xl:mb-44" id="experience">
            <div className="section-container">
              {/* Start Heading */}
              <div className="mt-12 lg:mt-24">
                <h1 className="big-heading-text">Experience</h1>
              </div>
              {/* End Heading */}
              {/* Start Education Section */}
              <div className="mt-24 md:mt-44">
                <div className="socket"></div>
                <div className="mt-12 md:mt-16 lg:mt-28">
                  <h1 className="experience-heading">Education & Experience</h1>
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
                        <p className="education-subtitle">
                          Santa Maria Academy
                        </p>
                      </div>

                      {/* Item */}
                      <div>
                        <h4 className="education-title">NCAE Topnotcher</h4>
                        <p className="education-subtitle">
                          Santa Maria Academy
                        </p>
                      </div>

                      {/* Item */}
                      <div>
                        <h4 className="education-title">
                          Biometrics Arduino <small>(Thesis)</small>
                        </h4>
                        <p className="education-subtitle">
                          Santa Maria Academy
                        </p>
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
                        <p className="education-subtitle">
                          Santa Maria Academy
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Flex Container */}
                </div>
              </div>
              {/* End Education Section */}

              {/* Start Certification Section */}
              <div className="mt-24 md:mt-44">
                <div className="socket"></div>
                <div className="mt-12 md:mt-16 lg:mt-28">
                  <h1 className="experience-heading">Certifications</h1>
                  <h6 className="text-grayLightest text-center mt-6 text-sm sm:text-base">
                    Earned from different online courses out there.
                  </h6>
                  {/* Start Grid Container */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 xl:mt-24 gap-6">
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert1}
                        alt={cert1}
                      ></Image>
                    </div>
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert2}
                        alt={cert2}
                      ></Image>
                    </div>
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert3}
                        alt={cert3}
                      ></Image>
                    </div>
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert4}
                        alt={cert4}
                      ></Image>
                    </div>
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert5}
                        alt={cert5}
                      ></Image>
                    </div>
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert6}
                        alt={cert6}
                      ></Image>
                    </div>
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert7}
                        alt={cert7}
                      ></Image>
                    </div>
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert8}
                        alt={cert8}
                      ></Image>
                    </div>
                    {/* Item */}
                    <div className="group experience-cert-box">
                      <Image
                        className="experience-image"
                        src={cert9}
                        alt={cert9}
                      ></Image>
                    </div>
                  </div>
                  {/* End Grid Container */}
                </div>
              </div>
              {/* End Certification Section */}
            </div>
          </section>
          {/* ========= End Experience Section ========= */}

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

export default experience;
