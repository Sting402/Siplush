import React, { useState } from "react";
import SubFAQItem from "./subfaqitem";

const SubFAQ = ({ subItems }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      {subItems.map((item, index) => (
        <SubFAQItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {openIndex === index && (
            <div style={{ padding: "8px", color: "#555" }}>
              {/* Here we render the content for each item */}
              <p>{item.content}</p>
            </div>
          )}
        </SubFAQItem>
      ))}
    </div>
  );
};

export default SubFAQ;
