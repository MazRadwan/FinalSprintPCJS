// src/components/QualityAssurance/QualityAssurance.jsx
import React from "react";
import styles from "./QualityAssurance.module.css";
import logoImage from "../../assets/steelandstubbleLogo.png";

const QualityAssurance = () => {
  return (
    <div className={styles.qualityAssuranceContainer}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img
            src={logoImage}
            alt="Steel & Stubble Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.header}>Steel & Stubble Quality Guarantee</h2>
          <p className={styles.text}>
            "Experience the Steel & Stubble Difference with Confidence. Our
            commitment to quality is as unwavering as your need for a perfect
            shave. Each product is meticulously crafted, ensuring a shave that’s
            not just close, but comfortable and sophisticated. Should our blades
            not meet the mark, or if you find anything less than excellence in
            our handles, we pledge to make it right. This is our Quality
            Guarantee to you—because your shave should be as reliable as the
            steel we stand by."
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
