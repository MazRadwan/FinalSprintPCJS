import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./CartSummary.module.css";
import { CartContext } from "../../context/CartContext";

const CartSummary = () => {
  const { cartItems } = useContext(CartContext);

  // Logic to calculate subtotals and taxes
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxes = subtotal * 0.15;

  return (
    <div className={styles.cartSummary}>
      <div className={styles.subtotal}>
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className={styles.taxes}>
        <span>Taxes:</span>
        <span>${taxes.toFixed(2)}</span>
      </div>
      <div className={styles.shipping}>
        <span>Shipping:</span>
        <span>FREE</span>
      </div>
      <div className={styles.estimatedTotal}>
        <span>Estimated Total:</span>
        <span>${(subtotal + taxes).toFixed(2)}</span>
      </div>
      <button className={styles.checkoutButton}>CHECKOUT</button>
      <Link to="/" className={styles.continueShopping}>
        CONTINUE SHOPPING
      </Link>
    </div>
  );
};

export default CartSummary;
