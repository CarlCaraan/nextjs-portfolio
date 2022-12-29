import Link from "next/link";
import Navbar from "../components/Navbar";
import { Fragment } from "react";
import Image from "next/image";
import UserImage from "../public/images/userbg.png";

export default function Home() {
  return (
    <Fragment>
      <title>Carl Caraan | Web Developer</title>
      <Navbar />
      <main>
        {/* ========= Start Hero Section ========= */}
        <section id="hero" className="section-container">
          {/* Start Flex Container */}
          <div
            className="flex flex-col-reverse items-center
            lg:flex-row"
          >
            {/* Left Section */}
            <div className="lg:w-1/2">
              <h1
                className="text-2xl font-sansB text-center mt-12
                lg:text-start sm:text-5xl lg:mt-12 xl:mt-0"
              >
                Let&#39;s Build <br /> Something Epic
              </h1>
              <div
                className="mt-6 text-grayLight text-center 
                lg:text-start"
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
                <Link
                  href="/about"
                  className="text-black block text-center font-sansSB underline hover:no-underline
                  lg:text-start"
                >
                  Discover more about me
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2">
              <Image
                className="w-3/4 mx-auto 
                md:w-5/6 lg:mr-0"
                // src="/images/userbg.png"
                src={UserImage}
                alt="carlcaraan"
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* End Flex Container */}
        </section>
        {/* ========= End Hero Section ========= */}

        {/* ========= Start Content Section ========= */}
        <section
          className="mt-12 bg-panel 
          xl:-mt-14"
          id="content"
        >
          <div className="relative text-[6.7vw] font-linksB text-center pt-[4.3vw] text-white">
            Full Stack Developer
            <span
              className="hidden absolute font-linksSB text-black text-[2.5vw] left-[25vw] top-[10.2vw] 
              lg:block"
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

          {/* Start Button Container */}
          <div className="section-container relative">
            {/* Button */}
            <button
              className="custom-btn group text-center block w-full mt-12
              lg:mt-8 lg:text-start lg:absolute lg:top-0 lg:right-[6rem] lg:w-32"
            >
              View all{" "}
              <span
                className="font-bold group-hover:ml-1 transition-all ease-in hidden 
                lg:inline-block"
              >
                &rarr;
              </span>
            </button>

            {/* Start Project Grid Container */}
            <div
              className="grid grid-cols-8 gap-4 pt-6 
              lg:pt-24"
            >
              <div className="col-span-full md:col-span-8 bg-red-500">asd</div>
              <div className="col-span-full lg:col-span-5 bg-green-500">
                asd
              </div>
              <div className="col-span-full lg:col-span-3 bg-blue-500">asd</div>
            </div>
            {/* End Project Grid Container */}
          </div>
          {/* End Button Container */}
        </section>
        {/* ========= End Content Section ========= */}
      </main>
    </Fragment>
  );
}
