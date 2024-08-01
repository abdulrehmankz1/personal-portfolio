import React, { useEffect } from "react";
import AOS from "aos";
import "../styles.scss";

function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className="custom-container my-xl-4 my-lg-5 my-md-5 my-3 section_space pt-xl-4"
      data-aos="fade-up"
      id="about"
    >
      <span class="badge rounded-pill section_badge" data-aos="fade-up">
        <i class="fa-thin fa-user"></i>
        &nbsp; ABOUT
      </span>
      <div className="title_container" data-aos="fade-up">
        <h2 className="text-light">
          Every exceptional design starts with a
          <span className="hero_content"> compelling story.</span>
        </h2>
      </div>
      <div className="subHeading_container" data-aos="fade-up">
        <p className="sub_heading mb-0">
          With 2 years of professional experience in developing responsive web
          applications, I bring a deep expertise in crafting intuitive user
          interfaces utilizing HTML, CSS, JavaScript, React, Next.js, and
          TypeScript. My technical repertoire extends to Bootstrap, Tailwind
          CSS, SCSS, and Firebase. I excel in optimizing application performance
          and delivering exceptional user experiences through innovative design
          strategies. During my tenure from August 2023 to November 2023, I
          collaborated closely with cross-disciplinary teams, demonstrating a
          strong commitment to ongoing learning and advancing industry best
          practices.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
