import React from 'react'

function SkillsSection() {
  return (
    <div className='custom-container my-5 section_space skills_section'>
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-shapes"></i>
        &nbsp; MY SKILLS
      </span>
      <div className='w-75'>
        <h2 className='text-light'>
          My <span className='hero_content'>
            Advantages
          </span>
        </h2>
        <div className="row skills text-center">
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/html.png" height={65} alt="Html" />
                <h1 className="percent">100%</h1>
              </div>
              <p className="name text-light">HTML</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/css.png" height={65} alt="Css" />
                <h1 className="percent">90%</h1>
              </div>
              <p className="name text-light">CSS</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/javaScript.png" height={65} alt="JavaScript" />
                <h1 className="percent">65%</h1>
              </div>
              <p className="name text-light">JavaScript</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/bootstrap.png" height={65} width={65} alt="Bootstrap" />
                <h1 className="percent">90%</h1>
              </div>
              <p className="name text-light">BootStrap</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <i class="fa-brands fa-github fa-4x text-light"></i>
                <h1 className="percent">80%</h1>
              </div>
              <p className="name text-light">GitHub</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/react.png" height={65} alt="React" />
                <h1 className="percent">60%</h1>
              </div>
              <p className="name text-light">React.Js</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/firebase.png" height={65} alt="Firebase" />
                <h1 className="percent">40%</h1>
              </div>
              <p className="name text-light">Firebase</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/nextJs.jpeg" height={65} alt="NextJs" />
                <h1 className="percent">55%</h1>
              </div>
              <p className="name text-light">Next.Js</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/saas.png" height={65} width={80} alt="Saas" />
                <h1 className="percent">80%</h1>
              </div>
              <p className="name text-light">Saas</p>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/tailwindCss.png" height={65} width={65} alt="TailwindCss" />
                <h1 className="percent">85%</h1>
              </div>
              <p className="name text-light">Tailwind CSS</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/react.png" height={65} alt="React Native" />
                <h1 className="percent">40%</h1>
              </div>
              <p className="name text-light">React Native</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/typeScript.png" height={65} width={65} alt="TypeScript" />
                <h1 className="percent">50%</h1>
              </div>
              <p className="name text-light">TypeScript</p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='skill'>
              <div className='skill_inner'>
                <img src="./assets/images/figma.png" alt="Figma" />
                <h1 className="percent">50%</h1>
              </div>
              <p className="name text-light">Figma</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SkillsSection