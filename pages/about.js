import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopScroll from "../components/TopScroll";

function about() {
  return (
    <Fragment>
      <title>About | Carl Caraan</title>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Footer ========= */}
        <Footer />
        {/* ========= End Footer ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Top Scroll ========= */}
      <TopScroll />
      {/* ========= End Top Scroll ========= */}
    </Fragment>
  );
}

export default about;
