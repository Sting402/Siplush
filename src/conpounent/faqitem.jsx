// FAQItem.js
import React from "react";

const FAQItem = ({ title, isOpen, onToggle, children }) => (
  <div className="accordion-item">
    <div
      className={`accordion-header ${isOpen ? "active" : ""}`}
      onClick={onToggle}
    >
      {title}
    </div>
    <div className={`accordion-content ${isOpen ? "open" : ""}`}>
      {children}
    </div>
  </div>
);

export default FAQItem;
