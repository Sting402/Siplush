import React, { useState, useEffect, useRef } from 'react';
import '../style/nav.css';
import logo from '../assets/img/Logo-Color-Final.png';

const messages = [
  "🔥 Limited-Time Offer! 🔥 Get 10% OFF your ultimate stainless steel shaker!💪 ",
  "🔥 New Arrival! Check out our latest products!  ",
  "🔥 Don't miss out on our exclusive deals ! 🛒  "
];

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isNavTransparent, setIsNavTransparent] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [navOffset, setNavOffset] = useState(0);
  const promoRef = useRef(null);
  const navRef = useRef(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      const heroSectionTop = document.querySelector('.hero-slide img')?.offsetTop || 650;
      setIsNavTransparent(currentScrollPos < heroSectionTop);
      setPrevScrollPos(currentScrollPos);

      if (window.scrollY === 0) {
        setShowPromo(true);
      } else {
        setShowPromo(false);
      }
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (showPromo && promoRef.current && navRef.current) {
      setNavOffset(promoRef.current.offsetHeight);
    } else {
      setNavOffset(0);
    }
  }, [showPromo]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 8000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    
    <section className="navbar-section">
      <>
        {showPromo && (
          <div className="promo-section" ref={promoRef}>
          <div className="slideshow">
            <p>{messages[currentMessageIndex]}</p>
          </div>
          <div><a href="https://www.amazon.com/stores/SIPLUSH/page/36C74EDC-501B-4CE3-B283-573EB0C97A25?ref_=ast_bln" target="_blank" rel="noopener noreferrer" className="shop-now"> Shop Now! </a></div>
        </div>
        )}
        <nav
          className={`navbar ${isNavVisible ? 'visible' : 'hidden'} ${isNavTransparent ? 'transparent' : ''}`}
          style={{ paddingTop: navOffset }} ref={navRef}
        >
          <div className="logo">
            <img src={logo} alt="Siplush Logo"/>

          </div>
          <div className="menu-toggle" onClick={toggleMenu} aria-expanded={isMenuOpen}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li className="nav-link">
                <a href="#About" data-content="Siplush">
                  Brand
                </a>
              </li>

              <li className="nav-link">
                <a href="#Featuressection" data-content="feature-section">
                  Features
                </a>
              </li>
              <li className="nav-link">
                <a href="#BOM" data-content="lifestyle-section">
                  Paradise Shaker
                </a>
              </li>
              <li className="nav-link">
                <a href="#JoinBrandsSection" data-content="JoinBrandsSection">
                  Testimony
                </a>
              </li>
              <li className="nav-link">
                <a href="#FAQ" data-content="What you wonder">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </>
      </section>
  );
};

export default Navbar;
