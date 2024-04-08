// src/components/FeaturedIn/FeaturedIn.jsx
import React, { useEffect, useRef } from "react";
import styles from "./FeaturedIn.module.css";
import esquireLogo from "../../assets/Esquire_logo.png";
import gqLogo from "../../assets/GQ_Logo.png";
import mensHealthLogo from "../../assets/Mens_Health.png";

const FeaturedIn = () => {
  // Refs for each logo
  const esquireRef = useRef(null);
  const gqRef = useRef(null);
  const mensHealthRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.5 }
    );

    const logoRefs = [esquireRef, gqRef, mensHealthRef];
    logoRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () =>
      logoRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
  }, []);

  return (
    <div className={styles.featuredContainer}>
      <h2 className={styles.header}>Featured In</h2>
      <div className={styles.logos}>
        <div className={styles.logoContainer}>
          <img src={esquireLogo} alt="Esquire Logo" className={styles.logo} />
        </div>
        <div className={styles.logoContainer}>
          <img src={gqLogo} alt="GQ Logo" className={styles.logo} />
        </div>
        <div className={styles.logoContainer}>
          <img
            src={mensHealthLogo}
            alt="Men's Health Logo"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedIn;
