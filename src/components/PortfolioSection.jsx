import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import '../styles.scss';

function PortfolioSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [showEduportCarousel, setShowEduportCarousel] = useState(false);
  const [showNetflixCarousel, setShowNetflixCarousel] = useState(false);
  const [showNextjsAuthenticationCarousel, setShowNextjsAuthenticationCarousel] = useState(false);
  const [showSectechCarousel, setshowSectechCarousel] = useState(false);
  const [showTodoCarousel, setshowTodoCarousel] = useState(false);
  const [showAdminCarousel, setshowAdminCarousel] = useState(false);



  const handleEduportItemClick = () => {
    setShowEduportCarousel(true);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(false);
    setshowSectechCarousel(false);
    setshowTodoCarousel(false);
    setshowAdminCarousel(false);

  };

  const handleNetflixItemClick = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(true);
    setShowNextjsAuthenticationCarousel(false);
    setshowSectechCarousel(false);
    setshowTodoCarousel(false);
    setshowAdminCarousel(false);
  };

  const handleNextjsAuthenticationItemClick = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(true);
    setshowSectechCarousel(false);
    setshowTodoCarousel(false);
    setshowAdminCarousel(false);
  };
  const handleSectechClick = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(false);
    setshowSectechCarousel(true);
    setshowTodoCarousel(false);
    setshowAdminCarousel(false);
  };
  const handleTodoClick = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(false);
    setshowSectechCarousel(false);
    setshowTodoCarousel(true);
    setshowAdminCarousel(false);

  };
  const handleAdminClick = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(false);
    setshowSectechCarousel(false);
    setshowTodoCarousel(false);
    setshowAdminCarousel(true);

  };

  const handleCloseCarousel = () => {
    setShowEduportCarousel(false);
    setShowNetflixCarousel(false);
    setShowNextjsAuthenticationCarousel(false);
    setshowSectechCarousel(false);
    setshowTodoCarousel(false);
    setshowAdminCarousel(false);
  };

  return (
    <div id="portfolioSection" className='custom-container my-xl-5 my-lg-5 my-md-5 my-3 section_space portfolio_Section' data-aos="fade-up">
      <span className="badge rounded-pill section_badge" id='portfolio'>
        <i className="fa-solid fa-grip-vertical"></i>
        &nbsp; PORTFOLIO
      </span>
      <div className='title_container' data-aos="fade-right">
        <h2 className='text-light'>
          Featured <span className='hero_content'>Projects</span>
        </h2>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="portfolio_item col-xl-11 col-lg-11 col-md-11 col-11 mx-xl-0 mx-lg-0 mx-md-0 mx-auto" onClick={handleEduportItemClick}>
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
      <div className="row me-3 justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-center">
        <div className='col-xl-6 col-lg-5 col-md-11 col-11' data-aos="fade-right">
          <div className="portfolio_item col-xl-10 col-lg-10 col-12" onClick={handleNetflixItemClick}>
            <div className="portfolio_item_inner">
              <div id="netflix">
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
        <div className='col-xl-6 col-lg-5 col-md-11 col-11' data-aos="fade-left">
          <div className="portfolio_item col-xl-10 col-lg-10 col-12" onClick={handleNextjsAuthenticationItemClick}>
            <div className="portfolio_item_inner">
              <div id="authentication">
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
      <div className="row" data-aos="fade-up">
        <div className="portfolio_item col-xl-11 col-lg-11 col-md-11 col-11 mx-xl-0 mx-lg-0 mx-md-0 mx-auto" onClick={handleSectechClick}>
          <div className="portfolio_item_inner ">
            <div id='sectech' >
              <img src="./assets/images/sectech-1.png" className='w-100 rounded-4' alt="" />
              <ul className="portfolio_categories">
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
          <h2><a href="https://sectech-clone.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-light'>Sectech UI Clone</a></h2>
        </div>
        {showSectechCarousel && (
          <div className="carousel">
            <span className="close-button" onClick={handleCloseCarousel}>&times;</span>
            <div id="sectechCarousel" className="carousel slide carousel-fade w-75 mx-auto" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./assets/images/sectech-1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/sectech-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/sectech-3.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/sectech-4.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/sectech-5.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/sectech-6.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#sectechCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#sectechCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="row me-3 justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-center">
        <div className='col-xl-6 col-lg-5 col-md-11 col-11' data-aos="fade-right">
          <div className="portfolio_item col-xl-10 col-lg-10 col-12" onClick={handleTodoClick}>
            <div className="portfolio_item_inner">
              <div id="todo">
                <img src="./assets/images/todo-app-1.png" height={450} width={400} className='rounded-4' alt="" />
                <ul className="portfolio_categories">
                  <li>
                    <a href="">React.js</a>
                  </li>
                  <li>
                    <a href="">Firebase</a>
                  </li>
                  <li>
                    <a href="">Bootstrap</a>
                  </li>
                </ul>
              </div>
            </div>
            <h2><a href="https://todo-app-ao73.vercel.app" target="_blank" rel="noopener noreferrer" className='text-light'>TodoApp: React + Firebase</a></h2>
          </div>
          {showTodoCarousel && (
            <div className="carousel">
              <span className="close-button" onClick={handleCloseCarousel}>&times;</span>
              <div id="todoCaoursel" className="carousel slide carousel-fade w-75 mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./assets/images/todo-app-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/todo-app-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/todo-app-3.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#todoCaoursel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#todoCaoursel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='col-xl-6 col-lg-5 col-md-11 col-11' data-aos="fade-left">
          <div className="portfolio_item col-xl-10 col-lg-10 col-12" onClick={handleAdminClick}>
            <div className="portfolio_item_inner">
              <div id="admin">
                <img src="./assets/images/react-admin-1.png" height={450} width={400} className='rounded-4' alt="" />
                <ul className="portfolio_categories">
                  <li>
                    <a href="">React.js</a>
                  </li>
                  <li>
                    <a href="">React Admin</a>
                  </li>
                </ul>
              </div>
            </div>
            <h2><a href="https://react-admin-dashboard-gilt-eta.vercel.app" target="_blank" rel="noopener noreferrer" className='text-light'>React Admin Dashboard</a></h2>
          </div>
          {showAdminCarousel && (
            <div className="carousel">
              <span className="close-button" onClick={handleCloseCarousel}>&times;</span>
              <div id="adminCaoursel" className="carousel slide carousel-fade w-75 mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./assets/images/react-admin-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/react-admin-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/react-admin-3.png" className=" d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/react-admin-4.png" className=" d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./assets/images/react-admin-5.png" className=" d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#adminCaoursel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#adminCaoursel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div >
    </div >
  );
}

export default PortfolioSection;
