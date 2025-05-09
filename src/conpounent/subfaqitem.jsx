// SubAccordionItem.js
import React from "react";

const SubFAQItem = ({ title, isOpen, onToggle, children }) => (
  <div className="sub-accordion-item">
    <div
      className={`sub-accordion-header ${isOpen ? "active" : ""}`}
      onClick={onToggle}
    >
      {title}
    </div>
    <div className={`sub-accordion-content ${isOpen ? "open" : ""}`}>
      {children}
    </div>
  </div>
);

export default SubFAQItem;
