// Header.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link
import styles from "./Header.module.css";
import logo from "../../assets/steelandstubbleLogo.png";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const badgeStyle = totalItems > 0 ? { display: "block" } : {};

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.logoText}>Steel & Stubble</span>
      </Link>
      <div className={styles.cartIconContainer}>
        <Link to="/checkout">
          <i className="fas fa-shopping-cart"></i>
          {totalItems > 0 && (
            <span className={styles.cartBadge} style={badgeStyle}>
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
