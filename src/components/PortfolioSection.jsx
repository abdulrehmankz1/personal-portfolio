import React from 'react';
import '../styles.scss';

const PortfolioSection = ({ onProjectClick, projectImages }) => {
  return (
    <div id="portfolioSection" className="custom-container my-xl-5 my-lg-5 my-md-5 my-3 section_space portfolio_Section">
      <span className="badge rounded-pill section_badge" id="portfolio">
        <i className="fa-thin fa-grip-vertical"></i>
        &nbsp; PORTFOLIO
      </span>
      <div className="title_container">
        <h2 className="text-light">
          Featured <span className="hero_content">Projects</span>
        </h2>
      </div>
      <div class="row pe-xl-5 pe-lg-5 pe-0" data-aos="fade-left">
        <div class="col portfolio_item" onClick={() => onProjectClick(projectImages.eduport)}>
          <div class="card border-0 portfolio_item_inner">
            <img src="/assets/images/eduport-1.png" style={{ height: '400px' }} class="card-img-top rounded-3" alt="project-img" />
            <ul className="portfolio_categories">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <h2>
            <a href="https://eduport-black.vercel.app" target="_blank" rel="noopener noreferrer" className="text-light">
              Eduport UI
            </a>
          </h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col portfolio_item" data-aos="fade-right" onClick={() => onProjectClick(projectImages.netflix)}>
          <div class="card border-0 portfolio_item_inner">
            <img src="/assets/images/netflix-1.png" style={{ height: '400px' }} class="card-img-top rounded-3" alt="project-img" />
            <ul className="portfolio_categories">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <h2><a href="https://netflix-ui-clone-six.vercel.app/index.html" target="_blank" rel="noopener noreferrer" className="text-light">Netflix UI Clone</a></h2>
        </div>
        <div class="col portfolio_item" data-aos="fade-left" onClick={() => onProjectClick(projectImages.authentication)}>
          <div class="card border-0 portfolio_item_inner">
            <img src="/assets/images/nextjs-authentication-1.png" style={{ height: '400px' }} class="card-img-top rounded-3" alt="project-img" />
            <ul className="portfolio_categories">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <h2><a href="https://nextjs-authentication-project.vercel.app" target="_blank" rel="noopener noreferrer" className="text-light">Next.js Authentication Project</a></h2>
        </div>
      </div>

      <div class="row pe-xl-5 pe-lg-5 pe-0" data-aos="fade-right">
        <div class="col portfolio_item" onClick={() => onProjectClick(projectImages.sectech)}>
          <div class="card border-0 portfolio_item_inner">
            <img src="/assets/images/sectech-1.png" style={{ height: '400px' }} class="card-img-top rounded-3" alt="project-img" />
            <ul className="portfolio_categories">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <h2><a href="https://sectech-clone.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-light'>Sectech UI Clone</a></h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col portfolio_item" data-aos="fade-right" onClick={() => onProjectClick(projectImages.todo)}>
          <div class="card border-0 portfolio_item_inner">
            <img src="/assets/images/todo-app-1.png" style={{ height: '400px' }} class="card-img-top rounded-3" alt="project-img" />
            <ul className="portfolio_categories">
              <li>React.js</li>
              <li>Firebase</li>
            </ul>
          </div>
          <h2><a href="https://todo-app-ao73.vercel.app" target="_blank" rel="noopener noreferrer" className='text-light'>TodoApp: React + Firebase</a></h2>
        </div>
        <div class="col portfolio_item" data-aos="fade-left" onClick={() => onProjectClick(projectImages.admin)}>
          <div class="card border-0 portfolio_item_inner">
            <img src="/assets/images/react-admin-1.png" style={{ height: '400px' }} class="card-img-top rounded-3" alt="project-img" />
            <ul className="portfolio_categories">
              <li>React.js</li>
              <li>React Admin</li>
            </ul>
          </div>
          <h2><a href="https://react-admin-dashboard-gilt-eta.vercel.app" target="_blank" rel="noopener noreferrer" className='text-light'>React Admin Dashboard</a></h2>
        </div>
      </div>
      <div class="row pe-xl-5 pe-lg-5 pe-0" data-aos="fade-left">
        <div class="col portfolio_item" onClick={() => onProjectClick(projectImages.learningSkills)}>
          <div class="card border-0 portfolio_item_inner">
            <img src="/assets/images/learning-skills-1.png" style={{ height: '400px' }} class="card-img-top rounded-3" alt="project-img" />
            <ul className="portfolio_categories">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <h2>
            <a href="https://the-learning-skills.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-light">
           The Learning Skills
            </a>
          </h2>
        </div>
      </div>
      <div class="row pe-xl-5 pe-lg-5 pe-0" data-aos="fade-right">
        <div class="col portfolio_item" onClick={() => onProjectClick(projectImages.boldo)}>
          <div class="card border-0 portfolio_item_inner">
            <img src="/assets/images/boldo-1.png" style={{ height: '400px' }} class="card-img-top rounded-3" alt="project-img" />
            <ul className="portfolio_categories">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <h2>
            <a href="https://boldo-website-template.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-light">
            Boldo Website Template 
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
