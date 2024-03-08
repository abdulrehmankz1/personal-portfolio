import React, { useEffect } from 'react'
import AOS from 'aos';
import '../styles.scss';

function IntroSection() {

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolioSection');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='custom-container mb-5 mt-xl-0 py-md-0 py-2 mt-5' id='home'>
      <div className='d-flex justify-content-between'>
        <span class="badge rounded-pill section_badge" data-aos="fade-up">
          <i class="fa-solid fa-house"></i>
          &nbsp; INTRODUCE
        </span>
        <span className='me-5 pe-5'>
          <button class="btn icon_menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span></span>
            <span></span>

          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              ...
            </div>
          </div>
        </span>
      </div>
      <h1 className='text-light' data-aos="fade-up">
        Say Hi from <span className='hero_content'>
          Abdul Rehman
        </span>, FrontEnd Developer
      </h1>
      <div style={{ maxWidth: '480px' }} data-aos="fade-up">
        <p className='sub_heading' data-aos="fade-up">
          I design and code beautifully simple things and i love what i do. Just simple like that!
        </p>
      </div>
      <div className='arrow_down ms-auto' onClick={scrollToPortfolio}>
        <img src="./assets/images/round-text.png" alt="round-text" />
        <i class="fa-solid fa-arrow-down-long fa-2x"></i>
      </div>
    </div>
  )
}

export default IntroSection