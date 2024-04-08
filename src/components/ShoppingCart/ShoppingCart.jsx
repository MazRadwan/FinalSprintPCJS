import React, { useContext, useEffect, useState } from "react";
import styles from "./ShoppingCart.module.css";
import logo from "../../assets/steelandstubbleLogo.png";
import { CartContext } from "../../context/CartContext";
import shaveGelImage from "../../assets/SSshavingCream.PNG";
import postShaveBalmImage from "../../assets/SSbalm.PNG";
import premiumShaverImage from "../../assets/SSBlueRazor.PNG";
import shaveCreamImage from "../../assets/SSshaveGel.PNG";
import { useNavigate } from "react-router-dom";

const productImages = {
  "Shave Gel": shaveGelImage,
  "Post-Shave Balm": postShaveBalmImage,
  "Premium Shaver": premiumShaverImage,
  "Shave Cream": shaveCreamImage,
};

const ShoppingCart = ({ onClose }) => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      navigate("/checkout");
      onClose();
    }, 300);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const estimatedTotal = subtotal;

  useEffect(() => {
    if (cartItems.length === 0) {
      onClose();
    }
  }, [cartItems, onClose]);

  return (
    <div
      className={`${styles.modalOverlay} ${
        isCheckingOut ? styles.overlayFadeOut : ""
      }`}
      onClick={onClose}
      style={{ display: isCheckingOut ? "none" : "flex" }}
    >
      <div
        className={`${styles.modal} ${
          isCheckingOut ? styles.modalSlideOut : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <img src={logo} alt="Steel & Stubble Logo" className={styles.logo} />
          <h2 className={styles.companyName}>Steel & Stubble</h2>
          <i className={`fas fa-times ${styles.close}`} onClick={onClose}></i>
        </div>

        <div className={styles.subtotalSection}>
          <span className={styles.subtotal}>
            Subtotal: ${subtotal.toFixed(2)}
          </span>
          <span className={styles.estimatedTotal}>
            Estimated Total: ${estimatedTotal.toFixed(2)}
          </span>
        </div>

        <div className={styles.cartActions}>
          <button className={styles.continueShoppingBtn} onClick={onClose}>
            KEEP SHOPPING
          </button>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>
            CHECKOUT
          </button>
        </div>

        <div className={styles.cartHeader}>
          Your Cart ({calculateTotalItems()})
        </div>

        {/* Mapping over cartItems to display each item */}
        {cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <div className={styles.itemImage}>
              <img src={productImages[item.name]} alt={item.name} />
            </div>
            <div className={styles.itemInfo}>
              <p className={styles.itemTitle}>{item.name}</p>
              <div className={styles.quantityControls}>
                <i
                  className="fas fa-minus-circle"
                  onClick={() => decrementQuantity(item.id)}
                ></i>
                <span>{item.quantity}</span>
                <i
                  className="fas fa-plus-circle"
                  onClick={() => incrementQuantity(item.id)}
                ></i>
              </div>
            </div>
            <div className={styles.priceAndRemove}>
              <p className={styles.itemPrice}>
                ${(item.price * item.quantity).toFixed(2)} CAD
              </p>
              <i
                className={`fas fa-times ${styles.removeItem}`}
                onClick={() => removeFromCart(item.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* This closes the modal div */}
    </div> /* This closes the modalOverlay div */
  );
};

export default ShoppingCart;
