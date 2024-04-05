import { useState } from 'react';
import styles from "./ShoppingCart.module.css"
const ShoppingCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button className={styles.btn} onClick={toggleModal}>Open Modal 2</button>
      {isModalOpen && (
        <div className={styles.modal2}>
          <div className={styles.modalContent2}>
            <span className={styles.close} onClick={toggleModal}>&times;</span>
            <br />
            <br />
            <p>This is a modal222!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;