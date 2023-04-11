import React from "react";
import Image from "next/image";

// Components;
import AboutHeading from "./AboutHeading";

// Images
import UserImage from "../../public/images/userbg.png";

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
                    Caraan Carl
                  </h1>
                  <p
                    className="text-base 
                    sm:text-xl"
                  >
                    Carl Aaron D. Caraan
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
                      className="basis-3/5 text-base text-grayLight
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
                      className="basis-3/5 text-base text-grayLight
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
                      className="basis-3/5 text-base text-grayLight
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
                      className="basis-3/5 text-base text-grayLight text-justify auto-hyphen
                      xl:off-hyphen sm:text-xl
                      dark:text-grayLightest"
                    >
                      I love art and drawing since I was in elementary school. I
                      think that practice has shaped the abilities that enable
                      me to fully immerse myself in the things I enjoy.
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
                      className="basis-3/5 text-base text-grayLight
                      sm:text-xl
                      dark:text-grayLightest"
                    >
                      Interaction Design, Backend Logic
                    </div>
                  </div>
                </div>
                {/* End Inner Flex Container */}
              </div>
              <div className="basis-1/2">
                <Image
                  data-aos="zoom-in"
                  className="w-full mx-auto 
                  md:mx-0 md:w-3/4 xl:w-full"
                  src={UserImage}
                  alt="carlcaraan"
                ></Image>
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
