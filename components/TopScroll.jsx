import React, { useState, useEffect, Fragment } from "react";

function TopScroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      setShowButton(window.scrollY > 500);
    }
    window.addEventListener("scroll", scrollHandler);

    // Clean Up Function
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const ArrowBtnClickHandler = () => {
    window.scrollTo(0, 0);
  };

  const ArrowIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      id="magicoon-Regular"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>{".cls-1{fill:#fff;}"}</style>
      </defs>
      <g id="arrow-up-Regular">
        <path
          id="arrow-up-Regular-2"
          data-name="arrow-up-Regular"
          className="cls-1"
          d="M19.53,10.531a.751.751,0,0,1-1.06,0l-5.72-5.72V21a.75.75,0,0,1-1.5,0V4.811l-5.72,5.72A.75.75,0,0,1,4.47,9.47l7-7a.749.749,0,0,1,1.06,0l7,7A.75.75,0,0,1,19.53,10.531Z"
        />
      </g>
    </svg>
  );

  return (
    <Fragment>
      {showButton && (
        <div
          className="right-20 bottom-12 rounded-full shadow-sm p-3 duration-300 bg-grayLightest hover:shadow-md hover:bg-panel hidden cursor-pointer 
          lg:fixed lg:block"
          onClick={ArrowBtnClickHandler}
        >
          <ArrowIcon className="w-8" />
        </div>
      )}
    </Fragment>
  );
}

export default TopScroll;
