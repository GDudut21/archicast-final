import React from 'react';

const Nav = () => (
  <div className="page-container">
    <header className="header">
      <div className="header-left">
        <img
          src="archicastlogo.png"
          alt="Archicast Logo"
          className="logo-img"
        />
        <div>
          <h1 className="logo">ARCHICAST</h1>
          <p className="tagline">Build the Future with Excellence and Innovation</p>
        </div>
      </div>
      <div className="header-right">
        <nav className="fixed-nav">
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);

export default Nav;
