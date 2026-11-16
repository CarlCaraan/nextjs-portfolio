import React from "react";
import Image from "next/image";

// Images
import cert1 from "../public/images/experience/cert1.jpg";
import cert2 from "../public/images/experience/cert2.png";
import cert3 from "../public/images/experience/cert3.jpg";
import cert4 from "../public/images/experience/cert4.jpg";
import cert5 from "../public/images/experience/cert5.jpg";
import cert6 from "../public/images/experience/cert6.png";
import cert7 from "../public/images/experience/cert7.jpg";
import cert8 from "../public/images/experience/cert8.png";
import cert9 from "../public/images/experience/cert9.jpg";
import cert10 from "../public/images/experience/cert10.jpg";
import cert11 from "../public/images/experience/cert11.png";

const certImages = [
  { id: 1, src: cert1 },
  { id: 2, src: cert2 },
  { id: 3, src: cert3 },
  { id: 4, src: cert4 },
  { id: 5, src: cert5 },
  { id: 6, src: cert6 },
  { id: 7, src: cert7 },
  { id: 8, src: cert8 },
  { id: 9, src: cert9 },
  { id: 10, src: cert10 },
  { id: 11, src: cert11 },
];

const sortedCertImages = certImages.sort((a, b) => b.id - a.id);

function ExperienceSection() {
  return (
    <section
      className="scroll-mt-24 mb-12 sm:mb-24 xl:mb-44 pt-12 lg:pt-20"
      id="experience"
    >
      <div className="section-container">
        {/* Start Heading */}
        <div className="mt-12 lg:mt-24">
          <h2 className="big-heading-text">Experience</h2>
        </div>
        {/* End Heading */}

        {/* Start Education Section */}
        <div className="mt-20 md:mt-32">
          <div className="socket"></div>
          <div className="mt-12 md:mt-16 lg:mt-24">
            <h3 className="experience-heading">Education & Experience</h3>

            {/* Start Flex Container */}
            {/* Row 1 */}
            <div
              className="flex flex-col mt-12 gap-4 space-y-12 md:space-y-0 md:flex-row"
            >
              <div className="education-flex-item">
                <div className="text-base text-grayLightest">2023 - 2027</div>
                <div>
                  <h4 className="education-title">Full-Stack .NET Developer</h4>
                  <p className="education-subtitle">
                    Philsoft Technologies Group, Inc.
                  </p>
                </div>
              </div>

              <div className="education-flex-item">
                <div className="text-base text-grayLightest">2022 - 2023</div>
                <div>
                  <h4 className="education-title">College Graduate (BSIT)</h4>
                  <p className="education-subtitle">
                    Laguna State Polytechnic University
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="education-title">
                    Extension and Training Services (OJT)
                  </h4>
                  <p className="education-subtitle">
                    Laguna State Polytechnic University
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="education-title">SDO Laguna (Capstone)</h4>
                  <p className="education-subtitle">
                    Laguna State Polytechnic University
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              className="flex flex-col mt-12 gap-4 space-y-12 md:space-y-0 md:flex-row"
            >
              <div className="education-flex-item">
                <div className="text-base text-grayLightest">2021 - 2022</div>
                <div>
                  <h4 className="education-title">Freelancer</h4>
                  <p className="education-subtitle">
                    Matrix Software Solutions PH
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="education-title">College Dean&#39;s Lister</h4>
                  <p className="education-subtitle">
                    Laguna State Polytechnic University
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="education-title">Major in Web Development</h4>
                  <p className="education-subtitle">
                    Laguna State Polytechnic University
                  </p>
                </div>
              </div>

              <div className="education-flex-item">
                <div className="text-base text-grayLightest">2017 - 2019</div>
                <div>
                  <h4 className="education-title">Senior Highschool</h4>
                  <p className="education-subtitle">Santa Maria Academy</p>
                </div>
                <div className="mt-4">
                  <h4 className="education-title">
                    Biometrics Arduino <small>(Thesis)</small>
                  </h4>
                  <p className="education-subtitle">Santa Maria Academy</p>
                </div>
              </div>

              <div className="education-flex-item">
                <div className="text-base text-grayLightest">2013 - 2017</div>
                <div>
                  <h4 className="education-title">Junior Highschool</h4>
                  <p className="education-subtitle">Santa Maria Academy</p>
                </div>
                <div className="mt-4">
                  <h4 className="education-title">NCAE Topnotcher</h4>
                  <p className="education-subtitle">Santa Maria Academy</p>
                </div>
              </div>
            </div>
            {/* End Flex Container */}
          </div>
        </div>
        {/* End Education Section */}

        {/* Start Certification Section */}
        <div className="mt-20 md:mt-32">
          <div className="socket"></div>
          <div className="mt-12 md:mt-16 lg:mt-24">
            <h3 className="experience-heading">Certifications</h3>
            <h4
              className="text-grayLightest text-center mt-6 text-sm sm:text-base"
            >
              Earned from different online courses out there.
            </h4>
            {/* Start Grid Container */}
            <div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 xl:mt-24"
            >
              {sortedCertImages &&
                sortedCertImages.map((certImage) => {
                  return (
                    <div
                      key={certImage.id}
                      className="group experience-cert-box"
                      data-aos="zoom-in"
                    >
                      <Image
                        className="experience-image"
                        src={certImage.src}
                        alt={`Certification ${certImage.id}`}
                      />
                    </div>
                  );
                })}
            </div>
            {/* End Grid Container */}
          </div>
        </div>
        {/* End Certification Section */}
      </div>
    </section>
  );
}

export default ExperienceSection;
