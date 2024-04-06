import React, { useContext } from "react";
import styles from "./ShoppingCart.module.css";
import logo from "../../assets/steelandstubbleLogo.png";
import { CartContext } from "../../context/CartContext"; // Adjust the import path as necessary

const ShoppingCart = ({ onClose }) => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Assuming there are no other taxes or additional costs for this example
  const subtotal = calculateSubtotal();
  const estimatedTotal = subtotal; // Would be more complex with taxes etc.

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <img src={logo} alt="Steel & Stubble Logo" className={styles.logo} />
          <h2 className={styles.companyName}>Steel & Stubble</h2>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles.subtotalSection}>
          Subtotal: ${subtotal.toFixed(2)}
          Estimated Total: ${estimatedTotal.toFixed(2)}
        </div>
        <div className={styles.cartActions}>
          <button className={styles.continueShoppingBtn} onClick={onClose}>
            KEEP SHOPPING
          </button>
          <button className={styles.checkoutBtn}>CHECKOUT</button>
        </div>
        {/* List cart items here */}
        {cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            {/* Display cart item details */}
            <div className={styles.itemDetails}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className={styles.quantityControls}>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className={styles.removeItem}
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
