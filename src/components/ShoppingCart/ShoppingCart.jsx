import React, { useContext, useEffect } from "react";
import styles from "./ShoppingCart.module.css";
import logo from "../../assets/steelandstubbleLogo.png";
import { CartContext } from "../../context/CartContext";
// import { getProducts } from "../../api";
import shaveGelImage from "../../assets/SSshavingCream.PNG";
import postShaveBalmImage from "../../assets/SSbalm.PNG";
import premiumShaverImage from "../../assets/SSBlueRazor.PNG";
import shaveCreamImage from "../../assets/SSshaveGel.PNG";

const productImages = {
  "Shave Gel": shaveGelImage, // "Shave Gel" should match the product name exactly.
  "Post-Shave Balm": postShaveBalmImage,
  "Premium Shaver": premiumShaverImage,
  "Shave Cream": shaveCreamImage,
  // Ensure the rest of your product names match exactly as well.
};

const ShoppingCart = ({ onClose }) => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  // const detailedCartItems = cartItems.map((item) => {
  //   const product = getProducts().find((p) => p.id === item.productId);
  //   return { ...item, ...product }; // Combine cart item data with product details
  // });
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
      onClose(); // Call the onClose function if the cart is empty
    }
  }, [cartItems, onClose]); // Depend on cartItems and onClose

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
          <button className={styles.checkoutBtn}>CHECKOUT</button>
        </div>
        <div className={styles.cartHeader}>
          Your Cart ({calculateTotalItems()})
        </div>
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
      </div>
    </div>
  );
};

export default ShoppingCart;
