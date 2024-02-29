import React from 'react'

function ResumeSection() {
  return (
    <div className='custom-container my-5 section_space resume_section'>
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-briefcase"></i>
        &nbsp; RESUME
      </span>
      <div className='w-75'>
        <h2 className='text-light'>
          Education & <span className='hero_content'>
            Experience
          </span>
        </h2>
      </div>
      <div class="timeline">
        <ul>
          <li>
            <div class="timeline-content">
              <span class="date">2020 - Present</span>
              <h2>Front-End Developer</h2>
              <p>Envato Market</p>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <span class="date">2020 - Present</span>
              <h2>Front-End Developer</h2>
              <p>Envato Market</p>
            </div>
          </li>
          <li>
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