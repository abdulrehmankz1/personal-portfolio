import React, { useEffect } from 'react'
import AOS from 'aos';
import '../styles.scss';
import { Link } from 'react-scroll';


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
            <div class="offcanvas-header d-flex justify-content-between align-items-center text-center">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
              <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-rectangle-xmark fa-xl"></i>
              </button>
            </div>
            <div class="offcanvas-body">
              <div className='d-xl-block'>
                <ul className="scroll-nav d-flex">
                  <li>
                    <Link to="home" smooth={true} duration={500}>
                      <i className="fa-solid fa-house fa-sm"></i>
                      <span className="tooltiptext">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="about" smooth={true} duration={500}>
                      <i className="fa-solid fa-user fa-sm"></i>
                      <span className="tooltiptext">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="resume" smooth={true} duration={500}>
                      <i className="fa-solid fa-briefcase fa-sm"></i>
                      <span className="tooltiptext">Resume</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="services" smooth={true} duration={500}>
                      <i className="fa-solid fa-envelope fa-sm"></i>
                      <span className="tooltiptext">Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="skills" smooth={true} duration={500}>
                      <i className="fa-solid fa-bars-staggered fa-sm"></i>
                      <span className="tooltiptext">Skills</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="portfolio" smooth={true} duration={500}>
                      <i className="fa-solid fa-shapes fa-sm"></i>
                      <span className="tooltiptext">Portfolio</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" smooth={true} duration={500}>
                      <i className="fa-solid fa-grip-vertical fa-sm"></i>
                      <span className="tooltiptext">Contact</span>
                    </Link>
                  </li>
                </ul>
                <div className="social">
                  <h6>
                    Social
                  </h6>
                  <ul className='pt-1'>
                    <li>
                      <a href="https://www.linkedin.com/in/abdul-rehman-khanzada-661757237/">
                        <i className="fa-brands fa-linkedin fa-md"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/abdulrehmankz1">
                        <i className="fa-brands fa-github fa-md"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.upwork.com/freelancers/~01ac9dfd5b35dc7b35?viewMode=1">
                        <i className="fa-brands fa-upwork fa-md"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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