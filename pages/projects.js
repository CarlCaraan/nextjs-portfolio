import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function projects() {
  return (
    <Fragment>
      <title>Projects | Carl Caraan</title>
      {/* Start Navigation */}
      <Navbar />
      {/* End Navigation */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </Fragment>
  );
}

export default projects;
