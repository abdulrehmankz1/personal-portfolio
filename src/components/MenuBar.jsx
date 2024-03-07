import React from 'react'

function MenuBar() {
  return (
    <div>
      <ul class="menu scroll-nav d-flex">
        <li>
          <a class="scroll-to" href="#home" data-bs-toggle="tooltip" data-bs-placement="right" title="Home">
            <i class="fa-solid fa-house"></i>
          </a>
        </li>
        <li>
          <a class="scroll-to" href="#about">
            <i class="fa-solid fa-user"></i>
          </a>
        </li>
        <li>
          <a class="scroll-to" href="#resume">
            <i class="fa-solid fa-briefcase"></i>
          </a>
        </li>
        <li>
          <a href="#services">
            <i class="fa-solid fa-bars-staggered"></i>
          </a>
        </li>
        <li>
          <a class="scroll-to" href="#skills">
            <i class="fa-solid fa-shapes"></i>
          </a>
        </li>
        <li>
          <a class="scroll-to active" href="#portfolio">
            <i className="fa-solid fa-grip-vertical"></i>
          </a>
        </li>
        <li>
          <a class="scroll-to" href="#contact" >
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar