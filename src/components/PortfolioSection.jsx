import React from 'react'

function PortfolioSection() {
  return (
    <div id="portfolioSection" className='custom-container my-5 section_space portfolio_Section'>
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

      <div className="row">
        <div class="portfolio_item col-11 ">
          <div class="portfolio_item_inner ">

            <ul class="portfolio_categories">
              <li>
                <a href="">Figma</a>
              </li>
              <li>
                <a href="">HTML</a>
              </li>
              <li>
                <a href="">CSS</a>
              </li>
              <li>
                <a href="">Bootstrap</a>
              </li>
            </ul>
          </div>
          <h2><a href="https://eduport-black.vercel.app" target="_blank" rel="noopener noreferrer" className='text-light'>Bureau - Architecture Studio Website</a></h2>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection