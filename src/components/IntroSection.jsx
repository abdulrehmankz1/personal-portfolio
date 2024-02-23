import React from 'react'

function IntroSection() {
  return (
    <div className='custom-container mb-5 mt-xl-0 mt-5'>
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-house"></i>
        &nbsp; INTRODUCE
      </span>
      <h1 className='text-light'>
        Say Hi from <span className='hero_content'>
          Abdul Rehman
        </span>, FrontEnd Developer
      </h1>
      <p className='sub_heading' style={{ maxWidth: '480px' }}>
        I design and code beautifully simple things and i love what i do. Just simple like that!
      </p>
      <a href="#" className='arrow_down ms-auto'>
        <img src="./assets/images/round-text.png" alt="" />
        <i class="fa-solid fa-arrow-down-long fa-2x"></i>
      </a>

    </div>
  )
}

export default IntroSection