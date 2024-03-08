import React, { useEffect } from 'react'
import AOS from 'aos';
import '../styles.scss';

function ResumeSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='custom-container my-xl-5 my-lg-5 my-md-5 my-3 section_space resume_section' data-aos="fade-up" id='resume'>
      <span class="badge rounded-pill section_badge" data-aos="fade-up">
        <i class="fa-solid fa-briefcase"></i>
        &nbsp; RESUME
      </span>
      <div className='title_container' data-aos="fade-up">
        <h2 className='text-light'>
          Education & <span className='hero_content'>
            Experience
          </span>
        </h2>
      </div>
      <div class="timeline">
        <ul>
          <li data-aos="fade-left">
            <div class="timeline-content">
              <span class="date">2020 - Present</span>
              <h2>Front-End Developer</h2>
              <p>Envato Market</p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline-content">
              <span class="date">2020 - Present</span>
              <h2>Front-End Developer</h2>
              <p>Envato Market</p>
            </div>
          </li>
          <li data-aos="fade-left">
            <div class="timeline-content pb-2">
              <span class="date">2020 - Present</span>
              <h2>Front-End Developer</h2>
              <p>Envato Market</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ResumeSection