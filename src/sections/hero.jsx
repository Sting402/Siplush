import React, { useState, useEffect } from "react";
import "../style/hero.css"; // Import the updated CSS file;
import hero1 from "../assets/img/Hero 1.png";
import hero2 from "../assets/img/Hero 2.png";
import hero3 from "../assets/img/Hero 3.png";
import hero4 from "../assets/img/Hero 4.png";

const images = [
  {
    src: hero1,
    alt: "First slide",
    imageStyle: { objectPosition: "center top" },
  },
  {
    src: hero2,
    alt: "Second slide",
    imageStyle: { objectPosition: "center top" },
  },
  {
    src: hero3,
    alt: "Third slide",
    imageStyle: { objectPosition: "center top" },
  },
  {
    src: hero4,
    alt: "Third slide",
    imageStyle: { objectPosition: "center top" },
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Rotate images every 4 seconds
    return () => clearInterval(interval);
  }, []);
  const handleButtonClick = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };
  return (
    <section className="hero-section">
      <div className="hero-slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentIndex ? "active" : "inactive"
            }`}
          >
            <img src={image.src} alt={image.alt} style={images.imagesStyle} />
          </div>
        ))}
      </div>
      <div className="text-container" style={images.textStyle}>
        <h2>{images[currentIndex].caption}</h2>
        <p>{images[currentIndex].subCaption}</p>
        {/* <button onClick= {()=>handleButtonClick("https://www.amazon.com/stores/SIPLUSH/page/36C74EDC-501B-4CE3-B283-573EB0C97A25?ref_=ast_bln")}>Shop Now</button> */}
      </div>
    </section>
  );
};

export default Hero;
