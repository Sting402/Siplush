import React, { useState, useEffect } from "react";
import { create } from "zustand";
import "../style/features.css";
import tImage from "../assets/img/T.png";
import nfmImage from "../assets/img/NFM.png";
import lrImage from "../assets/img/LR.png";
import ebImage from "../assets/img/EB.png";
import chfImage from "../assets/img/CHF.png";

const useCardStore = create((set) => ({
  clickCounts: JSON.parse(localStorage.getItem("cardClickCounts")) || {},
  incrementClick: (id) =>
    set((state) => {
      const newCounts = {
        ...state.clickCounts,
        [id]: (state.clickCounts[id] || 0) + 1,
      };
      localStorage.setItem("cardClickCounts", JSON.stringify(newCounts)); // Save to localStorage
      return { clickCounts: newCounts };
    }),
}));

const cardsData = [
  {
    id: 0,
    title: "Noise-free mixing",
    image: nfmImage,
    description:
      "Enjoy a smooth, lump-free blend without the noisy blender ball.",
    large: true,
  },
  {
    id: 1,
    title: "Stay Cool All Day",
    image: tImage,
    description: "Keeps drinks cold for up to 19 hours (50°F/10°C).",
  },
  {
    id: 2,
    title: "Leak-Proof",
    image: lrImage,
    description:
      "The secure screw-on lid ensures leakproof sipping convenience.",
  },
  {
    id: 3,
    title: "Easy blending",
    image: ebImage,
    description:
      "The twist-off agitator efficiently mixes protein powders and nutrition blends, while keeping ice cubes in place.",
  },
  {
    id: 4,
    title: "Cup Holder Friendly",
    image: chfImage,
    description: "Fits car cup holders for convenient sipping on the go.",
  },
];

const Card = ({ card, isFlipped, onClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${
        card.large ? "large-card" : ""
      }`}
      onClick={() => onClick(card.id)}
    >
      <div className="card-inner">
        <div
          className="card-front"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="plus-icon">+</span>
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
        <Card
          key={card.id}
          card={card}
          isFlipped={flippedId === card.id}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default Feat;
