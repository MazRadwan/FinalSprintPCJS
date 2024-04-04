import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider"; // Make sure the path is correct
import Footer from "./components/Footer/Footer";
import FeaturedIn from "./components/FeaturedIn/FeaturedIn"; // Make sure the path is correct
import "./App.css";
import QualityAssurance from "./components/QualityAssurance/QualityAssurance"; // Make sure the path is correct
import ProductList from './components/ProductList/ProductList';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <QualityAssurance />
      <ProductList/>
      <FeaturedIn />
      <Footer />
    </div>
  );
}

export default App;
