import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Footer from "./components/Footer/Footer";
import FeaturedIn from "./components/FeaturedIn/FeaturedIn";
import QualityAssurance from "./components/QualityAssurance/QualityAssurance";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CheckoutPage from "./components/CheckOutPage/CheckOutPage";

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
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSlider />
                  <QualityAssurance />
                  <ProductList onProductSelect={openProductDetails} />
                  <FeaturedIn />
                </>
              }
            />
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* Define other routes as needed */}
          </Routes>
          {isProductDetailsOpen && (
            <ProductDetails
              product={selectedProduct}
              onClose={closeProductDetails}
              onOpenCart={openCart}
              isSlidingOut={isSlidingOut}
            />
          )}
          {isCartOpen && <ShoppingCart onClose={toggleCart} />}
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
