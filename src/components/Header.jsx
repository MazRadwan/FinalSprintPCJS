// src/components/Header.jsx
import React from "react";
import "./Header.css";
import logo from "../assets/steelandstubbleLogo.png"; // Import the logo image

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">Steel & Stubble</span>
      </a>
      <div className="cart-icon-container">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-badge">1</span>
      </div>
    </header>
  );
};

export default Header;
