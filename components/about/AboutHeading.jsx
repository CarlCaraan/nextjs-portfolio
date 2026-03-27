import React, { Fragment } from "react";

function AboutHeading(props) {
  let headingText = props.props;
  return (
    <Fragment>
      {/* Title Heading */}
      <div
        className="uppercase text-2xl col-span-1 justify-self-start pr-4 font-serif 
        lg:w-60 lg:text-5xl md:text-3xl"
      >
        {headingText}
      </div>
      {/* Horizontal Rule */}
      <div className="socket col-start-2 col-span-10"></div>
    </Fragment>
  );
}

export default AboutHeading;
