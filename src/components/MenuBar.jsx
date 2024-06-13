import React, { useState } from 'react';
import { Link } from 'react-scroll';

function MenuBar() {
  const [selected, setSelected] = useState("home");
  return (
    <div className='d-xl-block d-none'>
      <ul className="menu scroll-nav d-flex">
        <li className="tip">
          <Link to="home" smooth={true} duration={500} onClick={() => setSelected("home")}>
            <i className={`fa-thin fa-house ${selected === "home" ? "selected" : ""}`}></i>
            <span className="tooltiptext">home</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="about" smooth={true} duration={500} onClick={() => setSelected("about")}>
            <i className={`fa-thin fa-user ${selected === "about" ? "selected" : ""}`}></i>
            <span className="tooltiptext">about</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="resume" smooth={true} duration={500} onClick={() => setSelected("resume")}>
            <i className={`fa-thin fa-briefcase ${selected === "resume" ? "selected" : ""}`}></i>
            <span className="tooltiptext">resume</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="services" smooth={true} duration={500} onClick={() => setSelected("services")}>
            <i className={`fa-thin fa-envelope ${selected === "services" ? "selected" : ""}`}></i>
            <span className="tooltiptext">services</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="skills" smooth={true} duration={500} onClick={() => setSelected("skills")}>
            <i className={`fa-thin fa-bars-staggered ${selected === "skills" ? "selected" : ""}`}></i>
            <span className="tooltiptext">skills</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="portfolio" smooth={true} duration={500} onClick={() => setSelected("portfolio")}>
            <i className={`fa-thin fa-shapes ${selected === "portfolio" ? "selected" : ""}`}></i>
            <span className="tooltiptext">portfolio</span>
          </Link>
        </li>
        <li className="tip">
          <Link to="contact" smooth={true} duration={500} onClick={() => setSelected("contact")}>
            <i className={`fa-thin fa-grip-vertical ${selected === "contact" ? "selected" : ""}`}></i>
            <span className="tooltiptext">Contact</span>
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default MenuBar;
