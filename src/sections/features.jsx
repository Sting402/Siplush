import React, { useState,useEffect } from "react";
import { create } from "zustand";
import "../style/features.css";

const useCardStore = create((set) => ({
  clickCounts: JSON.parse(localStorage.getItem("cardClickCounts")) || {},
  incrementClick: (id) =>
    set((state) => {
      const newCounts = { ...state.clickCounts, [id]: (state.clickCounts[id] || 0) + 1 };
      localStorage.setItem("cardClickCounts", JSON.stringify(newCounts)); // Save to localStorage
      return { clickCounts: newCounts };
    }),
}));

const cardsData = [
  {
    id: 0,
    title: "Stay Cool All Day Long",
    image: "src/assets/img/T.png",
    description: "Keeps drinks cold for up to 19 hours (50°F/10°C).",
    large: true,
  },
  {
    id: 1,
    title: "Noise-free mixing",
    image: "src/assets/img/NFM.png",
    description: "Enjoy a smooth, lump-free blend without the noisy blender ball.",
  },
  {
    id: 2,
    title: "Leak-Proof",
    image: "src/assets/img/LR.png",
    description: "The secure screw-on lid ensures leakproof sipping convenience.",
  },
  {
    id: 3,
    title: "Easy blending",
    image: "src/assets/img/EB.png",
    description: "The twist-off agitator efficiently mixes protein powders and nutrition blends, while keeping ice cubes in place.",
  },
  {
    id: 4,
    title: "Cup Holder Friendly",
    image: "src/assets/img/CHF.png",
    description: "Fits car cup holders for convenient sipping on the go.",
  },
];


const Card = ({ card, isFlipped, onClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${card.large ? "large-card" : ""}`}
      onClick={() => onClick(card.id)}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={card.image} alt={card.title} className="card-image" />
          <span className="plus-icon">+</span>
          <h3 className="card-title">{card.title}</h3>
        </div>
        <div className="card-back">
          <h3 className="back-title">{card.title}</h3>
          <p className="card-p">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

const Feat = () => {
  const [flippedId, setFlippedId] = useState(null);
  const { clickCounts, incrementClick } = useCardStore();

  const handleCardClick = (id) => {
    setFlippedId(flippedId === id ? null : id);
    incrementClick(id);
  };
  console.log(clickCounts);

  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <Card key={card.id} card={card} isFlipped={flippedId === card.id} onClick={handleCardClick} />
      ))}
      {/* Optional: Display click counts for debugging */}
      {/* <div style={{ marginTop: "20px" }}>
        <h3>Click Counts:</h3>
        <ul>
          {cardsData.map((card) => (
            <li key={card.id}>
              Card {card.id}: {clickCounts[card.id] || 0} clicks
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Feat;