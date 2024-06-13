import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function MenuBar() {
  const [selected, setSelected] = useState("home");

  useEffect(() => {
    // Add scroll event listener to update selected item
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'services', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200; // Adjusted offset for better UX

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setSelected(section);
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='d-xl-block d-none'>
      <ul className="menu scroll-nav d-flex">
        <li className="tip">
          <Link to="home" smooth={true} duration={500} spy={true} offset={-100} activeClass="selected">
            <i className={`fa-thin fa-house ${selected === "home" ? "selected" : ""}`}></i>
            <span className="tooltiptext">Home</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="about" smooth={true} duration={500} spy={true} offset={-100} activeClass="selected">
            <i className={`fa-thin fa-user ${selected === "about" ? "selected" : ""}`}></i>
            <span className="tooltiptext">About</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="resume" smooth={true} duration={500} spy={true} offset={-100} activeClass="selected">
            <i className={`fa-thin fa-briefcase ${selected === "resume" ? "selected" : ""}`}></i>
            <span className="tooltiptext">Resume</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="services" smooth={true} duration={500} spy={true} offset={-100} activeClass="selected">
            <i className={`fa-thin fa-envelope ${selected === "services" ? "selected" : ""}`}></i>
            <span className="tooltiptext">Services</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="skills" smooth={true} duration={500} spy={true} offset={-100} activeClass="selected">
            <i className={`fa-thin fa-bars-staggered ${selected === "skills" ? "selected" : ""}`}></i>
            <span className="tooltiptext">Skills</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="portfolio" smooth={true} duration={500} spy={true} offset={-100} activeClass="selected">
            <i className={`fa-thin fa-shapes ${selected === "portfolio" ? "selected" : ""}`}></i>
            <span className="tooltiptext">Portfolio</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="contact" smooth={true} duration={500} spy={true} offset={-100} activeClass="selected">
            <i className={`fa-thin fa-grip-vertical ${selected === "contact" ? "selected" : ""}`}></i>
            <span className="tooltiptext">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
