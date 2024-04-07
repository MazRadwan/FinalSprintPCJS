// Header.jsx
import React, { useContext } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/steelandstubbleLogo.png";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate total cart items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Conditional style for the cart badge
  const badgeStyle = totalItems > 0 ? { display: "block" } : {};

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.logoText}>Steel & Stubble</span>
      </a>
      <div className={styles.cartIconContainer}>
        <i className="fas fa-shopping-cart"></i>
        <span className={styles.cartBadge} style={badgeStyle}>
          {totalItems}
        </span>
      </div>
    </header>
  );
};

export default Header;
