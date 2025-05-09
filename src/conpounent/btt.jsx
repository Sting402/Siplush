import React, { useState, useEffect } from 'react';
import { FiChevronUp } from "react-icons/fi";
import '../style/btt.css'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <button 
      className={`back-to-top ${isVisible ? 'visible' : 'hidden'}`} 
      onClick={scrollToTop}
    >
      <FiChevronUp />
     
    </button>
  );
};

export default BackToTopButton;