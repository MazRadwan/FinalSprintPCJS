import React from "react";
import styles from "./ListItem.module.css";
import shaveGelImage from "../../assets/SSshavingCream.PNG";
import postShaveBalmImage from "../../assets/SSbalm.PNG";
import premiumShaverImage from "../../assets/SSBlueRazor.PNG";
import shaveCreamImage from "../../assets/SSshaveGel.PNG";

const productImages = {
  "Shave Gel": shaveGelImage,
  "Post-Shave Balm": postShaveBalmImage,
  "Premium Shaver": premiumShaverImage,
  "Shave Cream": shaveCreamImage,
};

export default function ListItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <img src={productImages[item.name]} alt={item.name} />
      </div>
      <div className={styles.itemInfo}>
        <p className={styles.itemTitle}>{item.name}</p>
        <div className={styles.quantityControls}>
          <i
            className="fas fa-minus-circle"
            onClick={() => onDecrement(item.id)}
          ></i>
          <span>{item.quantity}</span>
          <i
            className="fas fa-plus-circle"
            onClick={() => onIncrement(item.id)}
          ></i>
        </div>
      </div>
      <div className={styles.priceAndRemove}>
        <p className={styles.itemPrice}>
          ${(item.price * item.quantity).toFixed(2)} CAD
        </p>
        <i
          className={`fas fa-times ${styles.removeItem}`}
          onClick={() => onRemove(item.id)}
        ></i>
      </div>
    </div>
  );
}
