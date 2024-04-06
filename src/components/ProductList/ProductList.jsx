import React from "react"; // Now you only need React import
import { getProducts } from "../../api";
import styles from "./ProductList.module.css";
import img from "../../assets/SSshavingCream.PNG";
import img2 from "../../assets/SSbalm.PNG";
import img3 from "../../assets/SSBlueRazor.PNG";
import img4 from "../../assets/SSshaveGel.PNG";

const allImgs = [img, img2, img3, img4];

const ProductList = ({ onProductSelect }) => {
  // Destructure the passed prop here
  const products = getProducts();

  // You don't need selectedProduct state here anymore

  return (
    <div className={styles.productContainer}>
      <div className={styles.list}>
        {products.map((product, index) => (
          <div key={product.id} className={styles.product}>
            <img
              src={allImgs[index]}
              width={"200px"}
              height={"500px"}
              alt={product.name}
            />
            <br />
            {product.name}
            <br />
            {product.price}
            <br />
            <button
              onClick={() => onProductSelect(product)} // Use the prop function to handle modal opening
              className={styles.btn}
            >
              Open Modal
            </button>
          </div>
        ))}
      </div>
      {/* Removed ProductDetails rendering */}
    </div>
  );
};

export default ProductList;
