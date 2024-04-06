import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product, onClose, onOpenCart, isSlidingOut }) => {
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
          <p>{product.description}</p>
          <button onClick={onOpenCart} className={styles.viewCartButton}>
            View Cart
          </button>
          {/* The ShoppingCart component will be managed by App.js now */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
