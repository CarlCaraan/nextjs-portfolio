import { Fragment, useEffect } from "react";
import Head from "next/head";

// Components
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RecentProjectsSection from "../components/RecentProjectsSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";

// Framer Motion
import { motion } from "framer-motion";

export default function Home() {
  // Handle initial hash navigation smoothly
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const navOffset = 80;
          const pos =
            element.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Carl Caraan | Full Stack .NET Developer</title>
      </Head>

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
          {/* ========= Start Landing Top ========= */}
          {/* Hero Section */}
          <HeroSection />

          {/* Full Stack Developer / Recent Projects Showcase */}
          <RecentProjectsSection />
          {/* ========= End Landing Top ========= */}

          {/* ========= Start In-depth Sections ========= */}
          {/* About Section */}
          <AboutSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Quote Section (very bottom before footer) */}
          <QuoteSection />

          {/* Footer */}
          <Footer />
          {/* ========= End In-depth Sections ========= */}
        </main>
      </motion.div>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Top Scroll ========= */}
      <TopScroll />
      {/* ========= End Top Scroll ========= */}
    </Fragment>
  );
}
