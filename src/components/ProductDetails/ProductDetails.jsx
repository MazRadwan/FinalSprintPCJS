import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext"; // Correct path to CartContext
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product, onClose, onOpenCart, isSlidingOut }) => {
  const { addToCart } = useContext(CartContext);

  // Update the function to open the cart after adding the item
  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    onOpenCart(); // Open the shopping cart, which will also handle sliding out the modal
  };

  // Use the sliding out class if necessary
  const modalClass = isSlidingOut
    ? `${styles.modal} ${styles.modalSlidingOut}`
    : styles.modal;

  return (
    <div className={modalClass}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <div>
          {/* Include product name and price details in your design */}
          <h3>
            {product.name} | {product.price}
          </h3>
          <p>{product.description}</p>
          <button onClick={handleAddToCart} className={styles.viewCartButton}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
