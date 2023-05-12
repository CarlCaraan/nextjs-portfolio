import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";

// Images
import project0 from "../public/images/projects/project0.jpg";
import project1 from "../public/images/projects/project1.jpg";
import project2 from "../public/images/projects/project2.png";
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
import project14 from "../public/images/projects/project14.png";
import project15 from "../public/images/projects/project15.png";

// Framer Motion
import { motion } from "framer-motion";
import slideInUp from "../components/animation/slideInUp";

function projects() {
  const projects = [
    {
      id: 0,
      image: project0,
      title: "SB Information System",
      subtitle: "Php, Bootstrap, MySQL",
      link: "",
    },
    {
      id: 1,
      image: project1,
      title: "Booking Management System",
      subtitle: "Flask, Bootstrap, SQLite",
      link: "",
    },
    {
      id: 2,
      image: project2,
      title: "Keyboard Shop",
      subtitle: "Html, BulmaCSS, Javascript",
      link: "https://ikkawgears.netlify.app/",
    },
    {
      id: 3,
      image: project3,
      title: "Social Media App",
      subtitle: "Php, Javascript, CSS",
      link: "",
    },
    {
      id: 4,
      image: project4,
      title: "Business Permit Registration",
      subtitle: "Php, Javscript, Bootstrap",
      link: "",
    },
    {
      id: 5,
      image: project5,
      title: "Online News Portal",
      subtitle: "Laravel, Bootstrap, SQL",
      link: "",
    },
    {
      id: 6,
      image: project6,
      title: "Content Management System",
      subtitle: "Laravel, Bootstrap, SQL",
      link: "",
    },
    {
      id: 7,
      image: project7,
      title: "Online Employment System",
      subtitle: "Flask, Bootstrap, SQLite",
      link: "",
    },
    {
      id: 8,
      image: project8,
      title: "School Management System",
      subtitle: "Laravel, Bootstrap, SQL",
      link: "",
    },
    {
      id: 9,
      image: project9,
      title: "Lazapee ECommerce Website",
      subtitle: "ReactJs, Laravel, CSS Module",
      link: "",
    },
    {
      id: 10,
      image: project10,
      title: "Loaning Management System",
      subtitle: "Php, Bootstrap, SQL",
      link: "",
    },
    {
      id: 11,
      image: project11,
      title: "School Information System",
      subtitle: "Php, Bootstrap, SQL",
      link: "",
    },
    {
      id: 12,
      image: project12,
      title: "Gym Reservation System",
      subtitle: "Laravel, Bootstrap, SQL",
      link: "",
    },
    {
      id: 13,
      image: project13,
      title: "Sdo Laguna",
      subtitle: "Laravel, Bootstrap, SQL",
      link: "",
    },
    {
      id: 14,
      image: project14,
      title: "Pokeflip Card Game",
      subtitle: "React, TailwindCSS",
      link: "https://pokeflip-game.netlify.app/",
    },
    {
      id: 15,
      image: project15,
      title: "Project Blog App",
      subtitle: "React, CSS, Firebase",
      link: "https://reactjs-blog-chatapp.web.app/",
    },
  ];
  return (
    <Fragment>
      <title>Projects | Carl Caraan</title>
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
          {/* ========= Start Project Section ========= */}
          <section className="sm:mb-28" id="project">
            <div className="section-container">
              {/* Start Heading */}
              <div className="mt-12 lg:mt-24">
                <h1 className="big-heading-text">Latest Projects</h1>
                <p
                  className="text-sm leading-snug text-grayLight text-justify 
                  xl:pr-5 xl:w-1/2 xl:text-[1.25vw] xl:leading-normal lg:text-base lg:leading-normal sm:text-lg
                  dark:text-grayLightest"
                >
                  Ever since <u>I challenge myself</u> to create a different
                  project, I always enjoyed web development. Here are some of
                  the projects I worked on both <u>in</u> and{" "}
                  <u>outside of my studies</u>.
                </p>
              </div>
              {/* End Heading */}

              {/* Start Project Grid Container */}
              <div
                className="grid grid-cols-1 gap-8 mt-12
                lg:mt-24 xl:mt-40 lg:grid-cols-2"
              >
                {/* Item */}
                {projects &&
                  projects
                    .sort((a, b) => b.id - a.id)
                    .map((project) => (
                      <div
                        data-aos="zoom-in"
                        key={project.id}
                        className="flex flex-col space-y-6 mb-6
                        xl:space-y-12"
                      >
                        <div className="project_image-box">
                          <Link
                            href={project.link}
                            target={project.link ? "_blank" : ""}
                          >
                            <Image src={project.image} alt={project.image} />
                          </Link>
                        </div>
                        <div className="group cursor-default">
                          <Link
                            href={project.link}
                            target={project.link ? "_blank" : ""}
                          >
                            <h3 className="project_title">{project.title}</h3>
                          </Link>
                          <h5 className="project_subtitle">
                            {project.subtitle}
                          </h5>
                        </div>
                      </div>
                    ))}
              </div>
              {/* End Project Grid Container */}

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
      </motion.div>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Top Scroll ========= */}
      <TopScroll />
      {/* ========= End Top Scroll ========= */}
    </Fragment>
  );
}

export default projects;
