import Link from "next/link";
import Navbar from "../components/Navbar";
import { Fragment } from "react";
import Image from "next/image";

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
                className="text-2xl font-sansB mt-12 text-center 
                lg:text-start sm:text-5xl lg:mt-16"
              >
                Let's Build <br /> Something Epic
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
                lg:mt-40"
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
                md:w-full lg:mr-0"
                src="/../public/images/userbg.png"
                alt="carlcaraan"
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* End Flex Container */}
        </section>
        {/* ========= End Hero Section ========= */}
      </main>
    </Fragment>
  );
}
