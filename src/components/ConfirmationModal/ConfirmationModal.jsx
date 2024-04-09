import React from "react";
import styles from "./ConfirmationModal.module.css";
import logo from "../../assets/steelandstubbleLogo.png";

const ConfirmationModal = () => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.headerContainer}>
          <h1>ORDER CONFIRMED</h1>
        </div>
        <div className={styles.taglineContainer}>
          <h2>Your Grooming Game is About to Get Legendary!</h2>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
