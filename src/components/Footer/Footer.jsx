// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/steelandstubbleLogo.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.questionSection}>
          <h3>Have a Question?</h3>
          <a href="mailto:help@steelandstubble.com" className={styles.email}>
            help@steelandstubble.com
          </a>
          <p>(800) 555-1212</p>
        </div>
        <img src={logo} alt="Steel & Stubble Logo" className={styles.logo} />
        <div className={styles.socialSection}>
          <h3>Follow us on Social Media</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 Steel & Stubble. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
