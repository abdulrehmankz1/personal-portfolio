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
                <a href="">Framer</a>
              </li>
              <li>
                <a href="">WordPress</a>
              </li>
            </ul>
          </div>
          <h2><a href="" className='text-light'>Bureau - Architecture Studio Website</a></h2>
        </div>
        {/* <div className="your-container img-bg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab aliquid odit incidunt odio doloribus nostrum vitae repellendus quas cumque harum, maiores libero excepturi sed alias rerum, nam voluptatum iure!
        </div> */}
      </div>
    </div>
  )
}

export default PortfolioSection