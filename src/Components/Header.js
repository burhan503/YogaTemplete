import React from 'react'
import './Header.css';
import logo from '../img/AYlogo.png'
const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg nav_color">
  <div className="container-fluid ">
    <span className="navbar-brand head_logo"><img src={logo} alt="Logo"/></span>
    <ul>
  {/* <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li> */}
</ul>
    </div>
</nav>  

    </>
  )
}

export default Header