import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product, onClose, onOpenCart, isSlidingOut }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    onOpenCart();
  };

  const modalClass = isSlidingOut
    ? `${styles.modal} ${styles.modalSlidingOut}`
    : styles.modal;

  return (
    <div className={modalClass}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            <span className={styles.titleName}>{product.name}</span>
            <span className={styles.titleSeparator}> | </span>
            <span className={styles.titlePrice}>
              ${product.price.toFixed(2)} CAD
            </span>
          </h3>

          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        </div>
        <p className={styles.productDescription}>{product.description}</p>
        <button onClick={handleAddToCart} className={styles.orderNowButton}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
