import React, { useEffect } from "react";
import AOS from "aos";
import "../styles.scss";

function ResumeSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className="custom-container my-xl-5 my-lg-5 my-md-5 my-3 section_space resume_section"
      data-aos="fade-up"
      id="resume"
    >
      <span class="badge rounded-pill section_badge" data-aos="fade-up">
        <i class="fa-thin fa-briefcase"></i>
        &nbsp; RESUME
      </span>
      <div className="title_container" data-aos="fade-up">
        <h2 className="text-light">
          Experience,<span className="hero_content"> Certifications</span> &
          <span className="hero_content"> Education.</span>
        </h2>
      </div>
      <div class="timeline">
        <ul>
          <li data-aos="fade-left">
            <div class="timeline-content">
              <span class="date">August 2023 - November 2023</span>
              <h2>Web Developer</h2>
              <p>Teciz Everything Karachi, Pakistan</p>
              <p>
                Developed responsive web applications using HTML, CSS,
                JavaScript, React, Next.js, and TypeScript. Collaborated closely
                with designers and backend developers to deliver user-centric
                solutions. Utilized Git and GitHub for version control and
                project management.
              </p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline-content">
              <h2>HTML, CSS, and JavaScript</h2>
              <p>Expertizo</p>
              <p>
                Covers essential and advanced concepts in HTML, CSS, and
                JavaScript for web development.
              </p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline-content">
              <h2>CCO Course</h2>
              <p>Saylani Mass I.T. Training</p>
              <p>
                Provides foundational skills in computer operations, including
                hardware, software, and troubleshooting.
              </p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline-content">
              <h2>Introduction to HTML and Introduction to CSS</h2>
              <p>SoloLearn</p>
              <p>
                Offers basic knowledge in HTML and CSS for creating and styling
                web pages.
              </p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline-content">
              <span class="date">2022 - 2023</span>
              <h2>FA Part 1</h2>
              <p>Tanzeem ul Madaris</p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline-content pb-2">
              <span class="date">2017 - 2018</span>
              <h2>Matriculation</h2>
              <p>Karachi Board</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResumeSection;
