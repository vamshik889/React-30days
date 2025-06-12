import React, { useState } from "react";

const CardsCarousel = () => {
  const cards = [
    { id: 1, description: "Description for Card 1" },
    { id: 2, description: "Description for Card 2" },
    { id: 3, description: "Description for Card 3" },
    { id: 4, description: "Description for Card 4" },
  ];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index + 1);
  };
  const handlePrev = () => {
    setIndex(index - 1);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "15px",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Card card={cards[index]} />
      <div>
        <button style={buttonStyle} onClick={handlePrev} disabled={index === 0}>
          Prev
        </button>
        {cards[index].id} of {cards.length}
        <button style={buttonStyle} onClick={handleNext} disabled={index === cards.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

const buttonStyle ={
    borderRadius:"5px",
    
}
export const Card = ({ card }) => {
  const { id, description } = card;
  return (
    <div
      key={id}
      style={{ boxShadow: " rgba(149, 157, 165, 0.2)  0px 8px 24px" }}
    >
      <div>
        <h1>Card {id}</h1>
      </div>
      <div>{description}</div>
    </div>
  );
};
export default CardsCarousel;
