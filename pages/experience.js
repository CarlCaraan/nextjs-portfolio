import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function experience() {
  return (
    <Fragment>
      <title>Experience | Carl Caraan</title>
      {/* Start Navigation */}
      <Navbar />
      {/* End Navigation */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </Fragment>
  );
}

export default experience;
