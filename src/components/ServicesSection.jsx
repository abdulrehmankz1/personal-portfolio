import React, { useEffect } from "react";
import AOS from "aos";
import "../styles.scss";

function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className="custom-container my-xl-5 my-lg-5 my-md-5 my-3 section_space services_section"
      data-aos="fade-up"
      id="services"
    >
      <span class="badge rounded-pill section_badge">
        <i class="fa-thin fa-bars-staggered"></i>
        &nbsp; Services
      </span>
      <div className="title_container" data-aos="fade-up">
        <h2 className="text-light">
          My <span className="hero_content">Specializations</span>
        </h2>
      </div>
      <div className="services_container">
        <div className="services_card text-light" data-aos="fade-up">
          <span className="d-flex justify-content-between align-items-center">
            <p className="title">Website Design</p>
            <i class="fa-thin fa-bezier-curve fa-xl"></i>
          </span>
          <p className="sub_title">
            I create innovative digital designs using Figma, blending expertise
            in HTML, CSS, JavaScript, React.js, and Next.js to craft visually
            compelling and functional interfaces.{" "}
          </p>
        </div>
        <div className="services_card text-light" data-aos="fade-up">
          <span className="d-flex justify-content-between align-items-center">
            <p className="title">Development</p>
            <i class="fa-thin fa-code fa-xl"></i>
          </span>
          <p className="sub_title">
            I build and deploy responsive websites, leveraging HTML, CSS,
            JavaScript, React.js, and Next.js to develop high-performance
            applications with tools like Framer, Webflow, and WordPress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
