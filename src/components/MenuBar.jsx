import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

function MenuBar() {
  return (
    <div className='d-xl-block d-none'>
      <ul className="menu scroll-nav d-flex">
        <li className="tip">
          <Link to="home" smooth={true} duration={500}>
            <i className="fa-solid fa-house"></i>
            <span className="tooltiptext">home</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="about" smooth={true} duration={500}>
            <i className="fa-solid fa-user"></i>
            <span className="tooltiptext">about</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="resume" smooth={true} duration={500}>
            <i className="fa-solid fa-briefcase"></i>
            <span className="tooltiptext">resume</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="services" smooth={true} duration={500}>
            <i className="fa-solid fa-envelope"></i>
            <span className="tooltiptext">services</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="skills" smooth={true} duration={500}>
            <i className="fa-solid fa-bars-staggered"></i>
            <span className="tooltiptext">skills</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="portfolio" smooth={true} duration={500}>
            <i className="fa-solid fa-shapes"></i>
            <span className="tooltiptext">portfolio</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="contact" smooth={true} duration={500}>
            <i className="fa-solid fa-grip-vertical"></i>
            <span className="tooltiptext">Contact</span>
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default MenuBar;
