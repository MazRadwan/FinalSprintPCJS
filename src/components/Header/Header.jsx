import React from "react";
import styles from "./Header.module.css"; // Updated import statement
import logo from "../../assets/steelandstubbleLogo.png"; // Correct the path if necessary

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.logoText}>Steel & Stubble</span>
      </a>
      <div className={styles.cartIconContainer}>
        <i className="fas fa-shopping-cart"></i>
        <span className={styles.cartBadge}>1</span>
      </div>
    </header>
  );
};

export default Header;
