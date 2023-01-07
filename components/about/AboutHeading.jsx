import React, { Fragment } from "react";

function AboutHeading() {
  return (
    <Fragment>
      {/* Title Heading */}
      <div
        className="uppercase text-2xl col-span-1 justify-self-start pr-4
              lg:text-5xl md:text-3xl"
      >
        Profile
      </div>
      {/* Horizontal Rule */}
      <div className="socket col-start-2 col-span-10"></div>
    </Fragment>
  );
}

export default AboutHeading;
