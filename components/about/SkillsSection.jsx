import React from "react";
import AboutHeading from "./AboutHeading";
import Image from "next/image";

import figma from "../../public/images/about/figma.svg";
import adobeXD from "../../public/images/about/adobe xd.svg";
import html from "../../public/images/about/html.svg";
import css from "../../public/images/about/css.svg";
import sass from "../../public/images/about/sass.svg";
import javascript from "../../public/images/about/javscript.svg";
import jquery from "../../public/images/about/jquery.svg";
import bootstrap from "../../public/images/about/bootstrap.svg";
import tailwind from "../../public/images/about/tailwind.svg";
import react from "../../public/images/about/react.svg";
import node from "../../public/images/about/nodejs.svg";
import next from "../../public/images/about/nextjs.svg";
import laravel from "../../public/images/about/laravel.svg";
import firebase from "../../public/images/about/firebase.svg";
import mysql from "../../public/images/about/mysql.svg";
import vscode from "../../public/images/about/vs code.svg";
import git from "../../public/images/about/git.svg";
import Link from "next/link";
import resume from "../../public/downloads/caraan_resume.pdf";

function SkillsSection({ props }) {
  return (
    <section
      className="mt-12 
          lg:mt-0"
      id="Skills"
    >
      <div className="section-container-fluid">
        {/* Start Grid Container */}
        <div className="grid place-items-center">
          {/* Start About Heading */}
          <AboutHeading props={props.text} />
          {/* End About Heading */}

          {/* Start Skills Heading */}
          <div
            className="col-start-1 col-span-9 justify-self-stretch py-4
                md:col-start-2 md:py-12"
          >
            {/* Start Heading Text */}
            <div
              className="text-base text-black indent-7 auto-hyphen 
             xl:off-hyphen sm:text-xl lg:text-2xl"
            >
              I am highly skilled in programming, with expertise in languages
              such as Javascript and Php, as well as experience with databases
              and software development frameworks. I have used these skills to
              design and implement software solutions for various projects, and
              have a track record of delivering high-quality, efficient code.
            </div>
            {/* End Heading Text */}
          </div>
          {/* End Skills Heading */}
        </div>
        {/* End Grid Container */}
      </div>

      {/* Start Skills Content */}
      <div className="bg-panel py-16">
        <div className="section-container-fluid">
          {/* Start Grid Container */}
          <div className="grid">
            <div
              className="col-start-1 col-span-1 w-60 hidden 
              xl:block"
            ></div>
            <div
              className="col-start-1 col-span-10 
              md:col-start-2"
            >
              {/* Start Inner Grid Container */}
              <div className="grid grid-cols-7 md:grid-rows-3 gap-6">
                {/* Item 1 */}
                <div
                  className="custom-border-dashed col-span-7 
                  md:col-span-2"
                >
                  <h4 className="skills-heading">UX/UI</h4>
                  <div className="skills-inner-flexbox">
                    <div className="neumorphism-box">
                      <Image src={figma} alt={figma}></Image>
                    </div>
                    <div className="neumorphism-box">
                      <span
                        className="font-sansSB text-xl mr-1 cursor-default select-none
                        xl:text-[.9vw] lg:text-2xl "
                      >
                        Adobe
                      </span>
                      <Image
                        className="w-16
                        xl:my-0 xl:w-1/3 md:w-12 lg:my-2"
                        src={adobeXD}
                        alt={adobeXD}
                      ></Image>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div
                  className="custom-border-dashed col-span-7 
                  md:row-span-2 md:col-span-3"
                >
                  <h4 className="skills-heading">Web</h4>
                  <div className="flex flex-col gap-4">
                    <div className="skills-inner-flexbox">
                      <div className="neumorphism-box">
                        <Image src={html} alt={html}></Image>
                      </div>
                      <div className="neumorphism-box">
                        <Image src={css} alt={css}></Image>
                      </div>
                      <div className="neumorphism-box">
                        <Image src={sass} alt={sass}></Image>
                      </div>
                    </div>
                    <div className="skills-inner-flexbox">
                      <div className="neumorphism-box">
                        <Image src={javascript} alt={javascript}></Image>
                      </div>
                      <div className="neumorphism-box">
                        <Image src={jquery} alt={jquery}></Image>
                      </div>
                      <div className="neumorphism-box opacity-0"></div>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div
                  className="custom-border-dashed col-span-7 
                  md:col-span-2"
                >
                  <h4 className="skills-heading">CSS Frameworks</h4>
                  <div className="skills-inner-flexbox">
                    <div className="neumorphism-box">
                      <Image src={bootstrap} alt={bootstrap}></Image>
                    </div>
                    <div className="neumorphism-box">
                      <Image src={tailwind} alt={tailwind}></Image>
                    </div>
                  </div>
                </div>
                {/* Item 4 */}
                <div
                  className="custom-border-dashed col-span-7 
                  md:row-span-2 md:row-start-2 md:col-span-2"
                >
                  <h4 className="skills-heading">Tech Stacks</h4>
                  <div className="flex flex-col gap-4">
                    <div className="skills-inner-flexbox">
                      <div className="neumorphism-box">
                        <Image src={react} alt={react}></Image>
                      </div>
                      <div className="neumorphism-box">
                        <Image src={node} alt={node}></Image>
                      </div>
                    </div>
                    <div className="skills-inner-flexbox">
                      <div className="neumorphism-box">
                        <Image
                          className="w-16
                          xl:my-0 xl:w-1/2 md:w-12 lg:my-4"
                          src={next}
                          alt={next}
                        ></Image>
                      </div>
                      <div className="neumorphism-box">
                        <Image src={laravel} alt={laravel}></Image>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 5 */}
                <div
                  className="custom-border-dashed col-span-7 
                  md:row-start-3 md:col-span-3"
                >
                  <h4 className="skills-heading">Database</h4>
                  <div className="skills-inner-flexbox">
                    <div className="neumorphism-box">
                      <Image src={firebase} alt={firebase}></Image>
                    </div>
                    <div className="neumorphism-box">
                      <Image src={mysql} alt={mysql}></Image>
                    </div>
                    <div className="neumorphism-box opacity-0"></div>
                  </div>
                </div>
                {/* Item 6 */}
                <div
                  className="custom-border-dashed col-span-7 
                  md:row-span-1 md:col-span-2"
                >
                  <h4 className="skills-heading">Tools</h4>
                  <div className="skills-inner-flexbox">
                    <div className="neumorphism-box">
                      <Image src={vscode} alt={vscode}></Image>
                    </div>
                    <div className="neumorphism-box">
                      <Image src={git} alt={git}></Image>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Inner Grid Container */}
            </div>
          </div>
          {/* End Grid Container */}

          {/* Start Post Skills Content */}
          <div className="my-52 text-center">
            <h1 className="text-5xl font-sansSB mb-12">
              Work that matters to
              <br /> clients who value design
            </h1>

            <Link
              className="text-xl font-sansSB underline hover:no-underline"
              href={resume}
              target="_blank"
            >
              Download CV
            </Link>
          </div>
          {/* End Post Skills Content */}
        </div>
      </div>
      {/* End Skills Content */}
    </section>
  );
}

export default SkillsSection;
