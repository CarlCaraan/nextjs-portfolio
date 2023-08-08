import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";

// Images
import ProjectImage1 from "../public/images/landing_page/Project 1.png";
import ProjectImage2 from "../public/images/landing_page/Project 2.png";
import ProjectImage3 from "../public/images/landing_page/Project 3.png";
import CarlPNG from "../public/images/carl_png.png";

// Framer Motion
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Fragment>
      <title>Carl Caraan | Web Developer</title>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <main>
          {/* ========= Start Hero Section ========= */}
          <section id="hero" className="section-container">
            {/* Start Flex Container */}
            <div
              className="flex flex-col-reverse items-center
              lg:flex-row"
            >
              {/* Left Section */}
              <div className="lg:basis-1/2">
                <h1
                  className="text-2xl font-sansB text-center mt-12
                  lg:text-start sm:text-5xl lg:mt-12 xl:mt-0"
                >
                  Let&#39;s Build <br /> Something Epic
                </h1>
                <div
                  className="mt-6 text-grayLight text-center 
                  lg:text-start
                  dark:text-grayLightest"
                >
                  <span className="sm:text-2xl font-sansSB">Web Developer</span>{" "}
                  <span className="sm:text-2xl">
                    based in Laguna, Philippines
                  </span>
                </div>

                <div
                  className="mt-6 
                  sm:mt-12 xl:mt-16 2xl:mt-40"
                >
                  <div className="text-center lg:text-start">
                    <Link
                      href="/about"
                      className="text-black font-sansSB underline hover:no-underline inline-block
                      dark:text-white"
                    >
                      <div>Discover more about me</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="lg:basis-1/2">
                <Image
                  className="w-3/4 mx-auto 
                  md:w-5/6 lg:mr-0"
                  // src="/images/userbg.png"
                  src={CarlPNG}
                  alt="carlcaraan"
                  priority
                />
              </div>
            </div>
            {/* End Flex Container */}
          </section>
          {/* ========= End Hero Section ========= */}

          {/* ========= Start Content Section ========= */}
          <section
            className="mt-12 bg-panel 
            xl:-mt-14
            dark:bg-grayLight"
            id="content"
          >
            {/* Start Content Heading */}
            <div
              className="relative text-[6.7vw] font-linksB text-center pt-12 lg:pt-[4.3vw] text-white select-none
              dark:text-grayLightest"
            >
              Full Stack Developer
              <span
                className="hidden absolute font-linksSB text-black text-[2.5vw] left-[25vw] top-[10.2vw] 
                lg:block
                dark:text-white"
              >
                Recent Projects
              </span>
            </div>

            {/* Hidden */}
            <div
              className="font-linksSB text-black text-[5vw] text-center
              lg:hidden "
            >
              Recent Projects
            </div>
            {/* End Content Heading */}

            {/* Start Container */}
            <div className="section-container relative">
              {/* Start Button */}
              <Link
                href="/projects"
                className="custom-btn group text-lg text-center block w-full mt-12
                sm:text-xl lg:mt-8 lg:text-start lg:absolute lg:top-0 lg:right-[6rem] lg:w-32 lg:text-base
                dark:shadow-none"
              >
                View all{" "}
                <span
                  className="font-bold group-hover:ml-1 transition-all ease-in hidden 
                  lg:inline-block"
                >
                  &rarr;
                </span>
              </Link>
              {/* End Button */}

              {/* Start Project Grid Container */}
              <div
                className="grid grid-cols-8 gap-6 pt-6 
                lg:pt-24"
              >
                {/* Item 1 */}
                <div
                  className="col-span-full group relative overflow-hidden shadow-lg"
                  data-aos="fade-up"
                >
                  <Image
                    className="border border-white rounded-sm w-full"
                    src={ProjectImage1}
                    alt="project 1"
                  />
                  <div className="overlap-title">sdo-laguna.com</div>
                </div>

                {/* Item 2 */}
                <div
                  className="col-span-full group relative overflow-hidden shadow-lg row-span-2
                  md:col-span-5"
                  data-aos="fade-up"
                >
                  <Image
                    className="border border-white rounded-sm w-full"
                    src={ProjectImage2}
                    alt="project 2"
                  />
                  <div className="overlap-title">
                    lazada clone (reactjs + laravel)
                  </div>
                </div>

                {/* Item 3 */}
                <div
                  className="col-span-full group relative overflow-hidden shadow-lg row-span-1
                  md:col-span-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Image
                    className="border border-white rounded-sm w-full"
                    src={ProjectImage3}
                    alt="project 3"
                  />
                  <div className="overlap-title">venture (flask)</div>
                </div>
              </div>
              {/* End Project Grid Container */}
            </div>
            {/* End Container */}
          </section>
          {/* ========= End Content Section ========= */}

          {/* ========= Start Qoute Section ========= */}
          <section
            className="bg-white -mt-14 pt-32 
            lg:-mt-32 lg:pt-64
            dark:bg-black"
            id="quote"
          >
            {/* Start Container */}
            <div className="section-container">
              {/* Horizonal Line */}
              <div className="socket"></div>

              <blockquote
                className="text-2xl font-serif text-black text-center mt-12 
                md:text-3xl md:leading-relaxed 
                lg:leading-relaxed lg:text-5xl lg:mt-24 
                xl:px-24
                dark:text-white"
                data-aos="zoom-in"
              >
                “We can not solve our problems with the same level of thinking
                that created them.”
              </blockquote>
              <h3 className="mt-20 text-center lg:text-3xl font-sansSB">
                Albert Einstein
              </h3>
            </div>
            {/* End Container */}
          </section>
          {/* ========= End Qoute Section ========= */}

          {/* ========= Start Pre-Footer Heading ========= */}
          <section id="pre-footer">
            {/* Start Container */}
            <div
              className="section-container mt-24 
              md:mt-40 lg:mt-80"
            >
              <div className="flex flex-row md:flex-col">
                <div>
                  <Image
                    className="float-left w-[4rem] bg-slate-100 rounded-full
                    xl:w-[7rem] lg:w-[5.5rem] md:w-[4rem] sm:w-[5rem]"
                    src={CarlPNG}
                    alt="Carl Caraan"
                    priority
                  ></Image>
                  <Link
                    href="/projects"
                    className="float-left text-grayLight text-2xl ml-2 mt-4
                    xl:text-9xl lg:text-8xl md:text-7xl sm:text-4xl lg:ml-8 md:ml-4 md:mt-0
                    dark:text-white"
                  >
                    Show the
                  </Link>
                </div>
                <Link
                  href="/projects"
                  className=" text-grayLight ml-2 mt-4 text-2xl
                  xl:text-9xl lg:text-8xl md:text-7xl sm:text-4xl md:ml-0 md:mt-0
                  dark:text-white"
                >
                  code <strong>&rarr;</strong>
                </Link>
              </div>
            </div>
            {/* End Container */}
          </section>
          {/* ========= End Pre-Footer Heading ========= */}

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
