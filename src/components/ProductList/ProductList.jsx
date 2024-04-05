import { useState } from "react"
import { getProducts } from "../../api"
import ProductDetails from "../ProductDetails/ProductDetails"
import styles from "./ProductList.module.css"
import img from "../../assets/SSshavingCream.PNG"
import img2 from "../../assets/SSbalm.PNG"
import img3 from "../../assets/SSBlueRazor.PNG"
import img4 from "../../assets/SSshaveGel.PNG"

const allImgs = [img, img2, img3, img4]

const ProductList = () => {
  const products = getProducts()
  const [selectedProduct, setProduct] = useState(null)

  const handleModalOpen = (product) => {
    setProduct(product)
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.list}>
        {products.map((product, index) => (
          <div key={product.id} className={styles.product}>
            <img src={allImgs[index]} width={"200px"} height={"500px"} alt={product.name} />
            <br />
            {product.name}
            <br />
            {product.price}
            <br />
            <button onClick={() => handleModalOpen(product)} className={styles.btn}>open Modal</button>
          </div>
        ))}
      </div>
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={() => setProduct(null)} />}
    </div>
  )
}

export default ProductList