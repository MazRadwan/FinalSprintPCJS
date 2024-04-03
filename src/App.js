import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider"; // Make sure the path is correct
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider /> {/* This is where the HeroSlider will be displayed */}
      <Footer />
    </div>
  );
}

export default App;
