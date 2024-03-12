import React, { useEffect } from 'react'
import AOS from 'aos';
import '../styles.scss';

function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='custom-container my-xl-4 my-lg-5 my-md-5 my-3 section_space pt-xl-4' data-aos="fade-up" id='about'>
      <span class="badge rounded-pill section_badge" data-aos="fade-up">
        <i class="fa-solid fa-user"></i>
        &nbsp; ABOUT
      </span>
      <div className='title_container' data-aos="fade-up">
        <h2 className='text-light'>
          Every great design begin with
          an even <span className='hero_content'>
            better story
          </span>
        </h2>
      </div>
      <div className='subHeading_container' data-aos="fade-up">
        <p className='sub_heading mb-0'>
          Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
        </p>
      </div>
    </div>
  )
}

export default AboutSection