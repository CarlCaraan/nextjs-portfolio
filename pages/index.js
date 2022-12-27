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
        <section
          id="hero"
          className="container mx-auto px-6 
        md:px-24"
        >
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
          <div className="relative text-[6.8vw] font-linksB text-center pt-[4.3vw] text-white">
            Full Stack Developer
            <span
              className="hidden absolute font-linksSB text-black text-[2.5vw] left-[25vw] top-[10.2vw] 
              lg:block"
            >
              Recent Projects
            </span>
          </div>
          <div
            className="font-linksSB text-black text-[5vw] text-center
            lg:hidden "
          >
            Recent Projects
          </div>
        </section>
        {/* ========= End Content Section ========= */}
      </main>
    </Fragment>
  );
}
