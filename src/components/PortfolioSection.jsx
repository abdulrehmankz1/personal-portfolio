import React from 'react'

function PortfolioSection() {
  return (
    <div className='custom-container my-5 section_space portfolio_Section'>
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-grip-vertical"></i>
        &nbsp; PORTFOLIO
      </span>
      <div className='w-75'>
        <h2 className='text-light'>
          Featured <span className='hero_content'>
            Projects
          </span>
        </h2>
      </div>
    </div>
  )
}

export default PortfolioSection