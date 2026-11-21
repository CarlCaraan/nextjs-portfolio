import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import AboutHeading from "./AboutHeading";

// Images
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
import asp from "../../public/images/about/asp.svg";
import csharp from "../../public/images/about/csharp.svg";
import sqlserver from "../../public/images/about/sqlserver.svg";
import angular from "../../public/images/about/angular.svg";
import azure from "../../public/images/about/azure.svg";
import github from "../../public/images/about/github.svg";
import claude from "../../public/images/about/claude.svg";
import codex from "../../public/images/about/codex.svg";
import antigravity from "../../public/images/about/antigravity.svg";
import gemini from "../../public/images/about/gemini.svg";
import githubCopilot from "../../public/images/about/githubcopilot.svg";

const skillGroups = [
  {
    title: "Tech Stacks",
    skills: [
      ["React", react],
      ["Node.js", node],
      ["Next.js", next],
      ["Laravel", laravel],
      [".NET", asp],
      ["C#", csharp],
      ["Angular", angular, true],
    ],
  },
  {
    title: "Web",
    skills: [
      ["HTML", html],
      ["CSS", css],
      ["Sass", sass],
      ["JavaScript", javascript],
      ["jQuery", jquery],
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      ["Visual Studio Code", vscode],
      ["Git", git],
      ["GitHub", github, true],
      ["Microsoft Azure", azure, true],
    ],
  },
  {
    title: "Database",
    skills: [
      ["Firebase", firebase],
      ["MySQL", mysql],
      ["SQL Server", sqlserver],
    ],
  },
  {
    title: "UX/UI",
    skills: [
      ["Figma", figma],
      ["Adobe XD", adobeXD, true],
    ],
  },
  {
    title: "CSS Frameworks",
    skills: [
      ["Bootstrap", bootstrap],
      ["Tailwind CSS", tailwind],
    ],
  },
  {
    title: "AI Development Tools",
    wide: true,
    skills: [
      ["Claude", claude, true],
      ["Codex", codex, true],
      ["Antigravity", antigravity, true],
      ["Gemini", gemini, true],
      ["GitHub Copilot", githubCopilot, true],
    ],
  },
];

function SkillTile({ name, logo, showLabel }) {
  return (
    <li className="neumorphism-box">
      <Image
        className={showLabel ? "h-7 w-7 object-contain" : "h-11 w-full max-w-[7rem] object-contain"}
        src={logo}
        alt={showLabel ? "" : name}
      />
      {showLabel && <span>{name}</span>}
    </li>
  );
}

function SkillsSection({ props }) {
  return (
    <section
      className="mt-12 sm:mb-28
      lg:mt-0"
      id="skills"
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
              className="text-sm text-black indent-8 text-justify 
              xl:off-hyphen sm:text-xl lg:text-2xl
              dark:text-white"
            >
              I build and maintain enterprise web applications with .NET,
              Angular, and SQL Server. My work spans system design, REST API
              development, database optimization, and Azure deployments. I use
              GitHub for version control and CI/CD and AI tools to support
              software development.
            </div>
            {/* End Heading Text */}
          </div>
          {/* End Skills Heading */}
        </div>
        {/* End Grid Container */}
      </div>

      {/* Start Skills Content */}
      <div
        className="bg-panel py-16
        dark:bg-grayLight"
      >
        <div className="section-container-fluid">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 md:gap-6">
            {skillGroups.map(({ title, skills, wide }) => (
              <div
                key={title}
                data-aos="fade-up"
                className={wide
                  ? "custom-border-dashed md:col-span-2"
                  : "custom-border-dashed"}
              >
                <h4 className="skills-heading">{title}</h4>
                <ul
                  className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${wide ? "md:grid-cols-6" : ""}`}
                >
                  {skills.map(([name, logo, showLabel]) => (
                    <SkillTile key={name} name={name} logo={logo} showLabel={showLabel} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Start Post Skills Content */}
          <div
            className="mt-16 mb-0 text-center text-black
            sm:mt-24 sm:mb-8
            dark:text-white"
          >
            <Link
              className="text-2xl font-sansSB
              sm:text-5xl"
              href="https://www.figma.com/proto/ObYG9JGcC7f0fXupjUipqG/Portfolio_v2?page-id=1%3A3&node-id=17%3A13&viewport=-798%2C-746%2C0.62&scaling=scale-down-width&starting-point-node-id=17%3A13"
              title="Figma prototype"
              target="_blank"
            >
              Work that matters to
              <br /> clients who value design
            </Link>

            <div
              className="flex flex-col space-y-12 mt-4
              sm:space-y-24 sm:mt-12"
            >
              <div>
                <Link
                  className="text-base font-sansSB underline hover:no-underline 
                  sm:text-xl"
                  href="/downloads/Carl Caraan - Resume (2026).pdf"
                  target="_blank"
                >
                  Download CV
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
          {/* End Post Skills Content */}
        </div>
      </div>
      {/* End Skills Content */}
    </section>
  );
}

export default SkillsSection;
