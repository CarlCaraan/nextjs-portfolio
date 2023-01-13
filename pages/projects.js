import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";
import Image from "next/image";
import project1 from "../public/images/projects/project1.jpg";
import project2 from "../public/images/projects/project2.jpg";
import project3 from "../public/images/projects/project3.png";
import project4 from "../public/images/projects/project4.png";
import project5 from "../public/images/projects/project5.png";
import project6 from "../public/images/projects/project6.png";
import project7 from "../public/images/projects/project7.png";
import project8 from "../public/images/projects/project8.png";
import project9 from "../public/images/projects/project9.png";
import project10 from "../public/images/projects/project10.png";
import project11 from "../public/images/projects/project11.png";
import project12 from "../public/images/projects/project12.png";
import project13 from "../public/images/projects/project13.png";
import Link from "next/link";

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
        <section className="sm:mb-28" id="project">
          <div className="section-container">
            {/* Start Heading */}
            <div className="mt-12 lg:mt-24">
              <h1 className="big-heading-text">Latest Projects</h1>
              <p
                className="text-sm leading-snug text-grayLight 
                xl:pr-5 xl:w-1/2 xl:text-[1.25vw] xl:leading-normal lg:text-base lg:leading-normal sm:text-lg
                dark:text-grayLightest"
              >
                Ever since <u>I challenge myself</u> to create a different
                project, I always enjoyed web development. Here are some of the
                projects I worked on both <u>in</u> and{" "}
                <u>outside of my studies</u>.
              </p>
            </div>
            {/* End Heading */}

            {/* Start Project Flex Container */}
            <div
              className="flex flex-col mt-12 space-y-16
              lg:mt-24 xl:mt-40"
            >
              {/* Row */}
              <div className="project_row-container">
                {/* Item A */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project13} alt={project13}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Sdo Laguna</h3>
                    <h5 className="project_subtitle">
                      Laravel, Bootstrap, SQL
                    </h5>
                  </div>
                </div>
                {/* Item B */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project12} alt={project12}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Gym Reservation System</h3>
                    <h5 className="project_subtitle">
                      Laravel, Bootstrap, SQL
                    </h5>
                  </div>
                </div>
              </div>

              {/* Row */}
              <div className="project_row-container">
                {/* Item A */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project11} alt={project11}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">School Information System</h3>
                    <h5 className="project_subtitle">Php, Bootstrap, SQL</h5>
                  </div>
                </div>
                {/* Item B */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project10} alt={project10}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Loaning Management System</h3>
                    <h5 className="project_subtitle">Php, Bootstrap, SQL</h5>
                  </div>
                </div>
              </div>

              {/* Row */}
              <div className="project_row-container">
                {/* Item A */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project9} alt={project9}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Lazapee ECommerce Website</h3>
                    <h5 className="project_subtitle">
                      ReactJs, Laravel, CSS Module
                    </h5>
                  </div>
                </div>
                {/* Item B */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project8} alt={project8}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">School Management System</h3>
                    <h5 className="project_subtitle">
                      Laravel, Bootstrap, SQL
                    </h5>
                  </div>
                </div>
              </div>

              {/* Row */}
              <div className="project_row-container">
                {/* Item A */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project7} alt={project7}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Online Employment System</h3>
                    <h5 className="project_subtitle">
                      Flask, Bootstrap, SQLite
                    </h5>
                  </div>
                </div>
                {/* Item B */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project6} alt={project6}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Content Management System</h3>
                    <h5 className="project_subtitle">
                      Laravel, Bootstrap, SQL
                    </h5>
                  </div>
                </div>
              </div>

              {/* Row */}
              <div className="project_row-container">
                {/* Item A */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project5} alt={project5}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Online News Portal</h3>
                    <h5 className="project_subtitle">
                      Laravel, Bootstrap, SQL
                    </h5>
                  </div>
                </div>
                {/* Item B */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project4} alt={project4}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">
                      Business Permit Registration
                    </h3>
                    <h5 className="project_subtitle">
                      Php, Javscript, Bootstrap
                    </h5>
                  </div>
                </div>
              </div>

              {/* Row */}
              <div className="project_row-container">
                {/* Item A */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project3} alt={project3}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Social Media App</h3>
                    <h5 className="project_subtitle">Php, Javascript, CSS</h5>
                  </div>
                </div>
                {/* Item B */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project2} alt={project2}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">Booking Management System</h3>
                    <h5 className="project_subtitle">
                      Flask, Bootstrap, SQLite
                    </h5>
                  </div>
                </div>
              </div>

              {/* Row */}
              <div className="project_row-container">
                {/* Item A */}
                <div className="project_item-container">
                  <div className="project_image-box">
                    <Image src={project1} alt={project1}></Image>
                  </div>
                  <div className="group cursor-default">
                    <h3 className="project_title">SB Information System</h3>
                    <h5 className="project_subtitle">Php, Bootstrap, MySQL</h5>
                  </div>
                </div>
                {/* Item B */}
              </div>
            </div>
            {/* End Project Flex Container */}

            {/* Start Post Project Section */}
            <div
              className="mt-24 mb-0 text-center text-black 
              sm:mt-64 sm:mb-8
              dark:text-white"
            >
              <h1
                className="text-2xl font-sansSB mb-12 
              sm:text-5xl"
              >
                Feeling strong?
                <br /> Let&#39;s get to work!
              </h1>

              <div
                className="flex flex-col space-y-12
                sm:space-y-24"
              >
                <div>
                  <Link
                    className="text-base font-sansSB underline hover:no-underline 
                  sm:text-xl"
                    href="/contact"
                  >
                    Get in touch
                  </Link>
                </div>

                <div>
                  <a
                    className="text-base hover:text-violet duration-200 
                  sm:text-2xl"
                    href="mailto:caraancarlaaron@gmail.com"
                  >
                    caraancarlaaron@gmail.com
                  </a>
                </div>
              </div>
            </div>
            {/* End Post Project Section */}
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
