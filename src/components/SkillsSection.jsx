import React, { useEffect } from 'react'
import AOS from 'aos';
import '../styles.scss';

function SkillsSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='custom-container my-xl-5 my-lg-5 my-md-5 my-3 section_space skills_section' data-aos="fade-up">
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-shapes"></i>
        &nbsp; MY SKILLS
      </span>
      <div className='title_container'>
        <h2 className='text-light' data-aos="fade-up">
          My <span className='hero_content'>
            Advantages
          </span>
        </h2>
        <div className="row skills text-center">
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-right">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/html.png" height={65} alt="Html" />
                <h1 className="percent">50%</h1>
              </div>
              <p className="name text-light">HTML</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-bottom">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/css.png" height={65} alt="Css" />
                <h1 className="percent">40%</h1>
              </div>
              <p className="name text-light">CSS</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-up">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/javaScript.png" height={65} alt="JavaScript" />
                <h1 className="percent">25%</h1>
              </div>
              <p className="name text-light">JavaScript</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-left">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/bootstrap.png" height={65} width={65} alt="Bootstrap" />
                <h1 className="percent">50%</h1>
              </div>
              <p className="name text-light">BootStrap</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-right">
            <div className='skill'>
              <div className='skill_inner'>
                <i class="fa-brands fa-github fa-4x text-light"></i>
                <h1 className="percent">40%</h1>
              </div>
              <p className="name text-light">GitHub</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-bottom">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/react.png" height={65} alt="React" />
                <h1 className="percent">30%</h1>
              </div>
              <p className="name text-light">React.Js</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-up">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/firebase.png" height={65} alt="Firebase" />
                <h1 className="percent">20%</h1>
              </div>
              <p className="name text-light">Firebase</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-left">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/nextJs.jpeg" height={65} alt="NextJs" />
                <h1 className="percent">25%</h1>
              </div>
              <p className="name text-light">Next.Js</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-right">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/saas.png" height={65} width={80} alt="Saas" />
                <h1 className="percent">30%</h1>
              </div>
              <p className="name text-light">Saas</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-bottom">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/tailwindCss.png" height={65} width={65} alt="TailwindCss" />
                <h1 className="percent">45%</h1>
              </div>
              <p className="name text-light">Tailwind CSS</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-up">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/react.png" height={65} alt="React Native" />
                <h1 className="percent">20%</h1>
              </div>
              <p className="name text-light">React Native</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-left">
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/typeScript.png" height={65} width={65} alt="TypeScript" />
                <h1 className="percent">15%</h1>
              </div>
              <p className="name text-light">TypeScript</p>
            </div>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6' data-aos="fade-right">
            <div className='skill_inner'>
              <img src="./assets/images/figma.png" alt="Figma" />
              <h1 className="percent">25%</h1>
            </div>
            <p className="name text-light">Figma</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SkillsSection