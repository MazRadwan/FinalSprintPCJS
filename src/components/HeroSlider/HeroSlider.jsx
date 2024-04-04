// src/components/HeroSlider/HeroSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSlider.module.css";
import firstImage from "../../assets/SSHero4.png";
import secondImage from "../../assets/SShero3.PNG";
import thirdImage from "../../assets/SShero2.PNG";
import fourthImage from "../../assets/SShero1.PNG";

const imageUrls = [firstImage, secondImage, thirdImage, fourthImage];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  // Preload images
  useEffect(() => {
    imageUrls.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  // Slide transition effect
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % imageUrls.length);
    }, 2000);

    // Cleanup on component unmount
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.mainHeading}>Shave Smart</h2>
        <h2 className={styles.mainHeading}>Save Smarter</h2>
        <p className={styles.subHeading}>Elevate your shave with smooth</p>
        <p className={styles.subHeading}>precision and exceptional quality</p>
      </div>
    </div>
  );
};

export default HeroSlider;
