import React, { useState } from 'react';

function PortfolioSection() {
  const [showEduportCarousel, setShowEduportCarousel] = useState(false);
  const [showNetflixCarousel, setShowNetflixCarousel] = useState(false);
  const [showNextjsAuthenticationCarousel, setShowNextjsAuthenticationCarousel] = useState(false);

  const handleEduportItemClick = () => {
    setShowEduportCarousel(true);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(false);
  };

  const handleNetflixItemClick = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(true);
    setShowNextjsAuthenticationCarousel(false);
  };

  const handleNextjsAuthenticationItemClick = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(false);
  };

  return (
    <div id="portfolioSection" className='custom-container my-5 section_space portfolio_Section'>
      <span className="badge rounded-pill section_badge">
        <i className="fa-solid fa-grip-vertical"></i>
        &nbsp; PORTFOLIO
      </span>
      <div className='w-75'>
        <h2 className='text-light'>
          Featured <span className='hero_content'>Projects</span>
        </h2>
      </div>
      <div className="row">
        <div className="portfolio_item col-11" onClick={handleEduportItemClick}>
          <div className="portfolio_item_inner">
            <div id='eduport' className="eduport">
              <img src="./assets/images/eduport-1.png" className='w-100 rounded-4' alt="" />
              <ul className="portfolio_categories">
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
          </div>
          <h2><a href="https://eduport-black.vercel.app" target="_blank" rel="noopener noreferrer" className='text-light'>Bureau - Architecture Studio Website</a></h2>
        </div>
        {showEduportCarousel && (
          <div className="carousel">
            <span className="close-button" onClick={handleCloseCarousel}>&times;</span>
            <div id="eduportCarousel" className="carousel slide carousel-fade w-75 mx-auto" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./assets/images/eduport-1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/eduport-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/eduport-3.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/eduport-4.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#eduportCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#eduportCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="row me-3">
        <div className='col-6'>
          <div className="portfolio_item col-10" onClick={handleNetflixItemClick}>
            <div className="portfolio_item_inner">
              <div id="netflix" className="">
                <img src="./assets/images/netflix-1.png" height={450} width={400} className='rounded-4' alt="" />
                <ul className="portfolio_categories">
                  <li>
                    <a href="">HTML</a>
                  </li>
                  <li>
                    <a href="">CSS</a>
                  </li>
                </ul>
              </div>
            </div>
            <h2><a href="https://netflix-ui-clone-six.vercel.app/index.html" target="_blank" rel="noopener noreferrer" className='text-light'>Netflix UI Clone</a></h2>
          </div>
          {showNetflixCarousel && (
            <div className="carousel">
              <span className="close-button" onClick={handleCloseCarousel}>&times;</span>
              <div id="netflixCaoursel" className="carousel slide carousel-fade w-75 mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./assets/images/netflix-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/netflix-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/netflix-3.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/netflix-4.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/netflix-5.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/netflix-6.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/netflix-7.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/netflix-8.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/netflix-9.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#netflixCaoursel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#netflixCaoursel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='col-6'>
          <div className="portfolio_item col-10" onClick={handleNextjsAuthenticationItemClick}>
            <div className="portfolio_item_inner">
              <div id="authentication" className="">
                <img src="./assets/images/nextjs-authentication-1.png" height={450} width={400} className='rounded-4' alt="" />
                <ul className="portfolio_categories">
                  <li>
                    <a href="">Next.js</a>
                  </li>
                  <li>
                    <a href="">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
            </div>
            <h2><a href="https://nextjs-authentication-project.vercel.app" target="_blank" rel="noopener noreferrer" className='text-light'>Next.js Authentication Project</a></h2>
          </div>
          {showNextjsAuthenticationCarousel && (
            <div className="carousel">
              <span className="close-button" onClick={handleCloseCarousel}>&times;</span>
              <div id="authenticationCaoursel" className="carousel slide carousel-fade w-75 mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./assets/images/nextjs-authentication-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/nextjs-authentication-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/nextjs-authentication-3.png" className=" d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#authenticationCaoursel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#authenticationCaoursel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="portfolio_item col-11" onClick={handleEduportItemClick}>
          <div className="portfolio_item_inner">
            <div id='eduport' className="eduport">
              <img src="./assets/images/eduport-1.png" className='w-100 rounded-4' alt="" />
              <ul className="portfolio_categories">
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
          </div>
          <h2><a href="https://eduport-black.vercel.app" target="_blank" rel="noopener noreferrer" className='text-light'>Bureau - Architecture Studio Website</a></h2>
        </div>
        {showEduportCarousel && (
          <div className="carousel">
            <span className="close-button" onClick={handleCloseCarousel}>&times;</span>
            <div id="eduportCarousel" className="carousel slide carousel-fade w-75 mx-auto" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./assets/images/eduport-1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/eduport-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/eduport-3.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/eduport-4.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#eduportCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#eduportCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioSection;
