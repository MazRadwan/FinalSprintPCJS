import React, { useState } from "react";

import Header from "./components/Header/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Footer from "./components/Footer/Footer";
import FeaturedIn from "./components/FeaturedIn/FeaturedIn";
import QualityAssurance from "./components/QualityAssurance/QualityAssurance";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { CartProvider } from "./context/CartContext";

function App() {
  const [isProductDetailsOpen, setProductDetailsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setProductDetailsOpen(true);
  };

  const closeProductDetails = () => {
    setProductDetailsOpen(false);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const openCart = () => {
    setIsSlidingOut(true);
    setTimeout(() => {
      setIsSlidingOut(false);
      setProductDetailsOpen(false);
      setCartOpen(true);
    }, 300);
  };

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <HeroSlider />
        <QualityAssurance />
        <ProductList onProductSelect={openProductDetails} />{" "}
        {isProductDetailsOpen && (
          <ProductDetails
            product={selectedProduct}
            onClose={closeProductDetails}
            onOpenCart={openCart}
            isSlidingOut={isSlidingOut}
          />
        )}
        {isCartOpen && <ShoppingCart onClose={toggleCart} />} <FeaturedIn />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
