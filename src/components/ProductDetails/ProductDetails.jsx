import ShoppingCart from "../ShoppingCart/ShoppingCart"
import styles from "./ProductDetails.module.css"

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <br />
        <div>
          <p>{product.description}</p>
          <ShoppingCart/>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;