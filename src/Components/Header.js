import React from 'react';
import '../App.css';
import Logo from "../Images/saas.jpg";

function Header() {
  return (
    <header>
      <nav className="navbar">
        
        <img src={Logo} alt="Company Logo" className="logo" />
        <div className="nav-items">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="actions">
          <button className="sign-up-button"><a href="#contact">Start Now</a></button>
          {/* <button className="sign-up-button"><a href="#contact">Sign Up</a></button> */}
        </div>
      </nav>

      
    </header>
  );
}

export default Header;
