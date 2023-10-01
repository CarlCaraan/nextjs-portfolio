import React from "react";
import Image from "next/image";

// Components;
import AboutHeading from "./AboutHeading";

// Images
// import UserImage from "../../public/images/userbg.png";
import CarlPNG from "../../public/images/carl_png.png";

function ProfileSection({ props }) {
  return (
    <section
      className="mt-12 
      lg:mt-0"
      id="profile"
    >
      <div className="section-container-fluid">
        {/* Start Grid Container */}
        <div className="grid place-items-center">
          {/* Start About Heading */}
          <AboutHeading props={props.text} />
          {/* End About Heading */}

          {/* Start Profile Content */}
          <div
            className="col-start-1 col-span-9 justify-self-stretch py-4
            md:col-start-2 md:py-24"
          >
            {/* Start Flex Container */}
            <div
              className="flex flex-col-reverse
              xl:flex-row"
            >
              <div className="basis-1/2">
                <div className="pt-12">
                  <h1
                    className="text-2xl 
                    md:text-3xl lg:text-4xl xl:text-5xl"
                  >
                    Carl Aaron D. Caraan
                  </h1>
                  <p
                    className="text-base 
                    sm:text-xl"
                  >
                    Personal Information
                  </p>
                </div>

                {/* Start Inner Flex Container */}
                <div className="flex-col space-y-8 mt-12">
                  {/* Item 1 */}
                  <div className="flex">
                    <div
                      className="basis-2/5 text-base text-black  
                      sm:text-xl
                      dark:text-white"
                    >
                      Date of Birth
                    </div>
                    <div
                      className="basis-3/5 text-sm text-grayLight
                      sm:text-xl
                      dark:text-grayLightest"
                    >
                      November 28, 1999
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex">
                    <div
                      className="basis-2/5 text-base text-black 
                      sm:text-xl
                      dark:text-white"
                    >
                      Birthplace
                    </div>
                    <div
                      className="basis-3/5 text-sm text-grayLight
                      sm:text-xl
                      dark:text-grayLightest"
                    >
                      Santa Cruz, Laguna
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="flex">
                    <div
                      className="basis-2/5 text-base text-black 
                      sm:text-xl
                      dark:text-white"
                    >
                      Education
                    </div>
                    <div
                      className="basis-3/5 text-sm text-grayLight
                      sm:text-xl
                      dark:text-grayLightest"
                    >
                      BS Information Technology <br />
                      Laguna State Polytechnic University
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="flex">
                    <div
                      className="basis-2/5 text-base text-black 
                      sm:text-xl
                      dark:text-white"
                    >
                      Interests
                    </div>
                    <div
                      className="basis-3/5 text-sm text-grayLight text-justify auto-hyphen flex flex-col
                      xl:off-hyphen sm:text-xl
                      dark:text-grayLightest"
                    >
                      <span>Frontend Development</span>
                      <span>Backend Development</span>
                      <span>Web Design</span>
                      <span>Web Development</span>
                      <span>Full-Stack Development</span>
                      <span>Responsive Design</span>
                      <span>Backend Logic</span>
                      <span>Problem-solving</span>
                      <span>Creativity</span>
                      <span>Continues Learning</span>
                    </div>
                  </div>
                  {/* Item 5 */}
                  <div className="flex">
                    <div
                      className="basis-2/5 text-base text-black 
                      sm:text-xl
                      dark:text-white"
                    >
                      Area
                    </div>
                    <div
                      className="basis-3/5 text-sm text-grayLight flex flex-col
                      sm:text-xl
                      dark:text-grayLightest"
                    >
                      <span>Interaction Design</span>
                      <span>Coding</span>
                    </div>
                  </div>
                </div>
                {/* End Inner Flex Container */}
              </div>
              <div className="basis-1/2">
                <Image
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="w-full mx-auto 
                  md:mx-0 md:w-3/4 xl:w-full"
                  src={CarlPNG}
                  alt="carlcaraan"
                />
              </div>
            </div>
            {/* End Flex Container */}
          </div>
          {/* End Profile Content */}
        </div>
        {/* End Grid Container */}
      </div>
    </section>
  );
}

export default ProfileSection;
