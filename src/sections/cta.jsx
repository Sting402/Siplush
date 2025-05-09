import React from 'react';
import '../style/cta.css';

const CTA = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };
  return (
    <div className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h2>Upgrade Your Gear</h2>
          <p>Discover the perfect balance of durability, style, and performance. Don't miss out!</p>
        </div>
        <button
          onClick= {()=>handleButtonClick("https://www.amazon.com/stores/SIPLUSH/page/36C74EDC-501B-4CE3-B283-573EB0C97A25?ref_=ast_bln")}
        >
          Get Your's Now 
        </button>
      </div>
    </div>
  );
};

export default CTA;
