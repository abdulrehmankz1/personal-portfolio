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
      <div>
        <div className='timeline_card'>
          <div className='dots'></div>
          <div className='ms-5 ps-3'>
            <span className='date '>
              2020 - Present
            </span>
            <h2 className='title mb-0'>
              Front-End Developer
            </h2>
            <p className='sub_title '>
              Envato Market
            </p>
          </div>
        </div>
        <div className='timeline_card'>
          <div className='dots'></div>
          <div className='ms-5 ps-3'>
            <span className='date '>
              2020 - Present
            </span>
            <h2 className='title mb-0'>
              Front-End Developer
            </h2>
            <p className='sub_title '>
              Envato Market
            </p>
          </div>
        </div>  <div className='timeline_card'>
          <div className='dots'></div>
          <div className='ms-5 ps-3'>
            <span className='date '>
              2020 - Present
            </span>
            <h2 className='title mb-0'>
              Front-End Developer
            </h2>
            <p className='sub_title '>
              Envato Market
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeSection