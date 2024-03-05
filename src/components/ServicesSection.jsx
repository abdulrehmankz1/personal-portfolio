import React from 'react'

function ServicesSection() {
  return (
    <div className='custom-container my-xl-5 my-lg-5 my-md-5 my-3 section_space services_section'>
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-bars-staggered"></i>
        &nbsp; Services
      </span>
      <div className='title_container'>
        <h2 className='text-light'>
          My <span className='hero_content'>
            Specializations
          </span>
        </h2>
      </div>
      <div className='services_container'>
        <div className='services_card text-light'>
          <span className='d-flex justify-content-between align-items-center'>
            <p className='title'>
              Website Design
            </p>
            <i class="fa-solid fa-bezier-curve fa-xl"></i>
          </span>
          <p className='sub_title'>
            I created digital products with unique ideas use Figma & Framer
          </p>
        </div>
        <div className='services_card text-light'>
          <span className='d-flex justify-content-between align-items-center'>
            <p className='title'>
              Development
            </p>
            <i class="fa-solid fa-code fa-xl"></i>
          </span>
          <p className='sub_title'>
            I build website go live with Framer, Webflow or WordPress
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection