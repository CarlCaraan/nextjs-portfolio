import React, { Fragment } from "react";
import Head from "next/head";
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
import project16 from "../public/images/projects/project16.png";

// Icons SVG
const GithubIcon = (props) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={16} height={16} id="icon-bound" fill="none" />
    <path d="M12.294,3.294l-1.416,1.416L13.5,8l-2.622,3.294l1.416,1.416L16,8L12.294,3.294z M5.122,4.706L3.706,3.291L0,8l3.706,4.706 l1.416-1.416L2.5,8L5.122,4.706z M6,13h2l2-10H8L6,13z" />
  </svg>
);
const MonitorIcon = (props) => (
  <svg
    fill="#000000"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path d="M90.315,12.993H9.684c-3.119,0-5.644,2.528-5.644,5.645V67.83c0,3.118,2.526,5.645,5.644,5.645h30.359v8.556h-9.402 c-0.892,0-1.613,0.721-1.613,1.612v1.751c0,0.892,0.721,1.613,1.613,1.613h37.901c0.891,0,1.613-0.721,1.613-1.613v-1.751 c0-0.892-0.722-1.612-1.613-1.612h-8.586v-8.556h30.359c3.119,0,5.645-2.526,5.645-5.645V18.638 C95.96,15.521,93.434,12.993,90.315,12.993z M14.091,63.508l0-40.559l71.818,0l0,40.559L14.091,63.508z" />
    </g>
  </svg>
);

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
      demo: "",
      github: "",
    },
    {
      id: 1,
      image: project1,
      title: "Booking Management System",
      subtitle: "Flask, Bootstrap, SQLite",
      demo: "",
      github: "",
    },
    {
      id: 2,
      image: project2,
      title: "Keyboard Shop",
      subtitle: "Html, BulmaCSS, Javascript",
      demo: "https://ikkawgears.netlify.app/",
      github: "https://github.com/CarlCaraan/Theme-Project-Bulma-KeyboardShop",
    },
    {
      id: 3,
      image: project3,
      title: "Social Media App",
      subtitle: "Php, Javascript, CSS",
      demo: "",
      github: "https://github.com/CarlCaraan/corephp-socialmedia-website",
    },
    {
      id: 4,
      image: project4,
      title: "Business Permit Registration",
      subtitle: "Php, Javscript, Bootstrap",
      demo: "",
      github:
        "https://github.com/CarlCaraan/corephp-business-permit-registration",
    },
    {
      id: 5,
      image: project5,
      title: "Online News Portal",
      subtitle: "Laravel, Bootstrap, SQL",
      demo: "",
      github: "https://github.com/CarlCaraan/laravel5-news-portal",
    },
    {
      id: 6,
      image: project6,
      title: "Content Management System",
      subtitle: "Laravel, Bootstrap, SQL",
      demo: "",
      github: "https://github.com/CarlCaraan/laravel8-cms",
    },
    {
      id: 7,
      image: project7,
      title: "Online Employment System",
      subtitle: "Flask, Bootstrap, SQLite",
      demo: "",
      github: "https://github.com/CarlCaraan/flask-employment-management",
    },
    {
      id: 8,
      image: project8,
      title: "School Management System",
      subtitle: "Laravel, Bootstrap, SQL",
      demo: "",
      github: "https://github.com/CarlCaraan/laravel8-school-management-system",
    },
    {
      id: 9,
      image: project9,
      title: "Lazapee ECommerce Website",
      subtitle: "ReactJs, Laravel, CSS Module",
      demo: "",
      github: "https://github.com/CarlCaraan/laravel8-react-ecommerce",
    },
    {
      id: 10,
      image: project10,
      title: "Loaning Management System",
      subtitle: "Php, Bootstrap, SQL",
      demo: "",
      github: "https://github.com/CarlCaraan/corephp-aw01-project",
    },
    {
      id: 11,
      image: project11,
      title: "School Information System",
      subtitle: "Php, Bootstrap, SQL",
      demo: "",
      github: "https://github.com/CarlCaraan/corephp-itel305-sis",
    },
    {
      id: 12,
      image: project12,
      title: "Gym Reservation System",
      subtitle: "Laravel, Bootstrap, SQL",
      demo: "",
      github: "https://github.com/CarlCaraan/laravel9-gym",
    },
    {
      id: 13,
      image: project13,
      title: "Sdo Laguna",
      subtitle: "Laravel, Bootstrap, SQL",
      demo: "",
      github: "https://github.com/CarlCaraan/laravel9-sdo",
    },
    {
      id: 14,
      image: project14,
      title: "Pokeflip Card Game",
      subtitle: "React, TailwindCSS",
      demo: "https://pokeflip-game.netlify.app/",
      github: "https://github.com/CarlCaraan/reactjs-pokeflip",
    },
    {
      id: 15,
      image: project15,
      title: "Project Blog App",
      subtitle: "React, CSS, Firebase",
      demo: "https://reactjs-blog-chatapp.web.app/",
      github: "https://github.com/CarlCaraan/reactjs-blog-chatapp",
    },
    {
      id: 16,
      image: project16,
      title: "Matrix Software Solution",
      subtitle: "NextJs, Tailwind",
      demo: "https://matrixsoftwaresolution.vercel.app/",
      github: "https://github.com/CarlCaraan/nextjs-matrix",
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>Projects | Carl Caraan</title>
      </Head>

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
              <div
                className="mt-12 
                lg:mt-24"
              >
                <h1 className="big-heading-text">Latest Projects</h1>
                <p
                  className="text-sm leading-snug text-grayLight text-justify mt-12
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
                        data-aos-delay="200"
                        key={project.id}
                        className="flex flex-col space-y-6 mb-6 group
                        xl:space-y-12"
                      >
                        <div className="project_image-box relative">
                          {/* Start Overlay */}
                          <div
                            className="opacity-0 absolute bottom-0 left-0 right-0 items-center justify-center h-0
                            group-hover:opacity-100 group-hover:flex group-hover:z-10 group-hover:h-full transition-h duration-200"
                          >
                            <div className="flex flex-row rounded-full text-white shadow-lg">
                              <Link
                                href={project.demo}
                                target={project.demo ? "_blank" : ""}
                              >
                                <span
                                  title={!project.link && "Demo not available"}
                                  className={`flex flex-row bg-violet px-0 py-3 rounded-tl-full rounded-bl-full
                                  hover:bg-[#a87dff] group-hover:px-6 transition-px duration-500 ${
                                    project.demo
                                      ? ""
                                      : "line-through cursor-not-allowed"
                                  }`}
                                >
                                  <MonitorIcon className="w-6 fill-white mr-2" />
                                  Demo
                                </span>
                              </Link>
                              <Link
                                href={project.github}
                                target={project.github ? "_blank" : ""}
                              >
                                <span
                                  title={
                                    !project.github && "Github not available"
                                  }
                                  className={`flex flex-row bg-violet px-0 py-3 rounded-tr-full rounded-br-full
                                  hover:bg-[#a87dff] group-hover:px-6 transition-px duration-500 ${
                                    project.github
                                      ? ""
                                      : "line-through cursor-not-allowed"
                                  }`}
                                >
                                  <GithubIcon className="w-6 fill-white mr-2" />
                                  Code
                                </span>
                              </Link>
                            </div>
                          </div>
                          {/* End Overlay */}
                          <div className="group-hover:grayscale group-hover:blur-[1px] duration-300">
                            <Image src={project.image} alt={project.image} />
                          </div>
                        </div>
                        <div>
                          <h3 className="project_title">{project.title}</h3>
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
