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
    <div className='custom-container mb-5 mt-xl-0 mt-5'>
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-house"></i>
        &nbsp; INTRODUCE
      </span>
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