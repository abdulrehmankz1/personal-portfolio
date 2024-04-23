// import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';

// function MenuBar() {
//   return (
//     <div className='d-xl-block d-none'>
//       <ul className="menu scroll-nav d-flex">
//         <li className={`tip ${selectedItem === 'home' ? 'selected' : ''}`}>
//           <Link to="home" smooth={true} duration={500}>
//             <i className="fa-thin fa-house"></i>
//             <span className="tooltiptext">home</span>
//           </Link>
//         </li>
//         <li className="tip">
//           <Link to="about" smooth={true} duration={500}>
//             <i className="fa-thin fa-user"></i>
//             <span className="tooltiptext">about</span>
//           </Link>
//         </li>
//         <li className="tip">
//           <Link to="resume" smooth={true} duration={500}>
//             <i className="fa-thin fa-briefcase"></i>
//             <span className="tooltiptext">resume</span>
//           </Link>
//         </li>
//         <li className="tip">
//           <Link to="services" smooth={true} duration={500}>
//             <i className="fa-thin fa-envelope"></i>
//             <span className="tooltiptext">services</span>
//           </Link>
//         </li>
//         <li className="tip">
//           <Link to="skills" smooth={true} duration={500}>
//             <i className="fa-thin fa-bars-staggered"></i>
//             <span className="tooltiptext">skills</span>
//           </Link>
//         </li>
//         <li className="tip">
//           <Link to="portfolio" smooth={true} duration={500}>
//             <i className="fa-thin fa-shapes"></i>
//             <span className="tooltiptext">portfolio</span>
//           </Link>
//         </li>
//         <li className="tip">
//           <Link to="contact" smooth={true} duration={500}>
//             <i className="fa-thin fa-grip-vertical"></i>
//             <span className="tooltiptext">Contact</span>
//           </Link>
//         </li>
//       </ul>

//     </div>
//   );
// }

// export default MenuBar;
import React, { useState } from 'react';
import { Link } from 'react-scroll';

function MenuBar() {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div className='d-xl-block d-none'>
      <ul className="menu scroll-nav d-flex">
        <li className={`tip ${selectedItem === 'home' ? 'selected' : ''}`}>
          <Link to="home" smooth={true} duration={500} onClick={() => handleItemClick('home')}>
            <i className="fa-thin fa-house"></i>
            <span className="tooltiptext">Home</span>
          </Link>
        </li>
        <li className={`tip ${selectedItem === 'about' ? 'selected' : ''}`}>
          <Link to="about" smooth={true} duration={500} onClick={() => handleItemClick('about')}>
            <i className="fa-thin fa-user"></i>
            <span className="tooltiptext">About</span>
          </Link>
        </li>
        <li className={`tip ${selectedItem === 'resume' ? 'selected' : ''}`}>
          <Link to="resume" smooth={true} duration={500} onClick={() => handleItemClick('resume')}>
            <i className="fa-thin fa-briefcase"></i>
            <span className="tooltiptext">Resume</span>
          </Link>
        </li>
        <li className={`tip ${selectedItem === 'services' ? 'selected' : ''}`}>
          <Link to="services" smooth={true} duration={500} onClick={() => handleItemClick('services')}>
            <i className="fa-thin fa-envelope"></i>
            <span className="tooltiptext">Services</span>
          </Link>
        </li>
        <li className={`tip ${selectedItem === 'skills' ? 'selected' : ''}`}>
          <Link to="skills" smooth={true} duration={500} onClick={() => handleItemClick('skills')}>
            <i className="fa-thin fa-bars-staggered"></i>
            <span className="tooltiptext">Skills</span>
          </Link>
        </li>
        <li className={`tip ${selectedItem === 'portfolio' ? 'selected' : ''}`}>
          <Link to="portfolio" smooth={true} duration={500} onClick={() => handleItemClick('portfolio')}>
            <i className="fa-thin fa-shapes"></i>
            <span className="tooltiptext">Portfolio</span>
          </Link>
        </li>
        <li className={`tip ${selectedItem === 'contact' ? 'selected' : ''}`}>
          <Link to="contact" smooth={true} duration={500} onClick={() => handleItemClick('contact')}>
            <i className="fa-thin fa-grip-vertical"></i>
            <span className="tooltiptext">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;

