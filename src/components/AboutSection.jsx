import React from 'react'

function AboutSection() {
  return (
    <div className='custom-container my-5 section_space mx-xl-auto mx-lg-auto mx-md-auto'>
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-user"></i>
        &nbsp; ABOUT
      </span>
      <div className='title_container'>
        <h2 className='text-light'>
          Every great design begin with
          an even <span className='hero_content'>
            better story
          </span>
        </h2>
      </div>
      <div className='subHeading_container'>
        <p className='sub_heading mb-0'>
          Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
        </p>
      </div>
    </div>
  )
}

export default AboutSection