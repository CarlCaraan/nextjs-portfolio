import React from "react";

function QuoteSection() {
  return (
    <section className="bg-white py-16 lg:py-24 dark:bg-black" id="quote">
      {/* Start Container */}
      <div className="section-container">
        {/* Horizontal Line */}
        <div className="socket"></div>

        <blockquote
          className="text-2xl font-serif text-black text-center mt-12 
          md:text-3xl md:leading-relaxed 
          lg:leading-relaxed lg:text-5xl lg:mt-24 
          xl:px-24
          dark:text-white"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          &quot;With great technology comes great innovation.&quot;
        </blockquote>
        <h3 className="mt-16 text-center text-xl lg:text-3xl font-sansSB text-black dark:text-white">
          Claude
        </h3>
      </div>
      {/* End Container */}
    </section>
  );
}

export default QuoteSection;
